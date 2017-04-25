import * as React from 'react'
import { UpDateStyledProps } from './'

import styled from '../../../Common/theming/themedComponents';

import { DateInput, IDatePickerLocaleUtils } from '@blueprintjs/datetime'
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

const BaseDate : React.StatelessComponent<UpDateStyledProps> = (props) => {
    
    const {value, className, format, disabled, minDate, maxDate, innerRef, onChange} = props ;
    const picker = (<span className="pt-icon pt-icon-calendar"></span>) ;

    return (<DateInput  className={className}
                        locale="fr" 
                        ref={innerRef}
                        invalidDateMessage=""
                        localeUtils={locale}
                        rightElement={picker}
                        value={value}
                        disabled={disabled}
                        minDate={minDate}
                        maxDate={maxDate}
                        canClearSelection={true}
                        closeOnSelection={true}
                        onChange={onChange} 
                        format={format} />) ;
}

export const NormalDate = styled<UpDateStyledProps>(BaseDate)`
`; 

export default class UpDateStyle extends React.Component<UpDateStyledProps, undefined> {
    public static defaultProps: UpDateStyledProps = {
        value:null
    };

    dateInput : any ;

    constructor(p, c) {
        super(p, c);
    }

    setInput = (input) => {
        // The ref function is called twice, 
        // the first one with the component instance (as React) 
        // and the second one with the DOM node instance
        if(this.dateInput == undefined) {
            this.dateInput = input;
        }
    }
    
    componentDidMount = () => {
        var _props = this.props as UpDateStyledProps ;
        if(_props.dataFor && this.dateInput) {
            this.dateInput.inputRef.setAttribute('data-tip', 'tooltip') ;
            this.dateInput.inputRef.setAttribute('data-for', _props.dataFor) ;
        }
    }

    public render() {
        return (
            <NormalDate innerRef={this.setInput} {...this.props} />
        );
    }
}