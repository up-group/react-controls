import UpTooltip from './UpTooltip'
import {IntentType} from '../../../Common/theming/types'

export type Placement = "top" | "right" | "bottom" | "left" 
export type Effect = "float" | "solid" 

export default UpTooltip

export interface Tootlip {
  content: string;
  placement?: Placement;
  type?: IntentType;
  effect?: Effect;
  multiline?:boolean;
  html?: boolean; 
  delayHide?:number;
  delayShow?:number;
  disable?:boolean;
}

export interface UpTooltipProps extends React.Props<UpTooltip>, Tootlip {
  id?:string;
}