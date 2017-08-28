// Imports 
import {IntentType} from '../../../Common/theming/types';
import UpNotification from './UpNotification'
import {ThemedProps} from '../../../Common/theming/types'
import {withTheme} from 'styled-components'

export type NotificationDisplayMode = 'inline' | 'modal' ;

// Exports
export interface UpNotificationProps extends CommonProps  {
  message?: JSX.Element | string;
}

export interface CommonProps extends ThemedProps  {
  status?: IntentType;
  dismissable?:boolean;
  title?:string;
  displayMode? : NotificationDisplayMode;
}

export interface UpNotificationStyledProps extends CommonProps {}

export default withTheme(UpNotification)