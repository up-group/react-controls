"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const styles_1 = require("../Input/styles");
const BaseControl_1 = require("../../../Common/BaseControl/BaseControl");
const TypeStringControl_1 = require("../../../Common/Validation/TypeStringControl");
class Email extends BaseControl_1.BaseControl {
    constructor(p, c) {
        super(p, c);
        var pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        var patternErrorMessage = "Doit être un courriel";
        this._validationManager.addControl(new TypeStringControl_1.default(pattern, patternErrorMessage));
    }
    onChange(event) {
        return event.target.value;
    }
    renderControl() {
        return (React.createElement(styles_1.InputStyled, Object.assign({}, this.props, { hasError: this.hasError(), onChange: this.handleChangeEvent })));
    }
}
Email.defaultProps = {};
exports.default = Email;
//# sourceMappingURL=Email.js.map