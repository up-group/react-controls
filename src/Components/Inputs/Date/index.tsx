// Imports
import UpDate from './UpDate'
import { ThemedProps } from '../../../Common/theming/types' 
import { StyledComponentProps } from '../../../Common/utils/types'
import { BaseControlProps } from '../_Common/BaseControl/BaseControl'

// Exports
export interface CommonProps extends ThemedProps {
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
}

export default UpDate ;