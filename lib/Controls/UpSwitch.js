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
exports.__esModule = true;
var React = require("react");
var UpSwitch = (function (_super) {
    __extends(UpSwitch, _super);
    function UpSwitch(p, c) {
        var _this = _super.call(this, p, c) || this;
        _this.onBoolClick = function (a) {
            var data = a.target.getAttribute("value");
            var value = null;
            switch (data) {
                case "true":
                    value = true;
                    break;
                case "false":
                    value = false;
                    break;
                case "null":
                    value = null;
                    break;
                default:
                    value = null;
            }
            _this.setState({ value: value }, _this.dispatchOnChange);
        };
        _this.dispatchOnChange = function () {
            _this.props.onChange(_this.state.value);
        };
        _this.state = { value: _this.props["default"] };
        return _this;
    }
    UpSwitch.prototype.componentDidMount = function () {
    };
    UpSwitch.prototype.render = function () {
        if (this.props.isNuallble === true) {
            return React.createElement("span", { className: "btnBool" },
                React.createElement("span", { className: "btnFalse " + (this.state.value === false ? "selected Null" : ""), value: false.toString(), onClick: this.onBoolClick }, "Non"),
                React.createElement("span", { className: "btnNull " + (this.state.value === null ? "selected Null" : ""), value: null, onClick: this.onBoolClick }, "Null"),
                React.createElement("span", { className: "btnTrue " + (this.state.value === true ? "selected Null" : ""), value: true.toString(), onClick: this.onBoolClick }, "Oui"));
        }
        else {
            return React.createElement("span", { className: "btnBool" },
                React.createElement("span", { className: " " + (this.state.value === false ? "btnFalse selected" : "btnFalse"), value: false.toString(), onClick: this.onBoolClick }, "Non"),
                React.createElement("span", { className: " " + (this.state.value === true ? "btnTrue selected" : "btnTrue"), value: true.toString(), onClick: this.onBoolClick }, "Oui"));
        }
    };
    return UpSwitch;
}(React.Component));
exports["default"] = UpSwitch;
