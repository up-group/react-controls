import UpDate from './UpDate'
import {ThemedProps} from '../../../Common/theming/types' 

export default UpDate ;

import { StyledComponentProps } from "../../../Common/utils/types";

export interface UpDateProps extends ThemedProps {
  hasError?: boolean;
  isNullable?: boolean;
  className? : string;
  value:any;
  format?:string;
  onChange?:(e:any) => void;
  //default?: Date;
}