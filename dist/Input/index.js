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
var styles_1 = require("./styles");
var BaseControl_1 = require("../BaseControl/BaseControl");
var TypeStringControl_1 = require("../Validation/TypeStringControl");
var Input = (function (_super) {
    __extends(Input, _super);
    function Input(p, c) {
        var _this = _super.call(this, p, c) || this;
        var pattern = null;
        var patternErrorMessage = null;
        if (_this.props.pattern != null) {
            pattern = new RegExp(_this.props.pattern);
            patternErrorMessage = "test";
            _this._validationManager.addControl(new TypeStringControl_1.default(pattern, patternErrorMessage));
        }
        return _this;
    }
    Input.prototype.onChange = function (event) {
        return event.target.value;
    };
    Input.prototype.renderControl = function () {
        if (this.props.type == "email") {
            return (React.createElement(styles_1.InputStyled, { type: "email", iconName: "email", style: this.props.style, borderColor: this.props.borderColor, onClick: this.props.onClick, color: this.props.color, backgroundColor: this.props.backgroundColor, width: this.props.width, height: this.props.height, readOnly: this.props.readOnly, disabled: this.props.disabled, onChange: this.handleChangeEvent }, this.props.children));
        }
        return (React.createElement(styles_1.InputStyled, { type: "text", style: this.props.style, iconName: this.props.iconName || this.props.type, onClick: this.props.onClick, color: this.props.color, backgroundColor: this.props.backgroundColor, width: this.props.width, height: this.props.height, readOnly: this.props.readOnly, disabled: this.props.disabled, onChange: this.handleChangeEvent }, this.props.children));
    };
    return Input;
}(BaseControl_1.BaseControl));
Input.defaultProps = {
    color: '#fefefe',
    backgroundColor: '#c05b4d',
    borderColor: '#732419',
    width: 'medium',
    height: 'normal'
};
exports.default = Input;
//# sourceMappingURL=index.js.map