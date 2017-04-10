"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const $ = require("jquery");
require("eonasdan-bootstrap-datetimepicker");
const React = require("react");
const styles_1 = require("./styles");
class UpDateTime extends React.Component {
    constructor(p, c) {
        super(p, c);
        this.dispatchOnChange = () => {
            this.props.onChange(this.state.value);
        };
    }
    setInput(data) {
        $(this.inputElementGroup).data("DateTimePicker").date(data);
    }
    componentDidMount() {
        $(this.inputElementGroup).datetimepicker({ locale: 'fr', format: "DD/MM/YYYY HH:mm" });
        $(this.inputElementGroup).on("dp.change", this.handleChangeJsEvent);
    }
    render() {
        return React.createElement("div", { ref: (input) => { this.inputElementGroup = input; } },
            React.createElement(styles_1.default, { hasError: this.props.hasError, onChange: this.props.onChange, isNuallble: this.props.isNuallble }));
    }
    handleChangeJsEvent(event) {
        if (typeof (event.date) === "object" && event.date && typeof (event.date.toDate) === "function") {
            this.setState({ value: event.date.toDate() }, this.dispatchOnChange);
            return;
        }
        this.setState({ value: null }, this.dispatchOnChange);
    }
    isEmpty(value) {
        return value === null || value === undefined || value === "";
    }
}
exports.default = UpDateTime;
//# sourceMappingURL=UpDateTime.js.map