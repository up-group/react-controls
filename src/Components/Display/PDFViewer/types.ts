export interface UpPDFViewerProps {
  isProcessingPrint?: boolean;
  base64PDFOrUrl: string;
  fileName?: string;
  scale?: number;
  width?: number;
  showAllPages?: boolean;
  onLoadSuccess?: () => void;
  className?: string;
  children?: Array<React.ReactNode> | React.ReactNode;
}

export interface UpPDFViewerState {
  wrapperWidth?: number;
  pagesNumber?: number;
}
