'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { allowedDashboardCodes, pdfExplorerLinks, type DashboardCode } from '../pdfExplorerConfig';

type PdfExplorerDashboardProps = {
  subscriberCode?: string;
  role?: string;
  elearningUrl?: string;
  dashboardOnlyFlag?: boolean;
  isAuthenticated?: boolean;
  dashboardCode: DashboardCode;
};

const defaultBaseUrl = 'https://treeexplorerreactui.virtusasystems.com';

export function PdfExplorerDashboard({
  subscriberCode,
  role = 'admin',
  elearningUrl = defaultBaseUrl,
  dashboardOnlyFlag = true,
  isAuthenticated = false,
  dashboardCode,
}: PdfExplorerDashboardProps) {
  const src = buildDashboardUrl({
    subscriberCode,
    role,
    elearningUrl,
    dashboardOnlyFlag,
    dashboardCode,
  });
  const searchParams = useSearchParams();
  const queryString = searchParams.toString();

  return (
    <div className="row g-4">
      <div className="col-12" style={{ width: 320, flex: '0 0 320px' }}>
        <div className="card border shadow-sm h-100">
          <div className="card-header bg-light fw-semibold">Explorer Types</div>
          <div className="list-group list-group-flush">
            {allowedDashboardCodes.map((code) => (
              <Link
                key={code}
                href={{
                  pathname: `/pdfExplorer/${code}`,
                  query: queryString ? Object.fromEntries(searchParams.entries()) : undefined,
                }}
                className={`list-group-item list-group-item-action ${
                  code === dashboardCode ? 'active' : ''
                }`}
              >
                {code}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="col-12" style={{ flex: '1 1 0', minWidth: 0 }}>
        <div className="card border shadow-sm">
          <div className="card-header bg-light fw-semibold">{dashboardCode}</div>
          <div className="card-body p-0" style={{ cursor: isAuthenticated ? 'auto' : 'default' }}>
            <iframe
              title={`PDF Explorer - ${dashboardCode}`}
              src={src}
              style={{
                width: '100%',
                height: 'calc(100vh - 180px)',
                border: 0,
                cursor: isAuthenticated ? 'auto' : 'default',
              }}
              allow="clipboard-read; clipboard-write"
              sandbox="allow-same-origin allow-scripts allow-forms"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function PdfExplorerPage(props: PdfExplorerDashboardProps) {
  return <PdfExplorerDashboard {...props} />;
}

function buildDashboardUrl({
  subscriberCode,
  role,
  elearningUrl,
  dashboardOnlyFlag,
  dashboardCode,
}: {
  subscriberCode?: string;
  role: string;
  elearningUrl: string;
  dashboardOnlyFlag: boolean;
  dashboardCode: DashboardCode;
}) {
  const baseUrl = elearningUrl.replace(/\/+$/, '');
  const dashboardPath = pdfExplorerLinks[dashboardCode];
  const url = new URL(`${baseUrl}/${dashboardPath}`);

  if (subscriberCode) url.searchParams.set('subscriberCode', subscriberCode);
  if (role) url.searchParams.set('role', role);
  if (dashboardOnlyFlag) url.searchParams.set('dashboardOnlyFlag', 'true');

  return url.toString();
}
