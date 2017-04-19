import UpDate from './UpDate'

export default UpDate ;

import { StyledComponentProps } from "../../../Common/utils/types";

export interface DatePickerProps extends StyledComponentProps {
  hasError?: boolean;
  isNullable?: boolean;
  className? : string;
  value:any;
  format?:string;
  onChange?:(e:any) => void;
  //default?: Date;
}