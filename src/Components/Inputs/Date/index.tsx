// Imports
import UpDate from './UpDate'
import { StyledComponentProps } from '../../../Common/utils/types'
import { BaseControlProps } from '../_Common/BaseControl/BaseControl'
import { WithThemeProps } from '../../../Common/theming/withTheme';
import { Moment } from 'moment';

// Exports
export interface CommonProps extends WithThemeProps {
  hasError?: boolean;
  format?: string;
  minDate?: Date;
  maxDate?: Date;
  floatingLabel?: string;
  placeholder?: string;
}

export interface UpDateProps extends BaseControlProps<Date>, CommonProps {}

export interface UpDateStyledProps extends CommonProps, StyledComponentProps {
  onChange?: (e: any) => void;
  value: Moment;
  className?: string;
  disabled?: boolean;
  dataFor?: string;
  focused?: boolean;
  onFocusChange?: ({ focused }: { focused: boolean }) => void;
}

export default UpDate ;