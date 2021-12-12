import { BaseControlProps } from '../_Common/BaseControl/BaseControl';
import moment from 'moment';

// Exports
export interface UpDateProps extends BaseControlProps<moment.Moment> {
    hasError?: boolean;
    format?: string;
    minDate?: Date;
    maxDate?: Date;
    floatingLabel?: string;
    placeholder?: string;
    iconPosition?: 'left' | 'right';
    numberOfMonths?: number;
    enableOutsideDays?: boolean;
    daySize?: number;
    isOutsideRange?: (day: moment.Moment) => boolean;
    fullWidth?: boolean
};