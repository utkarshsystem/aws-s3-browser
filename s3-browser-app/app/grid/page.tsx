import { S3GridPage } from 'vcp-s3-browser-ui';

export default async function GridPage({
  searchParams,
}: {
  searchParams: Promise<{ grid?: string; gridFolder?: string }>;
}) {
  const params = await searchParams;
  return <S3GridPage grid={params.grid} gridFolder={params.gridFolder} />;
}
