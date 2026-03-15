import { useCallback, useEffect, useRef, useState } from 'react';
import yaml from 'js-yaml';

export interface S3Item {
  key: string;
  size?: number;
  lastModified?: Date;
  isFolder: boolean;
}

/** Abstract operations the component needs — decoupled from AWS SDK. */
export interface S3Operations {
  listBuckets(): Promise<string[]>;
  listObjects(bucket: string, prefix: string): Promise<S3Item[]>;
  getDownloadUrl(bucket: string, key: string): Promise<string>;
  uploadFile(bucket: string, key: string, file: File): Promise<void>;
  deleteObject(bucket: string, key: string): Promise<void>;
  createFolder(bucket: string, key: string): Promise<void>;
  renameObject(bucket: string, oldKey: string, newKey: string): Promise<void>;
  getFileContent(bucket: string, key: string): Promise<string>;
}

export interface S3BrowserComponentProps {
  /** Provide all S3 operations (typically backed by server API routes). */
  s3: S3Operations;
  /** AWS region — used for display only. */
  region?: string;
  /** Called when the user clicks "Open" on a file — navigate to your editor route. */
  onOpenInEditor?: (bucket: string, key: string) => void;
}

export function S3BrowserComponent({ s3, region = 'us-east-1', onOpenInEditor }: S3BrowserComponentProps) {
  const [buckets, setBuckets] = useState<string[]>([]);
  const [currentBucket, setCurrentBucket] = useState<string | null>(null);
  const [currentPrefix, setCurrentPrefix] = useState('');
  const [items, setItems] = useState<S3Item[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [bucketSearch, setBucketSearch] = useState('');
  const [showNewFolder, setShowNewFolder] = useState(false);
  const [newFolderName, setNewFolderName] = useState('');
  const [renamingKey, setRenamingKey] = useState<string | null>(null);
  const [renameValue, setRenameValue] = useState('');
  const [viewerData, setViewerData] = useState<any>(null);
  const [viewerRaw, setViewerRaw] = useState('');
  const [viewerFileName, setViewerFileName] = useState('');
  const [viewerLoading, setViewerLoading] = useState(false);
  const [viewerMode, setViewerMode] = useState<'tree' | 'table' | 'raw'>('tree');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const filteredBuckets = buckets.filter((b) =>
    b.toLowerCase().includes(bucketSearch.toLowerCase())
  );

  // List all buckets on mount
  useEffect(() => {
    setLoading(true);
    setError(null);
    s3.listBuckets()
      .then((names) => setBuckets(names))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [s3]);

  const openBucket = useCallback(
    async (bucket: string, prefix = '') => {
      setLoading(true);
      setError(null);
      try {
        const result = await s3.listObjects(bucket, prefix);
        setCurrentBucket(bucket);
        setCurrentPrefix(prefix);
        setItems(result);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    },
    [s3]
  );

  const handleDownload = useCallback(
    async (key: string) => {
      if (!currentBucket) return;
      try {
        const url = await s3.getDownloadUrl(currentBucket, key);
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
    [currentBucket, s3]
  );

  const handleDelete = useCallback(
    async (key: string) => {
      if (!currentBucket || !window.confirm(`Delete "${key}"?`)) return;
      try {
        await s3.deleteObject(currentBucket, key);
        await openBucket(currentBucket, currentPrefix);
      } catch (err: any) {
        setError(err.message);
      }
    },
    [currentBucket, currentPrefix, s3, openBucket]
  );

  const handleUpload = useCallback(
    async (files: FileList | null) => {
      if (!currentBucket || !files) return;
      setLoading(true);
      try {
        for (const file of Array.from(files)) {
          await s3.uploadFile(currentBucket, currentPrefix + file.name, file);
        }
        await openBucket(currentBucket, currentPrefix);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    },
    [currentBucket, currentPrefix, s3, openBucket]
  );

  const handleRename = useCallback(
    async (oldKey: string) => {
      if (!currentBucket || !renameValue.trim()) return;
      const newKey = currentPrefix + renameValue.trim();
      if (newKey === oldKey) { setRenamingKey(null); return; }
      try {
        await s3.renameObject(currentBucket, oldKey, newKey);
        setRenamingKey(null);
        setRenameValue('');
        await openBucket(currentBucket, currentPrefix);
      } catch (err: any) {
        setError(err.message);
      }
    },
    [currentBucket, currentPrefix, renameValue, s3, openBucket]
  );

  const startRename = (item: S3Item) => {
    const name = item.key.slice(currentPrefix.length);
    setRenamingKey(item.key);
    setRenameValue(name);
  };

  const isViewableFile = (key: string) => /\.(json|ya?ml)$/i.test(key);

  const handleView = useCallback(
    async (key: string) => {
      if (!currentBucket) return;
      setViewerLoading(true);
      setViewerFileName(key.split('/').pop() ?? key);
      setViewerData(null);
      setViewerRaw('');
      setViewerMode('tree');
      try {
        const content = await s3.getFileContent(currentBucket, key);
        setViewerRaw(content);
        const ext = key.split('.').pop()?.toLowerCase();
        let parsed: any;
        if (ext === 'json') {
          parsed = JSON.parse(content);
        } else {
          parsed = yaml.load(content);
        }
        setViewerData(parsed);
      } catch (err: any) {
        setError(err.message);
        setViewerData(null);
        setViewerFileName('');
        setViewerRaw('');
      } finally {
        setViewerLoading(false);
      }
    },
    [currentBucket, s3]
  );

  const handleCreateFolder = useCallback(async () => {
    if (!currentBucket || !newFolderName.trim()) return;
    const folderKey = currentPrefix + newFolderName.trim().replace(/\/+$/, '') + '/';
    try {
      await s3.createFolder(currentBucket, folderKey);
      setNewFolderName('');
      setShowNewFolder(false);
      await openBucket(currentBucket, currentPrefix);
    } catch (err: any) {
      setError(err.message);
    }
  }, [currentBucket, currentPrefix, newFolderName, s3, openBucket]);

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
    <div className="card border shadow-sm">
      {/* Toolbar / breadcrumbs */}
      <div className="card-header bg-light d-flex align-items-center flex-wrap gap-2 py-2">
        <button
          className="btn btn-outline-dark btn-sm"
          onClick={() => { setCurrentBucket(null); setCurrentPrefix(''); setItems([]); }}
        >
          ⌂ All Buckets
        </button>
        {breadcrumbs.map((crumb, i) => (
          <span key={i} className="d-flex align-items-center">
            <span className="text-muted px-1">/</span>
            {i === breadcrumbs.length - 1 ? (
              <span className="fw-semibold">{crumb}</span>
            ) : (
              <button className="btn btn-link btn-sm p-0 text-decoration-none" onClick={() => handleBreadcrumb(i)}>
                {crumb}
              </button>
            )}
          </span>
        ))}
        {currentBucket && (
          <div className="ms-auto d-flex gap-2">
            <button
              className="btn btn-outline-primary btn-sm"
              onClick={() => setShowNewFolder(!showNewFolder)}
            >
              + New Folder
            </button>
            <input
              type="file"
              multiple
              ref={fileInputRef}
              style={{ display: 'none' }}
              onChange={(e) => handleUpload(e.target.files)}
            />
            <button className="btn btn-success btn-sm" onClick={() => fileInputRef.current?.click()}>
              ↑ Upload
            </button>
          </div>
        )}
      </div>

      {showNewFolder && currentBucket && (
        <div className="d-flex align-items-center gap-2 px-3 py-2 bg-light border-bottom">
          <input
            type="text"
            className="form-control form-control-sm"
            style={{ maxWidth: 300 }}
            placeholder="Folder name"
            value={newFolderName}
            onChange={(e) => setNewFolderName(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleCreateFolder()}
            autoFocus
          />
          <button className="btn btn-primary btn-sm" onClick={handleCreateFolder} disabled={!newFolderName.trim()}>
            Create
          </button>
          <button className="btn btn-outline-secondary btn-sm" onClick={() => { setShowNewFolder(false); setNewFolderName(''); }}>
            Cancel
          </button>
        </div>
      )}

      {error && (
        <div className="alert alert-danger m-3 mb-0 py-2 d-flex align-items-center" role="alert">
          <strong className="me-2">⚠</strong> {error}
        </div>
      )}
      {loading && (
        <div className="d-flex align-items-center justify-content-center p-4 text-secondary">
          <div className="spinner-border spinner-border-sm me-2" role="status" />
          Loading…
        </div>
      )}

      {/* Bucket list */}
      {!currentBucket && !loading && (
        <div className="card-body p-0">
          <div className="p-3">
            <div className="input-group" style={{ maxWidth: 400 }}>
              <span className="input-group-text bg-white">🔍</span>
              <input
                type="text"
                className="form-control"
                placeholder="Search buckets…"
                value={bucketSearch}
                onChange={(e) => setBucketSearch(e.target.value)}
              />
            </div>
          </div>
          <div className="table-responsive">
            <table className="table table-striped table-hover align-middle mb-0">
              <thead className="table-dark">
                <tr>
                  <th>Bucket Name</th>
                  <th style={{ width: 150 }}>Region</th>
                </tr>
              </thead>
              <tbody>
                {filteredBuckets.length === 0 && (
                  <tr>
                    <td colSpan={2} className="text-center text-muted fst-italic py-4">
                      {buckets.length === 0 ? 'No buckets found' : 'No matching buckets'}
                    </td>
                  </tr>
                )}
                {filteredBuckets.map((b) => (
                  <tr key={b} role="button" className="cursor-pointer" onClick={() => openBucket(b)}>
                    <td>🪣 {b}</td>
                    <td><span className="badge bg-secondary">{region}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Objects / folders */}
      {currentBucket && !loading && (
        <div className="card-body p-0">
          <div className="table-responsive">
            <table className="table table-striped table-hover align-middle mb-0">
              <thead className="table-dark">
                <tr>
                  <th>Name</th>
                  <th style={{ width: 120 }}>Size</th>
                  <th style={{ width: 200 }}>Last Modified</th>
                  <th style={{ width: 250 }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {items.length === 0 && (
                  <tr>
                    <td colSpan={4} className="text-center text-muted fst-italic py-4">Empty folder</td>
                  </tr>
                )}
                {items.map((item) => (
                  <tr
                    key={item.key}
                    role={item.isFolder ? 'button' : undefined}
                    onClick={() => item.isFolder && openBucket(currentBucket, item.key)}
                  >
                    <td>
                      {item.isFolder ? '📁 ' : '📄 '}
                      {renamingKey === item.key ? (
                        <span className="d-inline-flex align-items-center gap-1">
                          <input
                            type="text"
                            className="form-control form-control-sm d-inline-block"
                            style={{ width: 250 }}
                            value={renameValue}
                            onChange={(e) => setRenameValue(e.target.value)}
                            onKeyDown={(e) => {
                              if (e.key === 'Enter') handleRename(item.key);
                              if (e.key === 'Escape') { setRenamingKey(null); setRenameValue(''); }
                            }}
                            onClick={(e) => e.stopPropagation()}
                            autoFocus
                          />
                          <button className="btn btn-primary btn-sm" onClick={(e) => { e.stopPropagation(); handleRename(item.key); }}>Save</button>
                          <button className="btn btn-outline-secondary btn-sm" onClick={(e) => { e.stopPropagation(); setRenamingKey(null); setRenameValue(''); }}>Cancel</button>
                        </span>
                      ) : (
                        item.key.slice(currentPrefix.length)
                      )}
                    </td>
                    <td className="text-muted small">{item.isFolder ? '' : formatBytes(item.size)}</td>
                    <td className="text-muted small">{item.isFolder ? '' : item.lastModified?.toLocaleString()}</td>
                    <td>
                      {!item.isFolder && (
                        <div className="btn-group btn-group-sm">
                          <button
                            className="btn btn-outline-secondary"
                            onClick={(e) => { e.stopPropagation(); handleDownload(item.key); }}
                          >
                            Download
                          </button>
                          {isViewableFile(item.key) && (
                            <button
                              className="btn btn-outline-info"
                              onClick={(e) => { e.stopPropagation(); handleView(item.key); }}
                            >
                              View
                            </button>
                          )}
                          {onOpenInEditor && (
                            <button
                              className="btn btn-outline-primary"
                              onClick={(e) => { e.stopPropagation(); onOpenInEditor(currentBucket, item.key); }}
                            >
                              Open
                            </button>
                          )}
                          <button
                            className="btn btn-outline-warning"
                            onClick={(e) => { e.stopPropagation(); startRename(item); }}
                          >
                            Rename
                          </button>
                          <button
                            className="btn btn-outline-danger"
                            onClick={(e) => { e.stopPropagation(); handleDelete(item.key); }}
                          >
                            Delete
                          </button>
                        </div>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* JSON / YAML Viewer */}
      {(viewerData !== null || viewerLoading) && (
        <div className="card m-3 border">
          <div className="card-header bg-light d-flex align-items-center justify-content-between py-2">
            <div className="d-flex align-items-center gap-3">
              <span className="fw-semibold">📋 {viewerFileName}</span>
              {!viewerLoading && (
                <div className="btn-group btn-group-sm">
                  <button
                    className={`btn ${viewerMode === 'tree' ? 'btn-dark' : 'btn-outline-dark'}`}
                    onClick={() => setViewerMode('tree')}
                  >
                    Tree
                  </button>
                  <button
                    className={`btn ${viewerMode === 'table' ? 'btn-dark' : 'btn-outline-dark'}`}
                    onClick={() => setViewerMode('table')}
                  >
                    Table
                  </button>
                  <button
                    className={`btn ${viewerMode === 'raw' ? 'btn-dark' : 'btn-outline-dark'}`}
                    onClick={() => setViewerMode('raw')}
                  >
                    Raw
                  </button>
                </div>
              )}
            </div>
            <button
              className="btn btn-outline-secondary btn-sm"
              onClick={() => { setViewerData(null); setViewerFileName(''); setViewerRaw(''); }}
            >
              ✕ Close
            </button>
          </div>
          <div className="card-body p-0" style={{ maxHeight: 500, overflow: 'auto' }}>
            {viewerLoading ? (
              <div className="d-flex align-items-center justify-content-center p-4 text-secondary">
                <div className="spinner-border spinner-border-sm me-2" role="status" />
                Loading file…
              </div>
            ) : viewerMode === 'raw' ? (
              <pre className="p-3 mb-0" style={{ whiteSpace: 'pre-wrap', fontSize: '0.85rem', background: '#f8f9fa' }}>{viewerRaw}</pre>
            ) : viewerMode === 'table' ? (
              <TableViewer data={viewerData} />
            ) : (
              <div className="p-3">
                <TreeNode label="root" value={viewerData} defaultOpen />
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

/* ── Tree View ── */

function TreeNode({ label, value, defaultOpen = false }: { label: string; value: any; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen);

  if (value === null || value === undefined) {
    return (
      <div className="d-flex align-items-baseline gap-1 py-1">
        <span className="text-primary fw-semibold" style={{ fontSize: '0.85rem' }}>{label}:</span>
        <span className="text-muted fst-italic" style={{ fontSize: '0.85rem' }}>null</span>
      </div>
    );
  }

  if (typeof value === 'boolean') {
    return (
      <div className="d-flex align-items-baseline gap-1 py-1">
        <span className="text-primary fw-semibold" style={{ fontSize: '0.85rem' }}>{label}:</span>
        <span className={`badge ${value ? 'bg-success' : 'bg-secondary'}`}>{String(value)}</span>
      </div>
    );
  }

  if (typeof value !== 'object') {
    return (
      <div className="d-flex align-items-baseline gap-1 py-1">
        <span className="text-primary fw-semibold" style={{ fontSize: '0.85rem' }}>{label}:</span>
        <span style={{ fontSize: '0.85rem' }}>{typeof value === 'number' ? <span className="text-success">{value}</span> : <span className="text-dark">{String(value)}</span>}</span>
      </div>
    );
  }

  const isArray = Array.isArray(value);
  const entries = isArray ? value.map((v: any, i: number) => [String(i), v] as [string, any]) : Object.entries(value);
  const count = entries.length;

  return (
    <div>
      <div
        className="d-flex align-items-center gap-1 py-1"
        role="button"
        onClick={() => setOpen(!open)}
        style={{ userSelect: 'none' }}
      >
        <span style={{ width: 16, textAlign: 'center', fontSize: '0.7rem', color: '#666' }}>
          {open ? '▼' : '▶'}
        </span>
        <span className="text-primary fw-semibold" style={{ fontSize: '0.85rem' }}>{label}</span>
        <span className="text-muted" style={{ fontSize: '0.75rem' }}>
          {isArray ? `[${count}]` : `{${count}}`}
        </span>
      </div>
      {open && (
        <div style={{ marginLeft: 18, borderLeft: '1px solid #dee2e6', paddingLeft: 10 }}>
          {entries.map(([k, v]) => (
            <TreeNode key={k} label={k} value={v} />
          ))}
        </div>
      )}
    </div>
  );
}

/* ── Table View ── */

function TableViewer({ data }: { data: any }) {
  if (data === null || data === undefined) {
    return <p className="text-muted fst-italic p-3 mb-0">No data</p>;
  }
  if (Array.isArray(data) && data.length > 0 && typeof data[0] === 'object' && data[0] !== null) {
    return <FlatArrayTable data={data} />;
  }
  if (typeof data === 'object' && !Array.isArray(data)) {
    return <KeyValueTable data={data} />;
  }
  return <pre className="p-3 mb-0 bg-light" style={{ whiteSpace: 'pre-wrap' }}>{JSON.stringify(data, null, 2)}</pre>;
}

function FlatArrayTable({ data }: { data: Record<string, any>[] }) {
  const columns = Array.from(new Set(data.flatMap((row) => Object.keys(row))));
  return (
    <div className="table-responsive">
      <table className="table table-sm table-striped table-hover align-middle mb-0">
        <thead className="table-dark">
          <tr>
            <th style={{ width: 50 }}>#</th>
            {columns.map((col) => <th key={col}>{col}</th>)}
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i}>
              <td className="text-muted">{i + 1}</td>
              {columns.map((col) => (
                <td key={col} style={{ fontSize: '0.85rem' }}>
                  {typeof row[col] === 'object' && row[col] !== null
                    ? JSON.stringify(row[col])
                    : row[col] === true
                      ? <span className="badge bg-success">true</span>
                      : row[col] === false
                        ? <span className="badge bg-secondary">false</span>
                        : row[col] === null || row[col] === undefined
                          ? <span className="text-muted fst-italic">null</span>
                          : String(row[col])
                  }
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function KeyValueTable({ data }: { data: Record<string, any> }) {
  return (
    <div className="table-responsive">
      <table className="table table-sm table-striped align-middle mb-0">
        <thead className="table-dark">
          <tr>
            <th style={{ width: '30%' }}>Key</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(data).map(([key, value]) => (
            <tr key={key}>
              <td className="fw-semibold">{key}</td>
              <td style={{ fontSize: '0.85rem' }}>
                {typeof value === 'object' && value !== null
                  ? JSON.stringify(value)
                  : value === true
                    ? <span className="badge bg-success">true</span>
                    : value === false
                      ? <span className="badge bg-secondary">false</span>
                      : value === null || value === undefined
                        ? <span className="text-muted fst-italic">null</span>
                        : String(value)
                }
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function formatBytes(bytes?: number): string {
  if (bytes === undefined) return '';
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}
