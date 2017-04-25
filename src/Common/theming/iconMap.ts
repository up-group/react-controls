import {IconName} from './types'

export interface IconMap {
  success:IconName,
  danger:IconName,
  warning:IconName,
  info:IconName,
  none:IconName
}

const iconMap : IconMap = {
  success: 'ok-sign',
  danger: 'error-sign',
  warning: 'warning-sign',
  info:'info-sign',
  none: 'blank'
};

export default iconMap;