import { IntentType } from '../../../Common/theming/types';
import { IconName } from '../../../Common/theming/icons';

export interface UpPanelProps {
  /** To provide title */
  title?: string | JSX.Element;
  /** To add footer */
  footer?: string | JSX.Element;
  /** To change panel display, e.g : background-color, show icon if disableAutoIntentIcon is false */
  type?: IntentType;
  /** To provide body message */
  message?: string;
  /** To display an icon in the left column before message */
  iconName?: IconName | null;
  /** To set Icon size */
  iconSize?: number;
  /** If you set disableAutoIntentIcon to false, you get an icon that automatically corresponds to the chosen type, e.g : show ! if type is warning*/
  disableAutoIntentIcon?: boolean;
  /** To add className for panel customization style */
  className?: string;
}
