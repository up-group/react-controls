// Imports
import UpNumber from './UpNumber'
import { CommonProps } from '../Input/'

export interface UpNumberProps extends CommonProps{
   max?: number;
   min?: number;
   stepSize?:number;
   decimalPlace?:number;
   isNullable?: boolean;
   value?:number;
}

export default UpNumber ;
