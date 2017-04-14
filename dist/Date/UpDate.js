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
require("normalize.css/normalize.css");
var React = require("react");
var BaseControl_1 = require("../BaseControl/BaseControl");
var UpDate = (function (_super) {
    __extends(UpDate, _super);
    function UpDate(p, c) {
        var _this = _super.call(this, p, c) || this;
        _this.componentDidMount = function () {
        };
        _this.onChange = _this.onChange.bind(_this);
        _this.setInput = _this.setInput.bind(_this);
        return _this;
    }
    UpDate.prototype.setInput = function (input) {
        this.inputElementGroup = input;
    };
    UpDate.prototype.setData = function (data) {
        $(this.inputElementGroup).data("DateTimePicker").date(data);
    };
    UpDate.prototype.renderControl = function () {
        return React.createElement("span", null);
    };
    UpDate.prototype.onChange = function (event) {
        var data = null;
        if (typeof (event.date) === "object" && event.date && typeof (event.date.toDate) === "function") {
            data = event.date.startOf('day').toDate();
        }
        return data;
    };
    return UpDate;
}(BaseControl_1.BaseControl));
exports.default = UpDate;
//# sourceMappingURL=UpDate.js.map