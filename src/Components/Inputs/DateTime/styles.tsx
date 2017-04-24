import * as React from 'react'
import { UpDateTimeStyledProps } from './'

import styled from '../../../Common/theming/themedComponents';

import { DateInput, TimePicker, IDatePickerLocaleUtils } from '@blueprintjs/datetime'
import { ThemeInterface } from "../../../Common/theming/types";

class UpLocaleUtils implements IDatePickerLocaleUtils {
    formatDay(day: Date, locale: string) {
        return "jour" ;
    }
    formatMonthTitle(month: Date, locale: string) {
        return "" ;
    }
    formatWeekdayShort(weekday: number, locale: string) {
        return "" ;
    }
    formatWeekdayLong(weekday: number, locale: string) {
        return "";
    }
    getFirstDayOfWeek(locale: string) {
        return 1;
    }
    getMonths() {
            return ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet",
                          "Août", "Septembre", "Octobre", "Novembre", "Décembre"] ;
    }
}

const locale = new UpLocaleUtils() ;

const BaseDate : React.StatelessComponent<UpDateTimeStyledProps> = (props) => {
    
    const {value, className, format, onChangeDate, disabled, minDate, maxDate, onChangeTime} = props ;
    const picker = (<span className="pt-icon pt-icon-calendar"></span>) ;

    return (<div>
                <DateInput  
                        className={className}
                        locale="fr" 
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
            </div>) ;
}

export const NormalDate = styled<UpDateTimeStyledProps>(BaseDate)`
`; 

export default class UpDateStyle extends React.Component<UpDateTimeStyledProps, undefined> {
  public static defaultProps: UpDateTimeStyledProps = {
    //hasError: false,
    //onChange: (value?:Date) => {},
    //isNullable: false,
    value:null
  };

  public render() {
    return (
      <NormalDate {...this.props} />
    );
  }
}