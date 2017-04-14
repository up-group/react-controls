"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const styles_1 = require("../Input/styles");
const BaseControl_1 = require("../../../Common/BaseControl/BaseControl");
const TypeStringControl_1 = require("../../../Common/Validation/TypeStringControl");
class Phone extends BaseControl_1.BaseControl {
    constructor(p, c) {
        super(p, c);
        var pattern = /^(0|\+33)[1-9]([-. ]?[0-9]{2}){4}$/;
        var patternErrorMessage = "Doit être un numéro de téléphone";
        this._validationManager.addControl(new TypeStringControl_1.default(pattern, patternErrorMessage));
    }
    onChange(event) {
        return event.target.value;
    }
    renderControl() {
        return (React.createElement(styles_1.InputStyled, { hasError: this.hasError(), onChange: this.handleChangeEvent }));
    }
}
Phone.defaultProps = {};
exports.default = Phone;
//# sourceMappingURL=Phone.js.map