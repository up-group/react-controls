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
moment.locale('fr')

const BaseDate: React.StatelessComponent<UpDateStyledProps> = (props) => {

    const {value, focused, onFocusChange, className, format, disabled, minDate, maxDate, innerRef, onChange, ...others} = props;
   
    return (
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

    onFocusChange = ({focused} : {focused:boolean}) => this.setState({ focused }) ;

    componentDidMount() {
        var _props = this.props as UpDateStyledProps;
        if (_props.dataFor && this.dateInput) {
            this.dateInput.inputRef.setAttribute('data-tip', 'tooltip');
            this.dateInput.inputRef.setAttribute('data-for', _props.dataFor);
        }
    }

    public render() {
        return (
            <BaseDate innerRef={this.setInput} {...this.props} focused={this.state.focused} onFocusChange={this.onFocusChange} />
        );
    }
}