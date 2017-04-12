"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TypeStringControl {
    constructor(patern, patternErrorMessage) {
        this._pattern = patern;
        this._patternErrorMessage = patternErrorMessage;
    }
    isValidValue(value) {
        if (this._pattern && value) {
            var result = this._pattern.test(value);
            if (result) {
                return { hasError: false, correctValue: value };
            }
            else {
                return {
                    hasError: true,
                    errorMessage: this._patternErrorMessage ? this._patternErrorMessage : ("Ne repond pas au patern " + this._pattern)
                };
            }
        }
        return { hasError: false, correctValue: value };
    }
}
exports.default = TypeStringControl;
//# sourceMappingURL=TypeStringControl.js.map