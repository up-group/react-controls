import {IconName} from './types'

interface IconMap {
  ok:IconName,
  error:IconName,
  warning:IconName,
  info:IconName,
  none:IconName
}

const iconMap : IconMap = {
  ok: 'ok-sign',
  error: 'error-sign',
  warning: 'warning-sign',
  info:'info-sign',
  none: 'none'
};

export default iconMap;