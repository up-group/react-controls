import UpDateTime from './UpDateTime'
export default UpDateTime ;

import { StyledComponentProps } from "../../../Common/utils/types";

export interface UpDateTimeProps extends StyledComponentProps {
  hasError?: boolean;
  onChange?: (value?: Date) => void;
  isNullable?: boolean;
  //default?: Date;
  className? : string;
  value:any;
  format?:string;
}