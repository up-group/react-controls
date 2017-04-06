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
var UpDate = (function (_super) {
    __extends(UpDate, _super);
    function UpDate(p, c) {
        var _this = _super.call(this, p, c) || this;
        _this.dispatchOnChange = function () {
            _this.props.onChange(_this.state.value);
        };
        return _this;
    }
    UpDate.prototype.setInput = function (data) {
        $(this.inputElementGroup).data("DateTimePicker").date(data);
    };
    UpDate.prototype.componentDidMount = function () {
        $(this.inputElementGroup).datetimepicker({ locale: 'fr', format: "DD/MM/YYYY" });
        $(this.inputElementGroup).on("dp.change", this.handleChangeJsEvent);
    };
    UpDate.prototype.render = function () {
        var _this = this;
        return React.createElement("div", { className: 'input-group date', style: { marginBottom: "3px" }, ref: function (input) { _this.inputElementGroup = input; } },
            React.createElement("input", { style: this.props.hasError === true ? { borderColor: "red" } : null, type: 'text', className: "form-control" }),
            React.createElement("span", { className: "input-group-addon" },
                React.createElement("span", { className: "glyphicon glyphicon-calendar" })));
    };
    UpDate.prototype.handleChangeJsEvent = function (event) {
        if (typeof (event.date) === "object" && event.date && typeof (event.date.toDate) === "function") {
            this.setState({ value: event.date.toDate() }, this.dispatchOnChange);
            return;
        }
        this.setState({ value: null }, this.dispatchOnChange);
    };
    UpDate.prototype.isEmpty = function (value) {
        return value === null || value === undefined || value === "";
    };
    return UpDate;
}(React.Component));
exports.UpDate = UpDate;
//# sourceMappingURL=UpDate.js.map