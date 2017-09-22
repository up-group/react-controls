// Imports
import UpPanel from './UpPanel'
import {IntentType, ThemedProps} from "../../../Common/theming/types"
import { IconName } from '../../../Components/Display/SvgIcon/icons'

// Exports
export interface UpPanelProps extends ThemedProps  {
  title?:string | JSX.Element;
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
