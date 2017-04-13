import UpDate from './UpDate'
import {StyledComponentProps} from '../utils/types'

export default UpDate

export interface UpDateProps extends StyledComponentProps {
  hasError?: boolean;
  isNullable?: boolean;
  //default?: Date;
  //className? : string;
  value:any;
}
