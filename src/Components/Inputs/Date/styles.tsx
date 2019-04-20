import * as React from 'react'
import * as moment from 'moment'
import { UpDateStyledProps } from './'

import 'react-dates/lib/css/_datepicker.css'; 

import { SingleDatePicker } from 'react-dates'
import { generateUniqueId } from '../../../Common/utils/helpers';

import defaultPhrases from './i18n/fr';
import { WithThemeProps } from '../../../Common/theming/withTheme';
import { style } from 'typestyle';

import * as classnames from 'classnames';
import { emptyStatement } from '@babel/types';
import { isEmpty } from "../../../Common/utils";

moment.locale('fr')

const getStyles = (props: UpDateStyledProps & WithThemeProps) =>
  style({
    marginTop: props.floatingLabel ? "14px" : "0px",
    position: "relative",
    backgroundColor: "transparent",
    $nest: {
      "& label": {
        fontSize: "14px",
        position: "absolute",
        top: "-10px",
        left: "0px",
        color: "#979797",
        transformOrigin: "top left",
        transform: "translate(0, 16px) scale(1)",
        transition: "all .1s ease-in-out",
        cursor: "text",
        zIndex: 1,
        marginLeft: "36px"
      },
      "& .SingleDatePickerInput, & .SingleDatePickerInput input, & .SingleDatePickerInput .DateInput": {
        backgroundColor: "transparent"
      },
      "&.up-input-focused svg, &.up-input-focused svg path, &.up-input-focused svg polygon, &.up-input-focused svg polyline": {
        fill: props.theme.colorMap.primary
      },
      "&.up-input-focused label, &.up-input-valued label": {
        transform: "translate(0, 4px) scale(.75)",
        fontSize: "12px",
        color: props.theme.colorMap.primary,
        marginLeft: "0px"
      },
      "& .SingleDatePickerInput__withBorder": {
        borderWidth: props.theme.inputBorderLess ? "0 0 1px 0" : "1px",
        borderColor: props.focused ? props.theme.colorMap.primary : "inherit",
        borderRadius: props.theme.inputBorderLess ? 0 : props.theme.borderRadius
      },
      "& .SingleDatePickerInput__withBorder:hover": {
        borderColor: props.theme.colorMap.primary
      },
      "& .SingleDatePickerInput_calendarIcon": {
        margin: props.theme.inputBorderLess ? "0 5px 0 0" : "0 5px 0 10px",
        padding: "6px"
      },
      "& .SingleDatePickerInput_calendarIcon svg, & .SingleDatePickerInput_calendarIcon svg path": {
        fill: props.focused
          ? props.theme.colorMap.primary
          : props.theme.colorMap.darkGray4
      },
      "& .SingleDatePickerInput_clearDate svg, & .SingleDatePickerInput_clearDate svg path": {
        fill: props.focused
          ? props.theme.colorMap.primary
          : props.theme.colorMap.darkGray4
      },
      "& .SingleDatePickerInput__withBorder:hover svg, & .SingleDatePickerInput__withBorder:hover svg path ": {
        fill: props.theme.colorMap.primary
      },
      "& .DateInput_input": {
        padding: "6px",
        fontSize: "14px",
        color: "#354052",
        lineHeight: "18px"
      },
      "& .DateInput_input__focused": {
        borderWidth: 0
      },
      "& .SingleDatePickerInput_clearDate:hover": {
        backgroundColor: "transparent"
      },
      "& .SingleDatePickerInput_clearDate:hover svg, & .SingleDatePickerInput_clearDate:hover svg path": {
        fill: props.theme.colorMap.primary
      },
      "& .CalendarDay:hover, & .CalendarDay__selected": {
        backgroundColor: props.theme.colorMap.primary,
        color: props.theme.colorMap.primaryFg,
        borderColor: props.theme.colorMap.primaryDark
      },
      "& .DayPickerNavigation_button svg, & .DayPickerNavigation_button svg path": {
        fill: props.theme.colorMap.primary
      },
      "& .DayPickerNavigation_button:hover": {
        borderColor: props.theme.colorMap.primary
      }
    }
  });

const BaseDate: React.StatelessComponent<UpDateStyledProps & WithThemeProps> = (props: UpDateStyledProps & WithThemeProps) => {

    const {value, placeholder, floatingLabel, focused, onFocusChange, className, format, disabled, minDate, maxDate, innerRef, onChange, ...others} = props;
    const id = generateUniqueId() ;
    return (
      <div
        className={classnames(
          getStyles(props),
          focused ? "up-input-focused" : null,
          !isEmpty(value) ? "up-input-valued" : null
        )}
      >
        {floatingLabel && <label htmlFor={id}>{floatingLabel}</label>}
        <SingleDatePicker
          placeholder={floatingLabel ? "" : placeholder}
          focused={focused}
          onFocusChange={onFocusChange}
          date={value}
          onDateChange={onChange}
          id={id}
          disabled={disabled}
          showClearDate={true}
          showDefaultInputIcon={true}
          noBorder={false}
          screenReaderInputMessage={
            floatingLabel ? floatingLabel : placeholder ? placeholder : "Date"
          }
          ref={innerRef}
          keepOpenOnDateSelect={false}
          hideKeyboardShortcutsPanel={true}
          phrases={defaultPhrases}
          isOutsideRange={day =>
            (maxDate && day > maxDate) || (minDate && day < minDate)
          }
          isDayBlocked={day => false}
          // isDayHighlighted={(day: any) => day == new Date()}
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
            // this.props.onChange(this.dateInput.value) ;
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