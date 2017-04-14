"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const styles_1 = require("../Input/styles");
const BaseControl_1 = require("../../../Common/BaseControl/BaseControl");
const TypeNumberControl_1 = require("../../../Common/Validation/TypeNumberControl");
const TypeStringControl_1 = require("../../../Common/Validation/TypeStringControl");
class Number extends BaseControl_1.BaseControl {
    constructor(p, c) {
        super(p, c);
        var pattern = /^[0-9]*(|\.[0-9]*)*$/;
        var patternErrorMessage = "Doit être un nombre";
        this._validationManager.addControl(new TypeStringControl_1.default(pattern, patternErrorMessage));
        this._validationManager.addControl(new TypeNumberControl_1.default(false, this.props.min, this.props.max));
    }
    onChange(event) {
        return event.target.value;
    }
    renderControl() {
        return (React.createElement(styles_1.InputStyled, { hasError: this.hasError(), onChange: this.handleChangeEvent }));
    }
}
Number.defaultProps = {};
exports.default = Number;
//# sourceMappingURL=Number.js.map