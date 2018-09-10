import UpTooltip from './UpTooltip'

export type Placement = "top" | "right" | "bottom" | "left" 
export type Effect = "float" | "solid" 

export default UpTooltip

export interface Tooltip {
  content: JSX.Element | string ;
  place?: Placement;
  //type?: IntentType;
  effect?: Effect;
  multiline?:boolean;
  html?: boolean; 
  title?: JSX.Element | string;
  delayHide?:number;
  delayShow?:number;
  disable?:boolean;
}

export interface UpTooltipProps extends React.Props<UpTooltip>, Tooltip {
  id?:string;
}