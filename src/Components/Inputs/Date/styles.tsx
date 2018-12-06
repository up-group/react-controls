import * as React from 'react'
import * as moment from 'moment'
import { UpDateStyledProps } from './'

import 'react-dates/lib/css/_datepicker.css'; 

import { SingleDatePicker } from 'react-dates'
import { generateUniqueId } from '../../../Common/utils/helpers';

// To be defined as date props
// focusStartDate
// chooseAvailableStartDate

import defaultPhrases from './i18n/fr';
import { WithThemeProps } from '../../../Common/theming/withTheme';
import { style } from 'typestyle';
moment.locale('fr')

const getStyles = (props: UpDateStyledProps & WithThemeProps) => style({
    $nest : {
        '& .SingleDatePickerInput__withBorder' : {
            borderWidth : props.theme.inputBorderLess ? '0 0 1px 0' : '1px',
            borderColor : props.focused ? props.theme.colorMap.primary : 'inherit',
            borderRadius : props.theme.inputBorderLess ? 0 : props.theme.borderRadius,
        },
        '& .SingleDatePickerInput__withBorder:hover' : {
            borderColor : props.theme.colorMap.primary,
        },
        '& .SingleDatePickerInput_calendarIcon' : {
            margin: props.theme.inputBorderLess ? '0 5px 0 0' : '0 5px 0 10px',
            padding: '6px',
        }, 
        '& .SingleDatePickerInput_calendarIcon svg, & .SingleDatePickerInput_calendarIcon svg path' : {
            fill : props.focused ? props.theme.colorMap.primary : props.theme.colorMap.darkGray4,
        },
        '& .SingleDatePickerInput_clearDate svg, & .SingleDatePickerInput_clearDate svg path' : {
            fill : props.focused ? props.theme.colorMap.primary : props.theme.colorMap.darkGray4,
        },
        '& .SingleDatePickerInput__withBorder:hover svg, & .SingleDatePickerInput__withBorder:hover svg path ' : {
            fill: props.theme.colorMap.primary,
        },
        '& .DateInput_input' : {
            padding: '6px',
            fontSize:'14px',
            color: '#354052',
            lineHeight : '18px',
        },
        '& .DateInput_input__focused' : {
            borderWidth: 0,
        }, 
        '& .SingleDatePickerInput_clearDate:hover': {
            backgroundColor: 'transparent',
        },
        '& .SingleDatePickerInput_clearDate:hover svg, & .SingleDatePickerInput_clearDate:hover svg path' : {
            fill: props.theme.colorMap.primary,
        },
        '& .CalendarDay:hover, & .CalendarDay__selected' : {
            backgroundColor: props.theme.colorMap.primary,
            color: props.theme.colorMap.primaryFg,
            borderColor: props.theme.colorMap.primaryDark,
        }, 
        '& .DayPickerNavigation_button svg, & .DayPickerNavigation_button svg path' : {
            fill: props.theme.colorMap.primary,
        },
        '& .DayPickerNavigation_button:hover' : {
            borderColor: props.theme.colorMap.primary,
        }
    }
})

const BaseDate: React.StatelessComponent<UpDateStyledProps & WithThemeProps> = (props: UpDateStyledProps & WithThemeProps) => {

    const {value, focused, onFocusChange, className, format, disabled, minDate, maxDate, innerRef, onChange, ...others} = props;
    
    return (
        <div className={getStyles(props)}>
            <SingleDatePicker 
                focused={focused}
                onFocusChange={onFocusChange}
                date={value ? moment(value) : null}
                onDateChange={onChange}
                id={generateUniqueId()}
                disabled={disabled}
                showClearDate={true}
                showDefaultInputIcon={true}
                noBorder={false}
                screenReaderInputMessage={'Date'}
                ref={innerRef}
                keepOpenOnDateSelect={false}
                hideKeyboardShortcutsPanel={true}
                phrases={defaultPhrases}
            />
        </div>
    );
}

export interface DateState {
    focused:boolean;
}

export default class UpDateStyle extends React.Component<UpDateStyledProps, DateState> {
    
    public static defaultProps: UpDateStyledProps = {
        value: null
    };

    dateInput: any;

    constructor(p, c) {
        super(p, c);
        this.state = {
            focused : false,
        }
    }

    setInput = (input) => {
        // The ref function is called twice, 
        // the first one with the component instance (as React) 
        // and the second one with the DOM node instance
        if (this.dateInput == undefined) {
            this.dateInput = input;
        }
    }

    onFocusChange = ({focused} : {focused:boolean}) => {
        this.setState({ focused }) ;
        if(this.props.onChange &&  focused === false) {
            this.props.onChange(this.dateInput.value) ;
        }
    } ;

    componentDidMount() {
        var _props = this.props as UpDateStyledProps;
        if (_props.dataFor && this.dateInput) {
            this.dateInput.inputRef.setAttribute('data-tip', 'tooltip');
            this.dateInput.inputRef.setAttribute('data-for', _props.dataFor);
        }
    }
    
    public render() {
        const { onChange, ...otherProps } = this.props ;
        return (
            <BaseDate innerRef={this.setInput} onChange={onChange} {...otherProps} focused={this.state.focused} onFocusChange={this.onFocusChange} />
        );
    }
}