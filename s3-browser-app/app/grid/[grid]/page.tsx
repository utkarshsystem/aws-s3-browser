import { S3GridPage } from 'vcp-s3-browser-ui';

export default async function GridFolderPage({
  params,
}: {
  params: Promise<{ grid: string }>;
}) {
  const { grid } = await params;
  return <S3GridPage grid={decodeURIComponent(grid)} jsonOnly />;
}
