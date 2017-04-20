import "normalize.css/normalize.css"
import "@blueprintjs/core/dist/blueprint.css"

import * as React from "react"
import { UpDateTimeProps } from './'
import { InputBaseComponent } from '../_Common/BaseControl/BaseControl'
import UpDateStyle from './styles'

export default class UpDateTime extends InputBaseComponent<UpDateTimeProps, Date> {

    public static defaultProps: UpDateTimeProps = {
        format:"DD/MM/YYYY",
        value:""
    };

    constructor(p, c) {
        super(p, c);
        this.onChange = this.onChange.bind(this) ;
    }

    componentDidMount = () => {
    }

    renderControl() {
        var _value = this.props.value ;
        if (typeof this.props.value === 'string' || this.props.value instanceof String) {
            _value = this.getDate(_value) ; 
        }
        return <UpDateStyle format={this.props.format} value={this.props.value} hasError={this.props.hasError} onChange={this.handleChangeEvent}></UpDateStyle>;
    }

    onChange(newDate: any) {
        return newDate;
    }

    getDate(date:string) {
        // check the date with a regexp
        var dateParts = date.split("/");
        return new Date(parseInt(dateParts[2]), parseInt(dateParts[1]) - 1, parseInt(dateParts[0])); // month is 0-based
    }
}