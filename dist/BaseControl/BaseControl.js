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
var ValidationManager_1 = require("../Validation/ValidationManager");
var ErrorDisplay_1 = require("../Validation/ErrorDisplay");
require("../theming/base.css");
var BaseControl = (function (_super) {
    __extends(BaseControl, _super);
    function BaseControl(props, context) {
        var _this = _super.call(this, props, context) || this;
        _this.handleChangeEvent = function (event) {
            var cleanData = _this.onChange(event);
            _this.checkData(cleanData);
            _this.dispatchOnChange(cleanData, event);
        };
        _this.checkData = function (cleanData) {
            var result = _this._validationManager.isValidValue(cleanData);
            if (result.hasError) {
                _this.setState({ error: result.errorMessage }, _this.dispatchOnError);
            }
            else {
                _this.setState({ error: null }, _this.dispatchOnError);
            }
        };
        _this.dispatchOnChange = function (data, event) {
            if (_this.props.onChange !== undefined) {
                _this.props.onChange(data, event);
            }
        };
        _this.dispatchOnError = function () {
            if (_this.props.onError !== undefined) {
                _this.props.onError(_this.state.error != null);
            }
        };
        _this.state = { error: null };
        _this._validationManager = new ValidationManager_1.default();
        return _this;
    }
    BaseControl.prototype.hasError = function () {
        return this.state.error != null;
    };
    BaseControl.prototype.render = function () {
        return React.createElement(ErrorDisplay_1.default, { error: this.state.error }, this.renderControl());
    };
    return BaseControl;
}(React.Component));
exports.BaseControl = BaseControl;
//# sourceMappingURL=BaseControl.js.map