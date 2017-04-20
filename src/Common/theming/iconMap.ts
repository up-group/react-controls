import {IconName} from './types'

interface IconMap {
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
  none: 'none'
};

export default iconMap;