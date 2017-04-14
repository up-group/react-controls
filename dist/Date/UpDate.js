"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("normalize.css/normalize.css");
const React = require("react");
const BaseControl_1 = require("../BaseControl/BaseControl");
const styles_1 = require("./styles");
class UpDate extends BaseControl_1.BaseControl {
    constructor(p, c) {
        super(p, c);
        this.componentDidMount = () => {
        };
        this.onChange = this.onChange.bind(this);
    }
    renderControl() {
        var _value = this.props.value;
        if (typeof this.props.value === 'string' || this.props.value instanceof String) {
            _value = this.getDate(_value);
        }
        return React.createElement(styles_1.default, { format: this.props.format, value: this.props.value, hasError: this.props.hasError, onChange: this.onChange });
    }
    onChange(newDate) {
        this.dispatchOnChange({ value: newDate });
        return newDate;
    }
    dispatchOnChange(data) {
        if (typeof (this.props.onChange) === "function") {
            this.props.onChange(data.value);
        }
    }
    getDate(date) {
        var dateParts = date.split("/");
        return new Date(parseInt(dateParts[2]), parseInt(dateParts[1]) - 1, parseInt(dateParts[0]));
    }
}
UpDate.defaultProps = {
    format: "DD/MM/YYYY",
    value: ""
};
exports.default = UpDate;
//# sourceMappingURL=UpDate.js.map