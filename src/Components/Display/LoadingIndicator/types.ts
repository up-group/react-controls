export type LoadingIndicatorDisplayMode = 'inline' | 'layer' | 'modal' | 'zone';

export type SVGProps = React.SVGAttributes<SVGSVGElement>;

export interface LoadingIndicatorProps {
  isLoading?: boolean;
  displayMode?: LoadingIndicatorDisplayMode;
  message?: string;
  title?: string;
  className?: string;
  width?: number;
  height?: number;
  loaderSize?: number;
}
