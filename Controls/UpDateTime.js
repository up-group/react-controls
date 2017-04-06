"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var $ = require("jquery");
require("eonasdan-bootstrap-datetimepicker");
var React = require("react");
var UpDateTime = (function (_super) {
    __extends(UpDateTime, _super);
    function UpDateTime(p, c) {
        var _this = _super.call(this, p, c) || this;
        _this.dispatchOnChange = function () {
            _this.props.onChange(_this.state.value);
        };
        return _this;
    }
    UpDateTime.prototype.setInput = function (data) {
        $(this.inputElementGroup).data("DateTimePicker").date(data);
    };
    UpDateTime.prototype.componentDidMount = function () {
        $(this.inputElementGroup).datetimepicker({ locale: 'fr', format: "DD/MM/YYYY HH:mm" });
        $(this.inputElementGroup).on("dp.change", this.handleChangeJsEvent);
    };
    UpDateTime.prototype.render = function () {
        var _this = this;
        return React.createElement("div", { className: 'input-group date', style: { marginBottom: "3px" }, ref: function (input) { _this.inputElementGroup = input; } },
            React.createElement("input", { style: this.props.hasError === true ? { borderColor: "red" } : null, type: 'text', className: "form-control" }),
            React.createElement("span", { className: "input-group-addon" },
                React.createElement("span", { className: "glyphicon glyphicon-calendar" })));
    };
    UpDateTime.prototype.handleChangeJsEvent = function (event) {
        if (typeof (event.date) === "object" && event.date && typeof (event.date.toDate) === "function") {
            this.setState({ value: event.date.toDate() }, this.dispatchOnChange);
            return;
        }
        this.setState({ value: null }, this.dispatchOnChange);
    };
    UpDateTime.prototype.isEmpty = function (value) {
        return value === null || value === undefined || value === "";
    };
    return UpDateTime;
}(React.Component));
exports.UpDateTime = UpDateTime;
//# sourceMappingURL=UpDateTime.js.map