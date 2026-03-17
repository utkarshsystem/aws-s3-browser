import { AbsS3BrowserService } from '../../abstracts/AbsS3BrowserService';
import { S3BrowserConfig, S3BrowserState, S3FileItem } from '../../types/Models';

export class S3BrowserUIService extends AbsS3BrowserService {
  private config: S3BrowserConfig;
  private state: S3BrowserState;

  constructor(config: S3BrowserConfig) {
    super();
    this.config = config;
    this.state = {
      isLoading: false,
      currentPath: '',
      selectedBucket: config.bucketName,
    };
  }

  getConfig(): S3BrowserConfig {
    return this.config;
  }

  async getGridConfig(gridFolder: string): Promise<string> {
    const normalizedFolder = gridFolder.replace(/^\/+|\/+$/g, '');
    const key = `grid/${normalizedFolder}/lowdefy-grid.yaml`;
    const response = await fetch('/api/s3', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        action: 'getFileContent',
        region: this.config.region,
        bucket: this.config.bucketName,
        key,
      }),
    });

    const payload = await response.json();
    if (!response.ok) {
      throw new Error(payload.error ?? `Failed to load grid config: ${key}`);
    }

    return payload.content as string;
  }

  getState(): S3BrowserState {
    return this.state;
  }

  navigate(path: string): void {
    this.state = { ...this.state, currentPath: path };
  }

  async listFiles(_prefix: string): Promise<S3FileItem[]> {
    // File listing is handled by @aws-amplify/ui-react-storage StorageBrowser
    return [];
  }

  async upload(_file: File, _prefix: string): Promise<void> {
    // Upload is handled by @aws-amplify/ui-react-storage StorageBrowser
  }

  async download(_key: string): Promise<string> {
    // Download is handled by @aws-amplify/ui-react-storage StorageBrowser
    return '';
  }

  async delete(_key: string): Promise<void> {
    // Delete is handled by @aws-amplify/ui-react-storage StorageBrowser
  }
}
