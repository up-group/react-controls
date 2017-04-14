"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("normalize.css/normalize.css");
require("@blueprintjs/core/dist/blueprint.css");
const React = require("react");
const styles_1 = require("./styles");
const BaseControl_1 = require("../../../Common/BaseControl/BaseControl");
class UpDateTime extends BaseControl_1.BaseControl {
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
        return React.createElement(styles_1.default, { format: this.props.format, value: this.props.value, hasError: this.props.hasError, onChange: this.handleChangeEvent });
    }
    onChange(newDate) {
        return newDate;
    }
    getDate(date) {
        var dateParts = date.split("/");
        return new Date(parseInt(dateParts[2]), parseInt(dateParts[1]) - 1, parseInt(dateParts[0]));
    }
}
UpDateTime.defaultProps = {
    format: "DD/MM/YYYY",
    value: ""
};
exports.default = UpDateTime;
//# sourceMappingURL=UpDateTime.js.map