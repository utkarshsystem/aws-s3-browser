'use client';

import { useMemo } from 'react';
import { useRouter } from 'next/navigation';
import { S3BrowserComponent } from '../src/S3BrowserComponent';
import type { S3Operations, S3Item } from '../src/S3BrowserComponent';

const region = process.env.NEXT_PUBLIC_AWS_REGION || 'us-east-1';

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

function createS3Operations(): S3Operations {
  return {
    async listBuckets() {
      const { buckets } = await s3Post('listBuckets');
      return buckets as string[];
    },
    async listObjects(bucket: string, prefix: string) {
      const { items } = await s3Post('listObjects', { bucket, prefix });
      return (items as any[]).map((i) => ({
        ...i,
        lastModified: i.lastModified ? new Date(i.lastModified) : undefined,
      })) as S3Item[];
    },
    async getDownloadUrl(bucket: string, key: string) {
      const { url } = await s3Post('getDownloadUrl', { bucket, key });
      return url as string;
    },
    async uploadFile(bucket: string, key: string, file: File) {
      const res = await fetch(
        `/api/s3/upload?bucket=${encodeURIComponent(bucket)}&key=${encodeURIComponent(key)}&region=${encodeURIComponent(region)}`,
        { method: 'PUT', headers: { 'Content-Type': file.type || 'application/octet-stream' }, body: file }
      );
      if (!res.ok) {
        const json = await res.json().catch(() => ({}));
        throw new Error(json.error ?? `Upload failed: ${res.status}`);
      }
    },
    async deleteObject(bucket: string, key: string) {
      await s3Post('deleteObject', { bucket, key });
    },
    async createFolder(bucket: string, key: string) {
      await s3Post('createFolder', { bucket, key });
    },
    async renameObject(bucket: string, oldKey: string, newKey: string) {
      await s3Post('renameObject', { bucket, key: oldKey, newKey });
    },
    async getFileContent(bucket: string, key: string) {
      const { content } = await s3Post('getFileContent', { bucket, key });
      return content as string;
    },
  };
}

export default function Home() {
  const router = useRouter();
  const s3 = useMemo(() => createS3Operations(), []);

  return (
    <S3BrowserComponent
      s3={s3}
      region={region}
      onOpenInEditor={(bucket, key) =>
        router.push(`/editor?bucket=${encodeURIComponent(bucket)}&key=${encodeURIComponent(key)}`)
      }
    />
  );
}
