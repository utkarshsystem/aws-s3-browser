import Link from 'next/link';
import { allowedDashboardCodes } from '../../src/pdfExplorerConfig';

export default function PdfExplorerRootPage() {
  return (
    <div className="row g-4">
      <div className="col-12">
        <div>
          <h1 className="h4 mb-1">PDF Explorer</h1>
          <div className="text-muted small">Select one of the supported explorer types.</div>
        </div>
      </div>

      <div className="col-12 col-lg-4">
        <div className="card border shadow-sm h-100">
          <div className="card-header bg-light fw-semibold">Available Types</div>
          <div className="list-group list-group-flush">
            {allowedDashboardCodes.map((code) => (
              <Link
                key={code}
                href={`/pdfExplorer/${encodeURIComponent(code)}`}
                className="list-group-item list-group-item-action"
              >
                {code}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="col-12 col-lg-8">
        <div className="card border shadow-sm h-100">
          <div className="card-header bg-light fw-semibold">Overview</div>
          <div className="card-body text-muted">
            Open any of the 4 supported PDF explorer routes from the list on the left.
          </div>
        </div>
      </div>
    </div>
  );
}
