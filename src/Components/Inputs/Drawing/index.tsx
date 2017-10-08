// Imports
import UpDrawing from './UpDrawing'
import { ThemedProps } from '../../../Common/theming/types' 
import { StyledComponentProps } from "../../../Common/utils/types"

//Exports
export interface UpDrawingProps {
  value?:any; 
  activationShape?:boolean;
  onChange?:(value:any, e:any) => void;
}

export default UpDrawing ;