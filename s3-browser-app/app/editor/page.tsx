import { Suspense } from 'react';
import { S3EditorPage } from 'vcp-s3-browser-ui';

export default function EditorPage() {
  return (
    <Suspense>
      <S3EditorPage />
    </Suspense>
  );
}
