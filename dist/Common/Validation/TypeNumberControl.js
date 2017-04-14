"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TypeNumberControl {
    constructor(isInteger, minValue, maxValue) {
        this._isInteger = isInteger;
        this._minValue = minValue == null ? -Infinity : minValue;
        this._maxValue = maxValue == null ? Infinity : maxValue;
        this.isValidValue = this.isValidValue.bind(this);
    }
    isValidValue(value) {
        if (value === "" || value === null) {
            return { hasError: false, correctValue: null };
        }
        var nbValue = Number(value);
        if (isNaN(nbValue)) {
            return { hasError: true, errorMessage: "Doit �tre un nombre" };
        }
        else if (this._isInteger && nbValue % 1 !== 0) {
            return { hasError: true, errorMessage: "Doit �tre un entier" };
        }
        else if (this._minValue > nbValue) {
            return { hasError: true, errorMessage: "Doit �tre plus grand que '" + this._minValue + "'" };
        }
        else if (this._maxValue < nbValue) {
            return { hasError: true, errorMessage: "Doit �tre plus petit que '" + this._maxValue + "'" };
        }
        return { hasError: false, correctValue: nbValue };
    }
}
exports.default = TypeNumberControl;
//# sourceMappingURL=TypeNumberControl.js.map