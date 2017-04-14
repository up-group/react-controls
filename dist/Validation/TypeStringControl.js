"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TypeStringControl = (function () {
    function TypeStringControl(patern, patternErrorMessage) {
        this._pattern = patern;
        this._patternErrorMessage = patternErrorMessage;
        this.isValidValue = this.isValidValue.bind(this);
    }
    TypeStringControl.prototype.isValidValue = function (value) {
        if (this._pattern && value) {
            var result = this._pattern.test(value);
            if (result) {
                return { hasError: false, correctValue: value };
            }
            else {
                return {
                    hasError: true,
                    errorMessage: this._patternErrorMessage ? this._patternErrorMessage : ("Ne répond pas au patern " + this._pattern)
                };
            }
        }
        return { hasError: false, correctValue: value };
    };
    return TypeStringControl;
}());
exports.default = TypeStringControl;
//# sourceMappingURL=TypeStringControl.js.map