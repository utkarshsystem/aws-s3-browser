"use client";

export { S3BrowserComponent } from './src/S3BrowserComponent';
export type { S3BrowserComponentProps, S3Operations, S3Item } from './src/S3BrowserComponent';
export { default as S3BrowserPage } from './src/pages/S3BrowserPage';
export { default as S3EditorPage } from './src/pages/S3EditorPage';
export { default as S3GridPage } from './src/pages/S3GridPage';
// export { default as PdfExplorerPage } from './src/pages/PdfExplorerPage';
export { pdfExplorerLinks, allowedDashboardCodes } from './src/pdfExplorerConfig';
export type { DashboardCode } from './src/pdfExplorerConfig';
// export { PdfExplorerDashboard } from "./src/components/PdfExplorer/PdfExplorerDashboard"
export { default as PdfExplorerDashboardUI } from "./src/PdfExplorer/page"