// Imports
import UpPanel from './UpPanel'
import { IconName } from '../../../Components/Display/SvgIcon/icons'

// Exports
export interface UpPanelProps  {
  title?:string | JSX.Element;
  footer?: string | React.ReactElement<any>;

  message?:string;
  iconName?:IconName;
  iconSize?:number;
  disableAutoIntentIcon?:boolean;
}

export interface UpPanelStyledProps extends UpPanelProps {
  className?: string; // For styled components
}

export default UpPanel
