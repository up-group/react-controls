import { IntentType } from '../../../Common/theming/types';

export interface UpToastProps {
  /** UpToast message */
  message?: JSX.Element | string;
  /** UpToast content, e.g : message ... */
  children?: JSX.Element;
  /** Called when UpToast closed */
  onClose?: () => void;
  /** To modify UpToast appearance */
  intent?: IntentType;
  /** If provided, the Uptoast automatically hides itself after a certain time */
  autoDismissable?: boolean;
  /** To specify the time needed to hide UpToast */
  duration?: number;
  /** To provide title */
  title?: JSX.Element | string;
}

export interface UpToastState {
  isVisible: boolean;
  isUnmounting: boolean;
}
