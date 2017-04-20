import "normalize.css/normalize.css"
import "@blueprintjs/core/dist/blueprint.css"

import * as React from "react"
import { UpDateProps } from './'
import { InputBaseComponent } from '../_Common/BaseControl/BaseControl'
import UpDateStyle from './styles'

export default class UpDate extends InputBaseComponent<UpDateProps, Date> {

    public static defaultProps: UpDateProps = {
        format:"DD/MM/YYYY",
        value:null
    };

    constructor(p, c) {
        super(p, c);
        this.onChange = this.onChange.bind(this) ;
    }

    componentDidMount = () => {
    }

    renderControl() {
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
