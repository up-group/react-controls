import { WithThemeProps } from '../../../Common/theming';

export interface UpLigneProps extends WithThemeProps {
  /** To specify color of the text */
  color?: string;
  /** To set the horizontal alignment of the text */
  textAlign?: string;
  /** To add className for text customization style */
  className?: string;
  /** To add Tooltip*/
  dataFor?: string;
}
