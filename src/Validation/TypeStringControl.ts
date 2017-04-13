/// <reference path="./error.d.ts"/>

export default class TypeStringControl implements ErrorControl<any> {

    private _pattern: RegExp;
    private _patternErrorMessage: string;

    constructor(patern: RegExp, patternErrorMessage :string) {
        this._pattern = patern;
        this._patternErrorMessage = patternErrorMessage;
    }



    isValidValue(value: string): ErrorControlType<string> {

        if (this._pattern && value) {
            var result = this._pattern.test(value);
            if (result) {
                return { hasError: false, correctValue: value }
            } else {
                return {
                    hasError: true,
                    errorMessage: this._patternErrorMessage ? this._patternErrorMessage : ("Ne répond pas au patern " + this._pattern)
                }
            }
        }
        return { hasError: false, correctValue: value }
    }

}