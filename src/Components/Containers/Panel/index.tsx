// Imports
import UpPanel from './UpPanel'
import {IntentType, IconName, ThemedProps} from "../../../Common/theming/types"

// Exports
export interface UpPanelProps {
  title?:string;
  footer?: string | React.ReactElement<any>;
  type?:IntentType;
  message?:string;
  iconName?:IconName;
  iconSize?:number;
}

export interface UpPanelStyledProps extends UpPanelProps, ThemedProps {
  className?: string; // For styled components
}

export default UpPanel
