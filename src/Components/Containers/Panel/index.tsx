// Imports
import UpPanel from './UpPanel'
import {IntentType, IconName, ThemedProps} from "../../../Common/theming/types"

// Exports
export interface UpPanelProps extends ThemedProps  {
  title?:string;
  footer?: string | React.ReactElement<any>;
  type?:IntentType;
  message?:string;
  iconName?:IconName;
  iconSize?:number;
  disableAutoIntentIcon?:boolean;
}

export interface UpPanelStyledProps extends UpPanelProps {
  className?: string; // For styled components
}

export default UpPanel
