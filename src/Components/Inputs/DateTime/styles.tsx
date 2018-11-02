import * as React from 'react'
import { UpDateTimeStyledProps } from './'

import UpDate from '../Date'

const BaseDate: React.StatelessComponent<UpDateTimeStyledProps> = (props) => {

    const { value, className, format, onChangeDate, disabled, minDate, maxDate, innerRef, onChangeTime } = props;
    const picker = (<span className="pt-icon pt-icon-calendar"></span>);
    //<DateInput
    //    className={className}
    //    locale="fr"
    //    ref={innerRef}
    //    invalidDateMessage=""
    //    localeUtils={locale}
    //    rightElement={picker}
    //    canClearSelection={true}
    //    closeOnSelection={true}
    //    disabled={disabled}
    //    minDate={minDate}
    //    maxDate={maxDate}
    //    value={value}
    //    onChange={onChangeDate} format={format} />
    //    <TimePicker value={value} onChange={onChangeTime} />
    return (<div>
        <input type="datetime" />

    </div>);
}

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
            <BaseDate  innerRef={this.setInput} {...this.props} />
        );
    }
}