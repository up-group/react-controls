"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const $ = require("jquery");
require("eonasdan-bootstrap-datetimepicker/build/js/bootstrap-datetimepicker.min.js");
require("eonasdan-bootstrap-datetimepicker/build/css/bootstrap-datetimepicker.css");
const React = require("react");
const styles_1 = require("./styles");
const BaseControl_1 = require("../BaseControl/BaseControl");
class UpDate extends BaseControl_1.BaseControl {
    constructor(p, c) {
        super(p, c);
        this.componentDidMount = () => {
            $(this.inputElementGroup).datetimepicker({ locale: 'fr', format: "DD/MM/YYYY" });
            $(this.inputElementGroup).on("dp.change", this.onChange.bind(this));
        };
        this.onChange = this.onChange.bind(this);
        this.setInput = this.setInput.bind(this);
    }
    setInput(input) {
        this.inputElementGroup = input;
    }
    setData(data) {
        $(this.inputElementGroup).data("DateTimePicker").date(data);
    }
    renderControl() {
        return React.createElement(styles_1.default, { value: this.props.value, hasError: this.props.hasError, innerRef: this.setInput, onChange: this.onChange });
    }
    onChange(event) {
        var data = null;
        if (typeof (event.date) === "object" && event.date && typeof (event.date.toDate) === "function") {
            data = event.date.startOf('day').toDate();
        }
        this.dispatchOnChange({ value: data });
        return data;
    }
    dispatchOnChange(data) {
        if (typeof (this.props.onChange) === "function") {
            this.props.onChange(data.value);
        }
    }
}
exports.default = UpDate;
//# sourceMappingURL=UpDate.js.map