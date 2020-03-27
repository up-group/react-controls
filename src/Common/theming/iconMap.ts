import { IconName } from "./icons";

export interface IconMap {
  success:IconName,
  danger:IconName,
  error:IconName,
  warning:IconName,
  info:IconName,
  none:IconName
}

const iconMap : IconMap = {
  success: 'ok-sign',
  danger: 'close',
  error: 'close',
  warning: 'warning-sign',
  info:'info-sign',
  none: 'none'
};

export default iconMap;