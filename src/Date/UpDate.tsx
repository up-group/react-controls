import * as $ from "jquery";
import "eonasdan-bootstrap-datetimepicker"
import * as React from "react";
import UpDateStyle from './styles'
import {UpDateProps, UpDateState} from './'

export default class UpDate extends React.Component<UpDateProps, UpDateState> {

    inputElementGroup: HTMLDivElement;
    constructor(p, c) {
        super(p, c);
    }

    setInput(data) {
        $(this.inputElementGroup).data("DateTimePicker").date(data);
    }

    componentDidMount() {
        $(this.inputElementGroup).datetimepicker({ locale: 'fr', format: "DD/MM/YYYY" });
        $(this.inputElementGroup).on("dp.change", this.handleChangeJsEvent);
    }

    render() {
        return <div ref={(input) => { this.inputElementGroup = input; } }>
          <UpDateStyle hasError={this.props.hasError}
                  onChange={this.props.onChange}
                  isNuallble={this.props.isNuallble}></UpDateStyle></div>
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
