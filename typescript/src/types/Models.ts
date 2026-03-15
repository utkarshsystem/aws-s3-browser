export interface S3BrowserConfig {
  region: string;
  bucketName: string;
  buckets?: S3BucketConfig[];
}

export interface S3BucketConfig {
  name: string;
  bucketName: string;
  region: string;
  paths?: Record<string, S3PathPermissions>;
}

export interface S3PathPermissions {
  guest?: S3Permission[];
  authenticated?: S3Permission[];
  groups?: Record<string, S3Permission[]>;
}

export type S3Permission = 'get' | 'list' | 'write' | 'delete';

export interface S3FileItem {
  key: string;
  size?: number;
  lastModified?: Date;
  contentType?: string;
  eTag?: string;
}

export interface S3BrowserState {
  isLoading: boolean;
  error?: string;
  currentPath: string;
  selectedBucket?: string;
}
