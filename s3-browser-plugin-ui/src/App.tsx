import type { AwsCredentialIdentity } from '@aws-sdk/types';
import { S3BrowserComponent } from '../index';

async function credentialsProvider(): Promise<AwsCredentialIdentity> {
  const accessKeyId = import.meta.env.VITE_AWS_ACCESS_KEY_ID;
  const secretAccessKey = import.meta.env.VITE_AWS_SECRET_ACCESS_KEY;
  if (!accessKeyId || !secretAccessKey) {
    throw new Error('Copy .env.example to .env and fill in VITE_AWS_ACCESS_KEY_ID / VITE_AWS_SECRET_ACCESS_KEY.');
  }
  return {
    accessKeyId,
    secretAccessKey,
    sessionToken: import.meta.env.VITE_AWS_SESSION_TOKEN || undefined,
  };
}

export default function App() {
  return (
    <S3BrowserComponent
      region={import.meta.env.VITE_AWS_REGION || 'us-east-1'}
      credentialsProvider={credentialsProvider}
    />
  );
}
