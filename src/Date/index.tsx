import UpDate from './UpDate'
import {StyledComponentProps} from '../utils/types'

export default UpDate

export interface UpDateProps extends StyledComponentProps {
  hasError?: boolean;
  onChange?: (value?: Date) => void;
  isNullable?: boolean;
  //default?: Date;
  className? : string;
  value:any;
  format?:string;
}
