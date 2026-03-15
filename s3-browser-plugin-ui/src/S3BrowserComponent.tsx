import {
  DeleteObjectCommand,
  GetObjectCommand,
  ListBucketsCommand,
  ListObjectsV2Command,
  PutObjectCommand,
  S3Client,
} from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import type { AwsCredentialIdentity } from '@aws-sdk/types';
import { useCallback, useEffect, useRef, useState } from 'react';
import './S3BrowserComponent.css';

export interface S3BrowserComponentProps {
  /** AWS region, e.g. "us-east-1" */
  region: string;
  /**
   * Returns AWS credentials on demand.
   * - Local dev (s3-app): read VITE_AWS_* env vars
   * - Next.js deployment: call a Server Action backed by fromNodeProviderChain()
   */
  credentialsProvider: () => Promise<AwsCredentialIdentity>;
  /** Called when the user clicks "Open" on a file — navigate to your editor route. */
  onOpenInEditor?: (bucket: string, key: string) => void;
}

interface S3Item {
  key: string;
  size?: number;
  lastModified?: Date;
  isFolder: boolean;
}

export function S3BrowserComponent({ region, credentialsProvider, onOpenInEditor }: S3BrowserComponentProps) {
  const [buckets, setBuckets] = useState<string[]>([]);
  const [currentBucket, setCurrentBucket] = useState<string | null>(null);
  const [currentPrefix, setCurrentPrefix] = useState('');
  const [items, setItems] = useState<S3Item[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const getClient = useCallback(async () => {
    const credentials = await credentialsProvider();
    return new S3Client({ region, credentials });
  }, [region, credentialsProvider]);

  // List all buckets on mount
  useEffect(() => {
    setLoading(true);
    setError(null);
    getClient()
      .then((client) => client.send(new ListBucketsCommand({})))
      .then((res) => setBuckets(res.Buckets?.map((b) => b.Name!) ?? []))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [getClient]);

  const openBucket = useCallback(
    async (bucket: string, prefix = '') => {
      setLoading(true);
      setError(null);
      try {
        const client = await getClient();
        const res = await client.send(
          new ListObjectsV2Command({ Bucket: bucket, Prefix: prefix, Delimiter: '/' })
        );
        const folders: S3Item[] = (res.CommonPrefixes ?? []).map((cp) => ({
          key: cp.Prefix!,
          isFolder: true,
        }));
        const files: S3Item[] = (res.Contents ?? [])
          .filter((obj) => obj.Key !== prefix)
          .map((obj) => ({
            key: obj.Key!,
            size: obj.Size,
            lastModified: obj.LastModified,
            isFolder: false,
          }));
        setCurrentBucket(bucket);
        setCurrentPrefix(prefix);
        setItems([...folders, ...files]);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    },
    [getClient]
  );

  const handleDownload = useCallback(
    async (key: string) => {
      if (!currentBucket) return;
      try {
        const client = await getClient();
        const url = await getSignedUrl(
          client,
          new GetObjectCommand({ Bucket: currentBucket, Key: key }),
          { expiresIn: 300 }
        );
        const a = document.createElement('a');
        a.href = url;
        a.download = key.split('/').pop() ?? key;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
      } catch (err: any) {
        setError(err.message);
      }
    },
    [currentBucket, getClient]
  );

  const handleDelete = useCallback(
    async (key: string) => {
      if (!currentBucket || !window.confirm(`Delete "${key}"?`)) return;
      try {
        const client = await getClient();
        await client.send(new DeleteObjectCommand({ Bucket: currentBucket, Key: key }));
        await openBucket(currentBucket, currentPrefix);
      } catch (err: any) {
        setError(err.message);
      }
    },
    [currentBucket, currentPrefix, getClient, openBucket]
  );

  const handleUpload = useCallback(
    async (files: FileList | null) => {
      if (!currentBucket || !files) return;
      setLoading(true);
      try {
        const client = await getClient();
        for (const file of Array.from(files)) {
          await client.send(
            new PutObjectCommand({
              Bucket: currentBucket,
              Key: currentPrefix + file.name,
              Body: file,
              ContentType: file.type,
            })
          );
        }
        await openBucket(currentBucket, currentPrefix);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    },
    [currentBucket, currentPrefix, getClient, openBucket]
  );

  const breadcrumbs = currentBucket
    ? [currentBucket, ...currentPrefix.split('/').filter(Boolean)]
    : [];

  const handleBreadcrumb = (index: number) => {
    if (!currentBucket) return;
    if (index === 0) {
      openBucket(currentBucket, '');
    } else {
      const parts = currentPrefix.split('/').filter(Boolean);
      openBucket(currentBucket, parts.slice(0, index).join('/') + '/');
    }
  };

  return (
    <div className="s3-browser-container">
      {/* Toolbar / breadcrumbs */}
      <div className="s3-browser-toolbar">
        <button
          className="s3-btn s3-btn-secondary"
          onClick={() => { setCurrentBucket(null); setCurrentPrefix(''); setItems([]); }}
        >
          &#x2302; All Buckets
        </button>
        {breadcrumbs.map((crumb, i) => (
          <span key={i} className="s3-breadcrumb">
            <span className="s3-breadcrumb-sep">/</span>
            <button
              className={`s3-btn s3-btn-crumb${i === breadcrumbs.length - 1 ? ' active' : ''}`}
              onClick={() => handleBreadcrumb(i)}
            >
              {crumb}
            </button>
          </span>
        ))}
        {currentBucket && (
          <div className="s3-toolbar-actions">
            <input
              type="file"
              multiple
              ref={fileInputRef}
              style={{ display: 'none' }}
              onChange={(e) => handleUpload(e.target.files)}
            />
            <button className="s3-btn s3-btn-primary" onClick={() => fileInputRef.current?.click()}>
              &#x2191; Upload
            </button>
          </div>
        )}
      </div>

      {error && <div className="s3-error">&#x26A0; {error}</div>}
      {loading && <div className="s3-loading">Loading…</div>}

      {/* Bucket list */}
      {!currentBucket && !loading && (
        <table className="s3-table">
          <thead>
            <tr><th>Bucket Name</th><th>Region</th></tr>
          </thead>
          <tbody>
            {buckets.length === 0 && (
              <tr><td colSpan={2} className="s3-empty">No buckets found</td></tr>
            )}
            {buckets.map((b) => (
              <tr key={b} className="s3-row-clickable" onClick={() => openBucket(b)}>
                <td>&#x1FA23; {b}</td>
                <td>{region}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {/* Objects / folders */}
      {currentBucket && !loading && (
        <table className="s3-table">
          <thead>
            <tr><th>Name</th><th>Size</th><th>Last Modified</th><th></th></tr>
          </thead>
          <tbody>
            {items.length === 0 && (
              <tr><td colSpan={4} className="s3-empty">Empty folder</td></tr>
            )}
            {items.map((item) => (
              <tr
                key={item.key}
                className={item.isFolder ? 's3-row-clickable' : ''}
                onClick={() => item.isFolder && openBucket(currentBucket, item.key)}
              >
                <td>
                  {item.isFolder ? '&#x1F4C1; ' : '&#x1F4C4; '}
                  {item.key.slice(currentPrefix.length)}
                </td>
                <td>{item.isFolder ? '' : formatBytes(item.size)}</td>
                <td>{item.isFolder ? '' : item.lastModified?.toLocaleString()}</td>
                <td className="s3-actions-cell">
                  {!item.isFolder && (
                    <>
                      <button
                        className="s3-btn s3-btn-sm"
                        onClick={(e) => { e.stopPropagation(); handleDownload(item.key); }}
                      >
                        Download
                      </button>
                      {onOpenInEditor && (
                        <button
                          className="s3-btn s3-btn-sm s3-btn-info"
                          onClick={(e) => { e.stopPropagation(); onOpenInEditor(currentBucket, item.key); }}
                        >
                          Open
                        </button>
                      )}
                      <button
                        className="s3-btn s3-btn-sm s3-btn-danger"
                        onClick={(e) => { e.stopPropagation(); handleDelete(item.key); }}
                      >
                        Delete
                      </button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

function formatBytes(bytes?: number): string {
  if (bytes === undefined) return '';
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}
