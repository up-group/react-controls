import * as moment from 'moment';

const isBeforeDay = (aDay, bDay) => {
  if (!moment.isMoment(aDay) || !moment.isMoment(bDay)) return false;

  const aYear = aDay.year();
  const aMonth = aDay.month();

  const bYear = bDay.year();
  const bMonth = bDay.month();

  const isSameYear = aYear === bYear;
  const isSameMonth = aMonth === bMonth;

  if (isSameYear && isSameMonth) return aDay.date() < bDay.date();
  if (isSameYear) return aMonth < bMonth;
  return aYear < bYear;
};

export default isBeforeDay;
