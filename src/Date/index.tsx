import UpDate from './UpDate'

export default UpDate

export interface UpDateState {
    value?: Date;
}
export interface UpDateProps {
  hasError: boolean;
  onChange: (value?: Date) => void;
  isNuallble: boolean;
  default?: Date;
  className? : string;
}
