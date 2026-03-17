import { redirect } from 'next/navigation';

export default async function GridFolderPage({
  params,
}: {
  params: Promise<{ grid: string }>;
}) {
  const { grid } = await params;
  redirect(`/grid/users/${encodeURIComponent(decodeURIComponent(grid))}`);
}
