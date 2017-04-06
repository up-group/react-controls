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
var React = require("react");
var UpTimePicker = (function (_super) {
    __extends(UpTimePicker, _super);
    function UpTimePicker(p, c) {
        var _this = _super.call(this, p, c) || this;
        _this.onchangeHourEvent = function (e) { _this.onchangeHour(e.target.value); };
        _this.onchangeHour = function (value) {
            var hour = Number(value);
            if (isNaN(hour)) {
                hour = 0;
            }
            else if (hour < 0) {
                hour = 23;
            }
            else if (hour > 23) {
                hour = 0;
            }
            _this.setState({ hour: hour }, _this.sendChange);
        };
        _this.onKeyDownHour = function (e) {
            if (e.keyCode == 38) {
                _this.onchangeHour(Number(e.target.value) + 1);
            }
            else if (e.keyCode == 40) {
                _this.onchangeHour(Number(e.target.value) - 1);
            }
        };
        _this.onchangeMinEvent = function (e) { _this.onchangeMin(e.target.value); };
        _this.onchangeMin = function (value) {
            var minute = Number(value);
            if (isNaN(minute)) {
                minute = 0;
            }
            else if (minute < 0) {
                minute = 59;
            }
            else if (minute > 59) {
                minute = 0;
            }
            _this.setState({ minute: minute }, _this.sendChange);
        };
        _this.onKeyDownMin = function (e) {
            if (e.keyCode == 38) {
                _this.onchangeMin(Number(e.target.value) + 1);
            }
            else if (e.keyCode == 40) {
                _this.onchangeMin(Number(e.target.value) - 1);
            }
        };
        _this.sendChange = function () {
            _this.props.onChange(_this.state.hour + ":" + _this.state.minute);
        };
        _this.state = {
            hour: 0,
            minute: 0
        };
        return _this;
    }
    UpTimePicker.prototype.render = function () {
        return React.createElement("span", { className: "form-control", style: {
                "borderColor": this.props.hasError === true ? { borderColor: "red" } : null,
                "width": "5em",
                "padding": "4px"
            } },
            React.createElement("input", { type: "text", value: this.state.hour.toString(), onKeyDown: this.onKeyDownHour, onChange: this.onchangeHour, style: {
                    "border": "none",
                    "width": "2em",
                    "textAlign": "center"
                } }),
            ":",
            React.createElement("input", { type: "text", value: this.state.minute.toString(), onKeyDown: this.onKeyDownMin, onChange: this.onchangeMin, style: {
                    "border": "none",
                    "width": "2em",
                    "textAlign": "center"
                } }));
    };
    return UpTimePicker;
}(React.Component));
exports.UpTimePicker = UpTimePicker;
//# sourceMappingURL=UpTimePicker.js.map