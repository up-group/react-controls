// Imports
import UpDateTime from './UpDateTime'
import { ThemedProps } from '../../../Common/theming/types' 
import { StyledComponentProps } from "../../../Common/utils/types";
import { InputBaseProps } from '../_Common/BaseControl/BaseControl'

//Exports
export interface CommonProps extends ThemedProps {
  hasError?: boolean;
  isNullable?: boolean;
  className? : string;
  format?:string;
  disabled?:boolean;
  readonly?:boolean;
  minDate?:Date;
  maxDate?:Date;
}
export interface UpDateTimeProps extends InputBaseProps<Date>, CommonProps {
  
}

export interface UpDateTimeStyledProps extends CommonProps {
  onChangeDate?:(e:any) => void;
  onChangeTime?:(e:any) => void;
  value:Date;
}

export default UpDateTime ;