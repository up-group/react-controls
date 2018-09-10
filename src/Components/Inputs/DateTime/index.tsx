// Imports
import UpDateTime from './UpDateTime'
import { StyledComponentProps } from "../../../Common/utils/types"
import { BaseControlProps } from '../_Common/BaseControl/BaseControl'

//Exports
export interface CommonProps {
  hasError?: boolean;
  format?:string;
  minDate?:Date;
  maxDate?:Date;
}
export interface UpDateTimeProps extends BaseControlProps<Date>, CommonProps {
  
}

export interface UpDateTimeStyledProps extends CommonProps, StyledComponentProps {
  onChangeDate?:(e:any) => void;
  onChangeTime?:(e:any) => void;
  value:Date;
  disabled?:boolean;
  className?:string;
  dataFor?:string; // For tooltip
}

export default UpDateTime ;