// Imports
import UpDate from './UpDate'
import { StyledComponentProps } from '../../../Common/utils/types'
import { BaseControlProps } from '../_Common/BaseControl/BaseControl'

// Exports
export interface CommonProps {
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