/// <reference path="./error.d.ts"/>

export default class ValidationManager {
    private ErrorControl: ErrorControl<any>[] = [];

    constructor() {

    }

    addControl(control: ErrorControl<any>) {
        this.ErrorControl.push(control);
    }

    isValidValue(value: any): ErrorControlType<any> {
        var newValue = value;
        for (var i = 0; i < this.ErrorControl.length; i++) {
            var result = this.ErrorControl[i].isValidValue(value);
            if (result.hasError) {
                return result;
            } else if (result.correctValue !== undefined) {
                newValue = result.correctValue;
            }
        }
        return { hasError: false, errorMessage: null, correctValue: newValue }
    }

}