'use client';

import yaml from 'js-yaml';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';

const region = process.env.NEXT_PUBLIC_AWS_REGION || 'us-east-1';
const gridBucketName = 'data.vitusasystems.com';
const gridRootPrefix = 'grid/';

type GridFolderItem = {
  key: string;
  isFolder: boolean;
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
  const params = useSearchParams();
  const selectedFolder = normalizeGridFolder(
    grid ?? gridFolder ?? params.get('grid') ?? params.get('gridFolder') ?? ''
  );
  const [folders, setFolders] = useState<string[]>([]);
  const [gridConfigText, setGridConfigText] = useState('');
  const [gridConfigData, setGridConfigData] = useState<unknown>(null);
  const [loadingFolders, setLoadingFolders] = useState(false);
  const [loadingConfig, setLoadingConfig] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const loadFolders = useCallback(async () => {
    setLoadingFolders(true);
    setError(null);
    try {
      const { items } = await s3Post('listObjects', {
        bucket: gridBucketName,
        prefix: gridRootPrefix,
      });
      const nextFolders = (items as GridFolderItem[])
        .filter((item) => item.isFolder)
        .map((item) => normalizeGridFolder(item.key.replace(gridRootPrefix, '')))
        .filter(Boolean);
      setFolders(nextFolders);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : String(err));
    } finally {
      setLoadingFolders(false);
    }
  }, []);

  const loadGridConfig = useCallback(async () => {
    if (!selectedFolder) {
      setGridConfigText('');
      setGridConfigData(null);
      return;
    }

    setLoadingConfig(true);
    setError(null);
    try {
      const content = await getGridConfig(selectedFolder);
      setGridConfigText(content);
      setGridConfigData(yaml.load(content));
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : String(err));
      setGridConfigText('');
      setGridConfigData(null);
    } finally {
      setLoadingConfig(false);
    }
  }, [selectedFolder]);

  useEffect(() => {
    if (!jsonOnly) {
      loadFolders();
    }
  }, [jsonOnly, loadFolders]);

  useEffect(() => {
    loadGridConfig();
  }, [loadGridConfig]);

  if (jsonOnly) {
    if (loadingConfig) {
      return <pre>{JSON.stringify({ loading: true }, null, 2)}</pre>;
    }

    if (error) {
      return <pre>{JSON.stringify({ error }, null, 2)}</pre>;
    }

    return <pre>{JSON.stringify(gridConfigData, null, 2)}</pre>;
  }

  return (
    <div className="row g-4">
      <div className="col-12">
        <div className="d-flex align-items-center justify-content-between flex-wrap gap-2">
          <div>
            <h1 className="h4 mb-1">S3 Grid Page</h1>
            <div className="text-muted small">s3://{gridBucketName}/{gridRootPrefix}</div>
          </div>
          <button className="btn btn-outline-secondary btn-sm" onClick={loadFolders} disabled={loadingFolders}>
            {loadingFolders ? 'Refreshing...' : 'Refresh'}
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
          <div className="card-header bg-light fw-semibold">Grid Folders</div>
          <div className="list-group list-group-flush">
            {loadingFolders && (
              <div className="list-group-item text-muted">Loading folders...</div>
            )}
            {!loadingFolders && folders.length === 0 && (
              <div className="list-group-item text-muted">No folders found</div>
            )}
            {folders.map((folder) => (
              <Link
                key={folder}
                href={`/grid/${encodeURIComponent(folder)}`}
                className={`list-group-item list-group-item-action d-flex align-items-center gap-2 ${
                  folder === selectedFolder ? 'active' : ''
                }`}
              >
                <span>folder</span>
                <span>{folder}/</span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="col-12 col-lg-9">
        <div className="card border shadow-sm">
          <div className="card-header bg-light d-flex justify-content-between align-items-center flex-wrap gap-2">
            <span className="fw-semibold">
              {selectedFolder ? `${selectedFolder}/lowdefy-grid.yaml` : 'Select a grid folder'}
            </span>
            {selectedFolder && (
              <span className="text-muted small">
                s3://{gridBucketName}/{gridRootPrefix}{selectedFolder}/lowdefy-grid.yaml
              </span>
            )}
          </div>
          <div className="card-body">
            {!selectedFolder && (
              <div className="text-muted">Choose a folder from the left to load its `lowdefy-grid.yaml`.</div>
            )}

            {selectedFolder && loadingConfig && (
              <div className="text-muted">Loading grid config...</div>
            )}

            {selectedFolder && !loadingConfig && gridConfigText && (
              <div className="d-flex flex-column gap-3">
                <div>
                  <div className="fw-semibold mb-2">Parsed YAML</div>
                  <pre className="bg-light border rounded p-3 mb-0" style={{ whiteSpace: 'pre-wrap' }}>
                    {JSON.stringify(gridConfigData, null, 2)}
                  </pre>
                </div>
                <div>
                  <div className="fw-semibold mb-2">Raw YAML</div>
                  <pre className="bg-light border rounded p-3 mb-0" style={{ whiteSpace: 'pre-wrap' }}>
                    {gridConfigText}
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

async function s3Post(action: string, params: Record<string, string | undefined> = {}) {
  const res = await fetch('/api/s3', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ action, region, ...params }),
  });
  const json = await res.json();
  if (!res.ok) throw new Error(json.error ?? `S3 API error: ${res.status}`);
  return json;
}

async function getGridConfig(gridFolder: string): Promise<string> {
  const normalizedFolder = normalizeGridFolder(gridFolder);
  const { content } = await s3Post('getFileContent', {
    bucket: gridBucketName,
    key: `${gridRootPrefix}${normalizedFolder}/lowdefy-grid.yaml`,
  });
  return content as string;
}

function normalizeGridFolder(value: string): string {
  return value.replace(/^\/+|\/+$/g, '');
}
