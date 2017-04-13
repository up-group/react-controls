﻿import * as $ from "jquery"
import "normalize.css/normalize.css"
//import "@blueprintjs/core/dist/blueprint.css"
//import "@blueprintjs/datetime/dist/blueprint-datetime.css"
import * as React from "react"
//import UpDateStyle from './styles'
import { UpDateProps } from './'
import { BaseControl } from '../BaseControl/BaseControl'
//import {DatePicker} from '@blueprintjs/datetime'

export default class UpDate extends BaseControl<UpDateProps, Date> {

    private inputElementGroup: any;
    constructor(p, c) {
        super(p, c);
        this.onChange = this.onChange.bind(this) ;
        this.setInput = this.setInput.bind(this) ;
    }

    setInput(input) {
        this.inputElementGroup = input ;
    }

    setData(data) {
        $(this.inputElementGroup).data("DateTimePicker").date(data);
    }

    componentDidMount = () => {
        // $(this.inputElementGroup).datetimepicker({ locale: 'fr', format: "DD/MM/YYYY" });
        // $(this.inputElementGroup).on("dp.change", this.onChange.bind(this));
    }

    renderControl() {
        return <span/>
        //return <DatePicker onChange={this.onChange} />
        //return <UpDateStyle value={this.props.value} hasError={this.props.hasError} innerRef={this.setInput} onChange={this.onChange}></UpDateStyle>;
        /*return <div className="input-group" style={{ marginBottom: "3px" }} ref={(input) => { this.inputElementGroup = input; }}>
            <input type='text' className="form-control" />
            <span className="input-group-addon">
                <span className="glyphicon glyphicon-calendar"></span>
            </span>
        </div >*/
    }

    onChange(event: any) {
        var data = null;
        if (typeof (event.date) === "object" && event.date && typeof (event.date.toDate) === "function") {
            data = event.date.startOf('day').toDate()
        }
        return data;
    }

   
}
