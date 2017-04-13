"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const $ = require("jquery");
require("normalize.css/normalize.css");
require("@blueprintjs/core/dist/blueprint.css");
require("@blueprintjs/datetime/dist/blueprint-datetime.css");
const React = require("react");
const BaseControl_1 = require("../BaseControl/BaseControl");
const datetime_1 = require("@blueprintjs/datetime");
class UpDate extends BaseControl_1.BaseControl {
    constructor(p, c) {
        super(p, c);
        this.componentDidMount = () => {
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
        return React.createElement(datetime_1.DatePicker, { onChange: this.onChange });
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