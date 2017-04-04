import * as $ from "jquery";
import "eonasdan-bootstrap-datetimepicker"
import * as React from "react";
import * as ReactDOM from "react-dom";
import { UpFormControl } from "../UpForm/UpFormControl"
import { TypeDateControl, dateFormat } from "../ControlError/TypeDateControl"


interface UpDateTimeProps {
    hasError: boolean;
    onChange: (value?: Date) => void;
    isNuallble: boolean;
    default?: Date;
}

interface UpDateTimeState {
    value?: Date;
}

export default class UpDateTime extends React.Component<UpDateTimeProps, UpDateTimeState> {
    inputElementGroup: HTMLDivElement;    constructor(p, c) {        super(p, c);
    }    setInput(data) {        $(this.inputElementGroup).data("DateTimePicker").date(data);    }    componentDidMount() {
        $(this.inputElementGroup).datetimepicker({ locale: 'fr', format: "DD/MM/YYYY HH:mm" });
        $(this.inputElementGroup).on("dp.change", this.handleChangeJsEvent);
    }    render() {

        return <div className='input-group date' style={{ marginBottom: "3px" }} ref={(input) => { this.inputElementGroup = input; }} >
            <input
                //ref={(input) => { this.inputElement = input; } }
                style={this.props.hasError === true ? { borderColor: "red" } : null}
                type='text'
                className="form-control" />
            <span className="input-group-addon">
                <span className="glyphicon glyphicon-calendar"></span>
            </span>
        </div>

    }

    handleChangeJsEvent(event: any) {
        if (typeof (event.date) === "object" && event.date && typeof (event.date.toDate) === "function") {
            this.setState({ value: event.date.toDate() }, this.dispatchOnChange)
            return
        }
        this.setState({ value: null }, this.dispatchOnChange)
    }

    dispatchOnChange = () => {        this.props.onChange(this.state.value);
    }
    isEmpty(value) {
        return value === null || value === undefined || value === "";
    }
}

