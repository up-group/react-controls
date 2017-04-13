import * as $ from "jquery"
import "eonasdan-bootstrap-datetimepicker/build/js/bootstrap-datetimepicker.min.js"
import "eonasdan-bootstrap-datetimepicker/build/css/bootstrap-datetimepicker.css"
import * as React from "react"
import UpDateStyle from './styles'
import { UpDateProps } from './'
import { BaseControl } from '../BaseControl/BaseControl'

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
        $(this.inputElementGroup).datetimepicker({ locale: 'fr', format: "DD/MM/YYYY" });
        $(this.inputElementGroup).on("dp.change", this.onChange.bind(this));
    }

    renderControl() {
        return <UpDateStyle value={this.props.value} hasError={this.props.hasError} innerRef={this.setInput} onChange={this.onChange}></UpDateStyle>;
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
        this.dispatchOnChange({ value: data });
        return data;
    }

    dispatchOnChange(data : {value:any}) {
        if (typeof (this.props.onChange) === "function") {
            this.props.onChange(data.value);
        }
    }
}
