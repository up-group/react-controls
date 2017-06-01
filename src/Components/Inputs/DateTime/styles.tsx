import * as React from 'react'
import { UpDateTimeStyledProps } from './'

import styled from '../../../Common/theming/themedComponents';

import { DateInput, TimePicker, IDatePickerLocaleUtils } from '@blueprintjs/datetime'
import { ThemeInterface } from "../../../Common/theming/types";

class UpLocaleUtils implements IDatePickerLocaleUtils {
    formatDay(day: Date, locale: string) {
        return "jour";
    }
    formatMonthTitle(month: Date, locale: string) {
        return "";
    }
    formatWeekdayShort(weekday: number, locale: string) {
        return "";
    }
    formatWeekdayLong(weekday: number, locale: string) {
        return "";
    }
    getFirstDayOfWeek(locale: string) {
        return 1;
    }
    getMonths(locale: string): [string, string, string, string, string, string, string, string, string, string, string, string] {
        return ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet",
            "Août", "Septembre", "Octobre", "Novembre", "Décembre"];
    }
}

const locale = new UpLocaleUtils();

const BaseDate: React.StatelessComponent<UpDateTimeStyledProps> = (props) => {

    const { value, className, format, onChangeDate, disabled, minDate, maxDate, innerRef, onChangeTime } = props;
    const picker = (<span className="pt-icon pt-icon-calendar"></span>);

    return (<div>
        <DateInput
            className={className}
            locale="fr"
            ref={innerRef}
            invalidDateMessage=""
            localeUtils={locale}
            rightElement={picker}
            canClearSelection={true}
            closeOnSelection={true}
            disabled={disabled}
            minDate={minDate}
            maxDate={maxDate}
            value={value}
            onChange={onChangeDate} format={format} />
        <TimePicker value={value} onChange={onChangeTime} />
    </div>);
}

export const NormalDate = styled<UpDateTimeStyledProps>(BaseDate) `
`;

export default class UpDateStyle extends React.Component<UpDateTimeStyledProps, undefined> {
    public static defaultProps: UpDateTimeStyledProps = {
        //hasError: false,
        //onChange: (value?:Date) => {},
        value: null
    };

    dateInput: any;

    setInput = (input) => {
        // The ref function is called twice, 
        // the first one with the component instance (as React) 
        // and the second one with the DOM node instance
        if (this.dateInput == undefined) {
            this.dateInput = input;
        }
    }

    componentDidMount() {
        var _props = this.props as UpDateTimeStyledProps;
        if (_props.dataFor && this.dateInput) {
            this.dateInput.inputRef.setAttribute('data-tip', 'tooltip');
            this.dateInput.inputRef.setAttribute('data-for', _props.dataFor);
        }
    }

    public render() {
        return (
            <NormalDate innerRef={this.setInput} {...this.props} />
        );
    }
}