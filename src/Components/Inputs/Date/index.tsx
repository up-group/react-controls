// Imports
import UpDate from './UpDate'
import { StyledComponentProps } from '../../../Common/utils/types'
import { BaseControlProps } from '../_Common/BaseControl/BaseControl'
import { WithThemeProps } from '../../../Common/theming/withTheme';

// Exports
export interface CommonProps extends WithThemeProps {
  hasError?: boolean;
  format?:string;
  minDate?:Date;
  maxDate?:Date;
}

export interface UpDateProps extends BaseControlProps<Date>, CommonProps {}

export interface UpDateStyledProps extends CommonProps, StyledComponentProps {
  onChange?:(e:any) => void;
  value:Date;
  className? : string;
  disabled?:boolean;
  dataFor?:string; 
  focused?:boolean;
  onFocusChange? : ({focused} : {focused:boolean}) => void;
}

export default UpDate ;