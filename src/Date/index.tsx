import UpDate from './UpDate'
import {StyledComponentProps} from '../utils/types'

export default UpDate

export interface UpDateProps extends StyledComponentProps {
  hasError?: boolean;
  onChange?: (value?: Date) => void;
  isNuallble?: boolean;
  //default?: Date;
  //className? : string;
}
