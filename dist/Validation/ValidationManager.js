"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ValidationManager {
    constructor() {
        this.ErrorControl = [];
    }
    addControl(control) {
        this.ErrorControl.push(control);
    }
    isValidValue(value) {
        var newValue = value;
        for (var i = 0; i < this.ErrorControl.length; i++) {
            var result = this.ErrorControl[i].isValidValue(value);
            if (result.hasError) {
                return result;
            }
            else if (result.correctValue !== undefined) {
                newValue = result.correctValue;
            }
        }
        return { hasError: false, errorMessage: null, correctValue: newValue };
    }
}
exports.default = ValidationManager;
//# sourceMappingURL=ValidationManager.js.map