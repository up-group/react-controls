// Imports 
import UpNotification from './UpNotification'

export type NotificationDisplayMode = 'inline' | 'modal' ;

// Exports
export interface UpNotificationProps extends CommonProps  {
  message?: JSX.Element | string;
}

export interface CommonProps  {
  //status?: IntentType;
  dismissable?:boolean;
  title?:string;
  displayMode? : NotificationDisplayMode;
}

export interface UpNotificationStyledProps extends CommonProps {}

export default UpNotification