// Imports
import UpDrawing from './UpDrawing'
import { ThemedProps } from '../../../Common/theming/types' 
import { StyledComponentProps } from "../../../Common/utils/types"

import Shape from './Shape'

export interface CropedShape {
   dataURL : string;
   shape : Shape
}

//Exports
export interface UpDrawingProps {
  src:string;
  shapes?:Array<any>;
  activationShape?:boolean;
  displayActions?:boolean;
  disabled?:boolean;
  onChange?:(value:any, e:any) => void;
  onDelAll?:(shapes:Array<any>) => void;
  onDel?:(shape:any) => void;
  onCrop?:(shape:CropedShape) => void;
  onRotate?:(callback:(result:any) => void) => void;
}

export default UpDrawing ;