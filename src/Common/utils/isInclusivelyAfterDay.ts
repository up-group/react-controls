import moment from 'moment';
import isBeforeDay from './isBeforeDay';

const isInclusivelyAfterDay = (aDay, bDAy) => {
  if (!moment.isMoment(aDay) || !moment.isMoment(bDAy)) return false;
  return !isBeforeDay(aDay, bDAy);
};

export default isInclusivelyAfterDay;
