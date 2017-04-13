"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const styles_1 = require("./styles");
const BaseControl_1 = require("../BaseControl/BaseControl");
const TypeStringControl_1 = require("../Validation/TypeStringControl");
const TypeNumberControl_1 = require("../Validation/TypeNumberControl");
class Input extends BaseControl_1.BaseControl {
    constructor(p, c) {
        super(p, c);
        var pattern = null;
        var patternErrorMessage = null;
        if (this.props.pattern != null) {
            pattern = new RegExp(this.props.pattern);
            patternErrorMessage = "test";
        }
        else {
            switch (this.props.type) {
                case "email":
                    pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                    patternErrorMessage = "Doit être un mail";
                    break;
                case "number":
                    pattern = /^[0-9]*(|\.[0-9]*)*$/;
                    patternErrorMessage = "Doit être un nombre";
                    break;
                case "integer":
                    pattern = /^[0-9]*$/;
                    patternErrorMessage = "Doit être un nombre entier";
                    break;
                case "phone":
                    pattern = /^(0|\+33)[1-9]([-. ]?[0-9]{2}){4}$/;
                    patternErrorMessage = "Doit être un téléphone";
                    break;
                default:
            }
        }
        this._validationManager.addControl(new TypeStringControl_1.default(pattern, patternErrorMessage));
        if (this.props.type == "number" || this.props.type == "integer") {
            var min, max = null;
            if (this.props.min != null) {
                if (typeof (this.props.min) === "number") {
                    min = this.props.min;
                }
                else {
                    min = parseFloat(this.props.min);
                }
            }
            if (this.props.max != null) {
                if (typeof (this.props.max) === "number") {
                    max = this.props.max;
                }
                else {
                    max = parseFloat(this.props.max);
                }
            }
            this._validationManager.addControl(new TypeNumberControl_1.default(this.props.type == "integer", min, max));
        }
    }
    onChange(event) {
        return event.target.value;
    }
    renderControl() {
        if (this.props.type == "email") {
            return (React.createElement(styles_1.EmailInputComponent, { type: "email", style: this.props.style, borderColor: this.props.borderColor, onClick: this.props.onClick, color: this.props.color, backgroundColor: this.props.backgroundColor, fontSize: this.props.fontSize, onChange: this.handleChangeEvent }, this.props.children));
        }
        return (React.createElement(styles_1.TextInputComponent, { type: "text", onClick: this.props.onClick, color: this.props.color, backgroundColor: this.props.backgroundColor, fontSize: this.props.fontSize, onChange: this.handleChangeEvent }, this.props.children));
    }
}
Input.defaultProps = {
    color: '#fefefe',
    backgroundColor: '#c05b4d',
    borderColor: '#732419',
    fontSize: 'medium',
};
exports.default = Input;
//# sourceMappingURL=index.js.map