import { WithThemeProps } from '../../../Common/theming/withTheme';

// Exports
export type WidthSize = 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | 'fill';

export interface UpRichTextProps extends WithThemeProps {
  width?: WidthSize;
  defaultValue?: string;
  placeholder?: string;
  disabled?: boolean;
  showError?: boolean;
  configRTE?: any;
  value?: string;
  hasError?: boolean;
  isRequired?: boolean;
  className?: string;
  dataFor?: string; // For tooltip
  onChange?: (data: any) => void;
}
