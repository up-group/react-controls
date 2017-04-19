import * as React from 'react'
import { DateTimePickerProps } from './'
import styled from 'styled-components'

import { DateInput, TimePicker, IDatePickerLocaleUtils } from '@blueprintjs/datetime'

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

const BaseDate : React.StatelessComponent<DateTimePickerProps> = (props) => {
    
    const {value, className, format, onChange} = props ;
    const picker = (<span className="pt-icon pt-icon-calendar"></span>) ;

    return (<div>
                <DateInput  className={className}
                        locale="fr" 
                        invalidDateMessage=""
                        localeUtils={locale}
                        rightElement={picker}
                        value={value}
                        onChange={onChange} format={format} />
                <TimePicker />
            </div>) ;
}

export const NormalDate = styled<DateTimePickerProps>(BaseDate)`
`; 

export default class UpDateStyle extends React.Component<DateTimePickerProps, undefined> {
  public static defaultProps: DateTimePickerProps = {
    //hasError: false,
    //onChange: (value?:Date) => {},
    //isNullable: false,
    value:null
  };

  public render() {
    const {value, format, onChange} = this.props ;
    return (
      <NormalDate value={value} format={format} onChange={onChange} />
    );
  }
}