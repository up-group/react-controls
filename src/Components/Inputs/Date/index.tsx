import UpDate from './UpDate'
import { StyledComponentProps } from "../../../Common/utils/types";

export default UpDate

export interface UpDateProps extends StyledComponentProps {
  hasError?: boolean;
  isNullable?: boolean;
  className? : string;
  value:any;
  format?:string;
  onChange?:(e:any) => void;
  //default?: Date;
}
