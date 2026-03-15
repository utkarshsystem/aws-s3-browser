import Link from 'next/link';
import type { ReactNode } from 'react';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: 'system-ui, sans-serif' }}>
        <nav style={{
          display: 'flex', gap: '16px', alignItems: 'center',
          padding: '10px 20px', borderBottom: '1px solid #ddd',
          background: '#fff',
        }}>
          <strong style={{ marginRight: 8 }}>S3 Browser</strong>
          <Link href="/" style={{ textDecoration: 'none', color: '#0070c0' }}>Browser</Link>
          <Link href="/editor" style={{ textDecoration: 'none', color: '#0070c0' }}>Editor</Link>
        </nav>
        <main style={{ padding: '20px' }}>{children}</main>
      </body>
    </html>
  );
}
