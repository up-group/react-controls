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
var styles_1 = require("../Styled/Input/styles");
var BaseControl_1 = require("../BaseControl/BaseControl");
var TypeStringControl_1 = require("../Validation/TypeStringControl");
var TypeNumberControl_1 = require("../Validation/TypeNumberControl");
var Integer = (function (_super) {
    __extends(Integer, _super);
    function Integer(p, c) {
        var _this = _super.call(this, p, c) || this;
        var pattern = /^[0-9]*$/;
        var patternErrorMessage = "Doit être un nombre entier";
        _this._validationManager.addControl(new TypeStringControl_1.default(pattern, patternErrorMessage));
        _this._validationManager.addControl(new TypeNumberControl_1.default(true, _this.props.min, _this.props.max));
        return _this;
    }
    Integer.prototype.onChange = function (event) {
        return event.target.value;
    };
    Integer.prototype.renderControl = function () {
        return (React.createElement(styles_1.TextInputComponent, { hasError: this.state.error != null, type: "text", color: this.props.color, backgroundColor: this.props.backgroundColor, fontSize: this.props.fontSize, onChange: this.handleChangeEvent }, this.props.children));
    };
    return Integer;
}(BaseControl_1.BaseControl));
Integer.defaultProps = {
    color: '#000000',
    backgroundColor: '#ffffff',
    borderColor: '#732419',
    fontSize: 'medium'
};
exports.default = Integer;
//# sourceMappingURL=Integer.js.map