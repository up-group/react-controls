// Imports
import UpDrawing from './UpDrawing'
import { ThemedProps } from '../../../Common/theming/types' 
import { StyledComponentProps } from "../../../Common/utils/types"

//Exports
export interface UpDrawingProps {
  src:string;
  zones?:Array<any>;
  activationShape?:boolean;
  onChange?:(value:any, e:any) => void;
  onDelAll?:(shapes:Array<any>) => void;
  onDel?:(shape:any) => void;
  onCrop?:(shape:any) => void;
}

export default UpDrawing ;