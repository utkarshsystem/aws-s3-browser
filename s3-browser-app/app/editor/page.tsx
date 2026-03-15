'use client';

import { GetObjectCommand, PutObjectCommand, S3Client } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';

function getClient() {
  const accessKeyId = process.env.NEXT_PUBLIC_AWS_ACCESS_KEY_ID!;
  const secretAccessKey = process.env.NEXT_PUBLIC_AWS_SECRET_ACCESS_KEY!;
  const region = process.env.NEXT_PUBLIC_AWS_REGION || 'us-east-1';
  const sessionToken = process.env.NEXT_PUBLIC_AWS_SESSION_TOKEN || undefined;
  return new S3Client({ region, credentials: { accessKeyId, secretAccessKey, sessionToken } });
}

export default function EditorPage() {
  const params = useSearchParams();
  const bucket = params.get('bucket') ?? '';
  const key = params.get('key') ?? '';

  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [saved, setSaved] = useState(false);

  const loadFile = useCallback(async () => {
    if (!bucket || !key) return;
    setLoading(true);
    setError(null);
    try {
      const client = getClient();
      const url = await getSignedUrl(
        client,
        new GetObjectCommand({ Bucket: bucket, Key: key }),
        { expiresIn: 300 }
      );
      const res = await fetch(url);
      if (!res.ok) throw new Error(`HTTP ${res.status}: ${res.statusText}`);
      setContent(await res.text());
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : String(err));
    } finally {
      setLoading(false);
    }
  }, [bucket, key]);

  useEffect(() => { loadFile(); }, [loadFile]);

  const handleSave = async () => {
    if (!bucket || !key) return;
    setSaving(true);
    setSaved(false);
    setError(null);
    try {
      const client = getClient();
      await client.send(new PutObjectCommand({
        Bucket: bucket,
        Key: key,
        Body: content,
        ContentType: detectContentType(key),
      }));
      setSaved(true);
      setTimeout(() => setSaved(false), 3000);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : String(err));
    } finally {
      setSaving(false);
    }
  };

  const fileName = key.split('/').pop() ?? key;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', height: 'calc(100vh - 100px)' }}>
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
        <Link href="/" style={{ color: '#0070c0', textDecoration: 'none', fontSize: 13 }}>
          ← Back to Browser
        </Link>
        <span style={{ color: '#888', fontSize: 13 }}>
          {bucket} / {key}
        </span>
        <div style={{ marginLeft: 'auto', display: 'flex', gap: '8px' }}>
          <button
            onClick={loadFile}
            disabled={loading}
            style={btnStyle('#6b7280')}
          >
            ↺ Reload
          </button>
          <button
            onClick={handleSave}
            disabled={saving || loading || !bucket || !key}
            style={btnStyle('#0070c0')}
          >
            {saving ? 'Saving…' : '↑ Save'}
          </button>
        </div>
      </div>

      {/* Filename */}
      <div style={{ fontSize: 13, fontWeight: 600, color: '#333' }}>
        📄 {fileName}
      </div>

      {/* Feedback */}
      {error && (
        <div style={{ padding: '8px 12px', background: '#fff0f0', border: '1px solid #f5c2c2', borderRadius: 4, color: '#c0392b', fontSize: 13 }}>
          ⚠ {error}
        </div>
      )}
      {saved && (
        <div style={{ padding: '8px 12px', background: '#f0fff4', border: '1px solid #86efac', borderRadius: 4, color: '#166534', fontSize: 13 }}>
          ✓ Saved successfully
        </div>
      )}
      {!bucket && !key && (
        <div style={{ padding: '8px 12px', background: '#fef9c3', border: '1px solid #fde047', borderRadius: 4, color: '#854d0e', fontSize: 13 }}>
          No file selected. Open a file from the <Link href="/" style={{ color: '#0070c0' }}>S3 Browser</Link>.
        </div>
      )}

      {/* Editor */}
      {loading ? (
        <div style={{ color: '#888', fontSize: 13 }}>Loading…</div>
      ) : (
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          spellCheck={false}
          style={{
            flex: 1,
            width: '100%',
            padding: '12px',
            fontFamily: "'Menlo', 'Consolas', 'Monaco', monospace",
            fontSize: 13,
            lineHeight: 1.6,
            border: '1px solid #ddd',
            borderRadius: 6,
            resize: 'none',
            outline: 'none',
            background: '#fafafa',
            boxSizing: 'border-box',
          }}
          placeholder={bucket && key ? '' : 'Open a file from the S3 Browser to start editing…'}
        />
      )}
    </div>
  );
}

function btnStyle(color: string): React.CSSProperties {
  return {
    padding: '6px 14px',
    fontSize: 13,
    border: `1px solid ${color}`,
    borderRadius: 4,
    background: '#fff',
    color,
    cursor: 'pointer',
  };
}

function detectContentType(key: string): string {
  const ext = key.split('.').pop()?.toLowerCase();
  const map: Record<string, string> = {
    json: 'application/json',
    md: 'text/markdown',
    txt: 'text/plain',
    html: 'text/html',
    css: 'text/css',
    js: 'application/javascript',
    ts: 'application/typescript',
    tsx: 'application/typescript',
    jsx: 'application/javascript',
    xml: 'application/xml',
    yaml: 'application/x-yaml',
    yml: 'application/x-yaml',
    csv: 'text/csv',
    sh: 'text/x-sh',
  };
  return map[ext ?? ''] ?? 'text/plain';
}
