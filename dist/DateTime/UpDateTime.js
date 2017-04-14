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
var BaseControl_1 = require("../BaseControl/BaseControl");
var UpDateTime = (function (_super) {
    __extends(UpDateTime, _super);
    function UpDateTime(p, c) {
        var _this = _super.call(this, p, c) || this;
        _this.componentDidMount = function () {
            $(_this.inputElementGroup).datetimepicker({ locale: 'fr', format: "DD/MM/YYYY HH:mm" });
            $(_this.inputElementGroup).on("dp.change", _this.onChange.bind(_this));
        };
        return _this;
    }
    UpDateTime.prototype.renderControl = function () {
        var _this = this;
        return React.createElement("div", { className: "input-group", style: { marginBottom: "3px" }, ref: function (input) { _this.inputElementGroup = input; } },
            React.createElement("input", { type: 'text', className: "form-control" }),
            React.createElement("span", { className: "input-group-addon" },
                React.createElement("span", { className: "glyphicon glyphicon-calendar" })));
    };
    UpDateTime.prototype.onChange = function (event) {
        var data = null;
        if (typeof (event.date) === "object" && event.date && typeof (event.date.toDate) === "function") {
            data = event.date.toDate();
        }
        return data;
    };
    return UpDateTime;
}(BaseControl_1.BaseControl));
exports.default = UpDateTime;
//# sourceMappingURL=UpDateTime.js.map