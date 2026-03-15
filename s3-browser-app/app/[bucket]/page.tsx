'use client';

import { use } from 'react';
import { S3BrowserPage } from 'vcp-s3-browser-ui';

export default function BucketPage({ params }: { params: Promise<{ bucket: string }> }) {
  const { bucket } = use(params);
  return <S3BrowserPage bucketName={decodeURIComponent(bucket)} />;
}
