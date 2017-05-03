// Imports
import UpNumber from './UpNumber'
import { CommonProps } from '../Input/'
import { Tooltip } from '../../Display/Tooltip'

// Exports
export interface UpNumberProps extends CommonProps{
   max?: number;
   min?: number;
   stepSize?:number;
   decimalPlace?:number;
   value?:number|string;
}

export interface UpNumberStyledProps extends UpNumberProps {
  dataFor?:string; // For tooltip
  handleNumericChange?: (valueAsNumber: number, valueAsString:string) => void;
}

export default UpNumber ;
