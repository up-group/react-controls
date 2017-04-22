// Imports 
import {IntentType} from '../../../Common/theming/types';
import UpNotification from './UpNotification'
import {ThemedProps} from '../../../Common/theming/types'
import {withTheme} from 'styled-components'

// Exports
export interface UpNotificationProps extends CommonProps  {
  message?: JSX.Element | string;
}

export interface CommonProps extends ThemedProps  {
  status?: IntentType;
  dismissable?:boolean;
}

export interface UpNotificationStyledProps extends CommonProps {}

export default withTheme(UpNotification)