"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const $ = require("jquery");
require("eonasdan-bootstrap-datetimepicker");
const React = require("react");
const BaseControl_1 = require("../BaseControl/BaseControl");
class UpDate extends BaseControl_1.BaseControl {
    constructor(p, c) {
        super(p, c);
        this.componentDidMount = () => {
            $(this.inputElementGroup).datetimepicker({ locale: 'fr', format: "DD/MM/YYYY" });
            $(this.inputElementGroup).on("dp.change", this.handleChangeJsEvent.bind(this));
        };
    }
    renderControl() {
        return React.createElement("div", { className: "input-group", style: { marginBottom: "3px" }, ref: (input) => { this.inputElementGroup = input; } },
            React.createElement("input", { type: 'text', className: "form-control" }),
            React.createElement("span", { className: "input-group-addon" },
                React.createElement("span", { className: "glyphicon glyphicon-calendar" })));
    }
    handleChangeJsEvent(event) {
        var data = null;
        if (typeof (event.date) === "object" && event.date && typeof (event.date.toDate) === "function") {
            data = event.date.startOf('day').toDate();
        }
        this.setState({ value: data }, this.dispatchOnChange);
        return data;
    }
    dispatchOnChange() {
        if (typeof (this.props.onChange) === "function") {
            this.props.onChange(this.state.value);
        }
    }
}
exports.default = UpDate;
//# sourceMappingURL=UpDate.js.map