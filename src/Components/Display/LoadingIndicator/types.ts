import { WithThemeProps } from '../../../Common/theming';

export type LoadingIndicatorDisplayMode = 'inline' | 'layer' | 'modal' | 'zone';

export type SVGProps = React.SVGAttributes<SVGSVGElement>;

export interface LoadingIndicatorProps extends WithThemeProps {
  isLoading?: boolean;
  displayMode?: LoadingIndicatorDisplayMode;
  message?: string;
  title?: string;
  className?: string;
  width?: number;
  height?: number;
  loaderSize?: number;
}
