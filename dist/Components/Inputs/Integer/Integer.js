"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const styles_1 = require("../Input/styles");
const BaseControl_1 = require("../../../Common/BaseControl/BaseControl");
const TypeStringControl_1 = require("../../../Common/Validation/TypeStringControl");
const TypeNumberControl_1 = require("../../../Common/Validation/TypeNumberControl");
class Integer extends BaseControl_1.BaseControl {
    constructor(p, c) {
        super(p, c);
        var pattern = /^[0-9]*$/;
        var patternErrorMessage = "Doit être un nombre entier";
        this._validationManager.addControl(new TypeStringControl_1.default(pattern, patternErrorMessage));
        this._validationManager.addControl(new TypeNumberControl_1.default(true, this.props.min, this.props.max));
    }
    onChange(event) {
        return event.target.value;
    }
    renderControl() {
        return (React.createElement(styles_1.InputStyled, { hasError: this.hasError(), onChange: this.handleChangeEvent }));
    }
}
Integer.defaultProps = {};
exports.default = Integer;
//# sourceMappingURL=Integer.js.map