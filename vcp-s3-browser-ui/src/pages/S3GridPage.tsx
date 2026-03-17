'use client';

import yaml from 'js-yaml';
import Link from 'next/link';
import { useCallback, useEffect, useState } from 'react';

const region = process.env.NEXT_PUBLIC_AWS_REGION || 'us-east-1';
const defaultConfig = {
  bucket: 'data.vitusasystems.com',
  title: 'S3 Grid Users',
  listTitle: 'User Folders',
  emptyMessage: 'No folders found',
  rootPrefix: 'grid/users/',
  fileName: 'lowdefy-grid.yaml',
  itemRoute: (folder: string) => `/grid/users/${encodeURIComponent(folder)}`,
  parseContent: (content: string) => yaml.load(content),
};

type FolderItem = {
  key: string;
  isFolder: boolean;
};

type S3ConfigViewerProps = {
  selectedItem?: string;
  jsonOnly?: boolean;
  bucket: string;
  rootPrefix: string;
  fileName: string;
  title: string;
  listTitle: string;
  emptyMessage?: string;
  itemRoute: (item: string) => string;
  parseContent?: (content: string) => unknown;
};

export default function S3GridPage({
  grid,
  gridFolder,
  jsonOnly = false,
}: {
  grid?: string;
  gridFolder?: string;
  jsonOnly?: boolean;
} = {}) {
  return (
    <S3ConfigViewerPage
      selectedItem={grid ?? gridFolder}
      jsonOnly={jsonOnly}
      {...defaultConfig}
    />
  );
}

export function S3ConfigViewerPage({
  selectedItem = '',
  jsonOnly = false,
  bucket,
  rootPrefix,
  fileName,
  title,
  listTitle,
  emptyMessage = 'No items found',
  itemRoute,
  parseContent = (content) => content,
}: S3ConfigViewerProps) {
  const currentItem = trimSlashes(selectedItem);
  const [items, setItems] = useState<string[]>([]);
  const [rawContent, setRawContent] = useState('');
  const [parsedContent, setParsedContent] = useState<unknown>(null);
  const [loadingItems, setLoadingItems] = useState(false);
  const [loadingContent, setLoadingContent] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const loadItems = useCallback(async () => {
    setLoadingItems(true);
    setError(null);
    try {
      const { items } = await postToS3('listObjects', { bucket, prefix: rootPrefix });
      setItems(
        (items as FolderItem[])
          .filter((item) => item.isFolder)
          .map((item) => trimSlashes(item.key.replace(rootPrefix, '')))
          .filter(Boolean),
      );
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : String(err));
    } finally {
      setLoadingItems(false);
    }
  }, [bucket, rootPrefix]);

  useEffect(() => {
    if (!jsonOnly) {
      loadItems();
    }
  }, [jsonOnly, loadItems]);

  useEffect(() => {
    if (!currentItem) {
      setRawContent('');
      setParsedContent(null);
      return;
    }

    async function loadContent() {
      setLoadingContent(true);
      setError(null);
      try {
        const { content } = await postToS3('getFileContent', {
          bucket,
          key: `${rootPrefix}${currentItem}/${fileName}`,
        });
        const text = content as string;
        setRawContent(text);
        setParsedContent(parseContent(text));
      } catch (err: unknown) {
        setError(err instanceof Error ? err.message : String(err));
        setRawContent('');
        setParsedContent(null);
      } finally {
        setLoadingContent(false);
      }
    }

    loadContent();
  }, [bucket, rootPrefix, fileName, currentItem, parseContent]);

  if (jsonOnly) {
    if (loadingContent) {
      return <pre>{JSON.stringify({ loading: true }, null, 2)}</pre>;
    }

    if (error) {
      return <pre>{JSON.stringify({ error }, null, 2)}</pre>;
    }

    return <pre>{JSON.stringify(parsedContent, null, 2)}</pre>;
  }

  const filePath = currentItem ? `${currentItem}/${fileName}` : 'Select an item';

  return (
    <div className="row g-4">
      <div className="col-12">
        <div className="d-flex align-items-center justify-content-between flex-wrap gap-2">
          <div>
            <h1 className="h4 mb-1">{title}</h1>
            <div className="text-muted small">s3://{bucket}/{rootPrefix}</div>
          </div>
          <button className="btn btn-outline-secondary btn-sm" onClick={loadItems} disabled={loadingItems}>
            {loadingItems ? 'Refreshing...' : 'Refresh'}
          </button>
        </div>
      </div>

      {error && (
        <div className="col-12">
          <div className="alert alert-danger mb-0">{error}</div>
        </div>
      )}

      <div className="col-12 col-lg-3">
        <div className="card border shadow-sm h-100">
          <div className="card-header bg-light fw-semibold">{listTitle}</div>
          <div className="list-group list-group-flush">
            {loadingItems && <div className="list-group-item text-muted">Loading...</div>}
            {!loadingItems && items.length === 0 && <div className="list-group-item text-muted">{emptyMessage}</div>}
            {items.map((item) => (
              <Link
                key={item}
                href={itemRoute(item)}
                className={`list-group-item list-group-item-action d-flex align-items-center gap-2 ${
                  item === currentItem ? 'active' : ''
                }`}
              >
                <span>folder</span>
                <span>{item}/</span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="col-12 col-lg-9">
        <div className="card border shadow-sm">
          <div className="card-header bg-light d-flex justify-content-between align-items-center flex-wrap gap-2">
            <span className="fw-semibold">{filePath}</span>
            {currentItem && (
              <span className="text-muted small">s3://{bucket}/{rootPrefix}{currentItem}/{fileName}</span>
            )}
          </div>
          <div className="card-body">
            {!currentItem && <div className="text-muted">Choose a folder from the left to load its file.</div>}
            {currentItem && loadingContent && <div className="text-muted">Loading config...</div>}
            {currentItem && !loadingContent && rawContent && (
              <div className="d-flex flex-column gap-3">
                <div>
                  <div className="fw-semibold mb-2">Parsed</div>
                  <pre className="bg-light border rounded p-3 mb-0" style={{ whiteSpace: 'pre-wrap' }}>
                    {JSON.stringify(parsedContent, null, 2)}
                  </pre>
                </div>
                <div>
                  <div className="fw-semibold mb-2">Raw</div>
                  <pre className="bg-light border rounded p-3 mb-0" style={{ whiteSpace: 'pre-wrap' }}>
                    {rawContent}
                  </pre>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

async function postToS3(action: string, params: Record<string, string | undefined> = {}) {
  const res = await fetch('/api/s3', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ action, region, ...params }),
  });
  const json = await res.json();
  if (!res.ok) throw new Error(json.error ?? `S3 API error: ${res.status}`);
  return json;
}

function trimSlashes(value: string) {
  return value.replace(/^\/+|\/+$/g, '');
}