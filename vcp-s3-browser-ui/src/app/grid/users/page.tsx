import S3GridPage from '../../../src/pages/S3GridPage';

export default async function GridUsersPage({
  searchParams,
}: {
  searchParams: Promise<{ grid?: string; gridFolder?: string }>;
}) {
  const params = await searchParams;
  return <S3GridPage grid={params.grid} gridFolder={params.gridFolder} />;
}
