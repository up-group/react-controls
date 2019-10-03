import { ErrorControl, ErrorControlType } from "./error"

export default class TypeNumberControl implements ErrorControl<any> {

    private _isInteger: boolean;
    private _minValue: number;
    private _maxValue: number;

    constructor(isInteger: boolean, minValue: number, maxValue: number) {
        this._isInteger = isInteger;
        this._minValue = minValue == null ? -Infinity : minValue;
        this._maxValue = maxValue == null ? Infinity : maxValue;
        this.isValidValue = this.isValidValue.bind(this);
    }

    isValidValue(value: number | string): ErrorControlType<number> {

        if (value === "" || value === null || value === undefined) {
            return { hasError: false, correctValue: null }
        }

        var nbValue: number;

        if(typeof value === 'string')
        {
            nbValue = Number(value.replace(',','.'));
        }
        else{            
            nbValue = Number(value);
        }

        if (isNaN(nbValue)) {
            return { hasError: true, errorMessage: "Doit être un nombre" }
        } else if (this._isInteger && nbValue % 1 !== 0) {
            return { hasError: true, errorMessage: "Doit être un entier" }
        } else if (this._minValue > nbValue) {
            return { hasError: true, errorMessage: "Doit être plus grand que '" + this._minValue + "'" }
        } else if (this._maxValue < nbValue) {
            return { hasError: true, errorMessage: "Doit être plus petit que '" + this._maxValue + "'" }
        }

        return { hasError: false, correctValue: nbValue }
    }
}