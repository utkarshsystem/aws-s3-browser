import { notFound } from 'next/navigation';
import { allowedDashboardCodes, type DashboardCode } from '../../../src/pdfExplorerConfig';
import PdfExplorerPage from '../../../src/pages/PdfExplorerPage';

export default async function PdfExplorerDashboardPage({
  params,
  searchParams,
}: {
  params: Promise<{ dashboardCode: string }>;
  searchParams: Promise<{ subscriberCode?: string; role?: string; elearningUrl?: string; dashboardOnlyFlag?: string }>;
}) {
  const { dashboardCode } = await params;
  const query = await searchParams;
  const decodedDashboardCode = decodeURIComponent(dashboardCode);

  if (!allowedDashboardCodes.includes(decodedDashboardCode as DashboardCode)) {
    notFound();
  }

  return (
    <PdfExplorerPage
      dashboardCode={decodedDashboardCode as DashboardCode}
      subscriberCode={query.subscriberCode}
      role={query.role ?? 'admin'}
      elearningUrl={query.elearningUrl}
      dashboardOnlyFlag={query.dashboardOnlyFlag !== 'false'}
    />
  );
}
