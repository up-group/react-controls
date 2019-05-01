// Imports
import UpDate from './UpDate'
import { BaseControlProps } from '../_Common/BaseControl/BaseControl'
import { WithThemeProps } from '../../../Common/theming/withTheme';

// Exports
export interface UpDateProps extends BaseControlProps<Date> {
  hasError?: boolean;
  format?: string;
  minDate?: Date;
  maxDate?: Date;
  floatingLabel?: string;
  placeholder?: string;
  iconPosition?: 'left' | 'right'
}

export default UpDate ;