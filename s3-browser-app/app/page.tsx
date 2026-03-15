'use client';

import { useRouter } from 'next/navigation';
import type { AwsCredentialIdentity } from '@aws-sdk/types';
import { S3BrowserComponent } from 'vcp-s3-browser-ui';

async function credentialsProvider(): Promise<AwsCredentialIdentity> {
  const accessKeyId = process.env.NEXT_PUBLIC_AWS_ACCESS_KEY_ID;
  const secretAccessKey = process.env.NEXT_PUBLIC_AWS_SECRET_ACCESS_KEY;
  if (!accessKeyId || !secretAccessKey) {
    throw new Error(
      'AWS credentials not set. Copy .env.local.example to .env.local and fill in your credentials.'
    );
  }
  return {
    accessKeyId,
    secretAccessKey,
    sessionToken: process.env.NEXT_PUBLIC_AWS_SESSION_TOKEN || undefined,
  };
}

export default function Home() {
  const router = useRouter();

  return (
    <S3BrowserComponent
      region={process.env.NEXT_PUBLIC_AWS_REGION || 'us-east-1'}
      credentialsProvider={credentialsProvider}
      onOpenInEditor={(bucket, key) =>
        router.push(`/editor?bucket=${encodeURIComponent(bucket)}&key=${encodeURIComponent(key)}`)
      }
    />
  );
}
