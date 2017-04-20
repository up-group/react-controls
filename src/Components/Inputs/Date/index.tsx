// Imports
import UpDate from './UpDate'
import {ThemedProps} from '../../../Common/theming/types' 
import { StyledComponentProps } from '../../../Common/utils/types'
import {InputBaseProps} from '../_Common/BaseControl/BaseControl'

// Exports
interface CommonProps extends ThemedProps {
  hasError?: boolean;
  isNullable?: boolean;
  className? : string;
  format?:string;
}
export interface UpDateProps extends InputBaseProps<Date>, CommonProps {
  
}

export interface UpDateStyledProps extends CommonProps {
  onChange?:(e:any) => void;
  value:Date;
}

export default UpDate ;