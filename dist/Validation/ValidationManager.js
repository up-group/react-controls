"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ValidationManager = (function () {
    function ValidationManager() {
        this.ErrorControl = [];
    }
    ValidationManager.prototype.addControl = function (control) {
        this.ErrorControl.push(control);
    };
    ValidationManager.prototype.isValidValue = function (value) {
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
    };
    return ValidationManager;
}());
exports.default = ValidationManager;
//# sourceMappingURL=ValidationManager.js.map