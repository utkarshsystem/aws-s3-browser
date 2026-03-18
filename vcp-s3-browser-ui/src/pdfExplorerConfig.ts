export const pdfExplorerLinks = {
  pdfexplorer_vil: 'vil-pdf-explorer',
  pdfexplorer_acsl: 'acsl-pdf-explorer',
  pdfexplorer_ta_acsl: 'taacsl-pdf-explorer',
  pdfexplorer: 'tacad-pdf-explorer',
} as const;

export const allowedDashboardCodes = Object.keys(pdfExplorerLinks) as Array<keyof typeof pdfExplorerLinks>;

export type DashboardCode = keyof typeof pdfExplorerLinks;
