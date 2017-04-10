import * as $ from "jquery";
import "eonasdan-bootstrap-datetimepicker"
import * as React from "react";
import UpDateTimeStyle from './styles'
import {UpDateTimeProps, UpDateTimeState} from './types'

export default class UpDateTime extends React.Component<UpDateTimeProps, UpDateTimeState> {

    inputElementGroup: HTMLDivElement;
    constructor(p, c) {
        super(p, c);
    }

    setInput(data) {
        $(this.inputElementGroup).data("DateTimePicker").date(data);
    }

    componentDidMount() {
        $(this.inputElementGroup).datetimepicker({ locale: 'fr', format: "DD/MM/YYYY HH:mm" });
        $(this.inputElementGroup).on("dp.change", this.handleChangeJsEvent);
    }

    render() {
        return <div ref={(input) => { this.inputElementGroup = input; } }>
          <UpDateTimeStyle hasError={this.props.hasError}
                  onChange={this.props.onChange}
                  isNuallble={this.props.isNuallble}></UpDateTimeStyle></div>
    }

    handleChangeJsEvent(event: any) {
        if (typeof (event.date) === "object" && event.date && typeof (event.date.toDate) === "function") {
            this.setState({ value: event.date.toDate() }, this.dispatchOnChange)
            return
        }
        this.setState({ value: null }, this.dispatchOnChange)
    }

    dispatchOnChange = () => {
        this.props.onChange(this.state.value);
    }

    isEmpty(value) {
        return value === null || value === undefined || value === "";
    }
}
