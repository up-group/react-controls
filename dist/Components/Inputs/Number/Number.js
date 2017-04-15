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
var styles_1 = require("../Input/styles");
var BaseControl_1 = require("../../../Common/BaseControl/BaseControl");
var TypeNumberControl_1 = require("../../../Common/Validation/TypeNumberControl");
var TypeStringControl_1 = require("../../../Common/Validation/TypeStringControl");
var Number = (function (_super) {
    __extends(Number, _super);
    function Number(p, c) {
        var _this = _super.call(this, p, c) || this;
        var pattern = /^[0-9]*(|\.[0-9]*)*$/;
        var patternErrorMessage = "Doit être un nombre";
        _this._validationManager.addControl(new TypeStringControl_1.default(pattern, patternErrorMessage));
        _this._validationManager.addControl(new TypeNumberControl_1.default(false, _this.props.min, _this.props.max));
        return _this;
    }
    Number.prototype.onChange = function (event) {
        return event.target.value;
    };
    Number.prototype.renderControl = function () {
        return (React.createElement(styles_1.InputStyled, { hasError: this.hasError(), onChange: this.handleChangeEvent }));
    };
    return Number;
}(BaseControl_1.BaseControl));
Number.defaultProps = {};
exports.default = Number;
//# sourceMappingURL=Number.js.map