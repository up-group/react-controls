// Exports
import UpInteger from './UpInteger'
import { CommonProps } from '../Input/';

// Exports
export interface UpIntegerProps extends CommonProps{
   max?: number;
   min?: number;
   stepSize?:number;
   value?:number;
}

export default UpInteger ;
