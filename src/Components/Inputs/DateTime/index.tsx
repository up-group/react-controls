// Imports
import UpDateTime from './UpDateTime'
import {ThemedProps} from '../../../Common/theming/types' 
import { StyledComponentProps } from "../../../Common/utils/types";

//Exports
export interface UpDateTimeProps extends ThemedProps {
  hasError?: boolean;
  onChange?: (value?: Date) => void;
  isNullable?: boolean;
  //default?: Date;
  className? : string;
  value:any;
  format?:string;
}

export default UpDateTime ;