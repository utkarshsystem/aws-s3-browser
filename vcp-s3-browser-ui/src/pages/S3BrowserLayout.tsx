import Link from 'next/link';
import type { ReactNode } from 'react';

export default function S3BrowserLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
        />
      </head>
      <body>
        <nav className="navbar navbar-expand bg-dark navbar-dark px-3">
          <span className="navbar-brand fw-bold">S3 Browser</span>
          <ul className="navbar-nav gap-2">
            <li className="nav-item">
              <Link href="/" className="nav-link">Browser</Link>
            </li>
            <li className="nav-item">
              <Link href="/editor" className="nav-link">Editor</Link>
            </li>
            <li className="nav-item">
              <Link href="/pdfExplorer/pdfexplorer" className="nav-link">PDF Explorer</Link>
            </li>
          </ul>
        </nav>
        <main className="container-fluid py-4 px-4">{children}</main>
      </body>
    </html>
  );
}
