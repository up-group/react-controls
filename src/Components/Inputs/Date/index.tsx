// Imports
import UpDate from './UpDate'
import { BaseControlProps } from '../_Common/BaseControl/BaseControl'
import { WithThemeProps } from '../../../Common/theming/withTheme';
import { Moment } from "moment";

// Exports
export interface UpDateProps extends BaseControlProps<Moment> {
  hasError?: boolean;
  format?: string;
  minDate?: Date;
  maxDate?: Date;
  floatingLabel?: string;
  placeholder?: string;
  iconPosition?: 'left' | 'right';
  numberOfMonths?: number;
  enableOutsideDays?: boolean;
  daySize?: number;
  isOutsideRange?:  (day: Moment) => boolean;
  fullWidth?: boolean
}

export default UpDate ;