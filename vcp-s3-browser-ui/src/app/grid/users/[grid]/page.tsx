import S3GridPage from '../../../../src/pages/S3GridPage';

export default async function GridUserPage({
  params,
}: {
  params: Promise<{ grid: string }>;
}) {
  const { grid } = await params;
  return <S3GridPage grid={decodeURIComponent(grid)} jsonOnly />;
}
