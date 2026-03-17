import { S3BrowserConfig, S3BrowserState, S3FileItem } from '../types/Models';

export abstract class AbsS3BrowserService {
  abstract getConfig(): S3BrowserConfig;
  abstract getGridConfig(gridFolder: string): Promise<string>;
  abstract getState(): S3BrowserState;
  abstract navigate(path: string): void;
  abstract listFiles(prefix: string): Promise<S3FileItem[]>;
  abstract upload(file: File, prefix: string): Promise<void>;
  abstract download(key: string): Promise<string>;
  abstract delete(key: string): Promise<void>;
}
