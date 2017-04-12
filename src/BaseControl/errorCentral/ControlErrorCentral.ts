/// <reference path="./error.d.ts"/>

export default class ControlErrorCentral {
    private ErrorControl: ErrorControl<any>[] = [];

    constructor() {

    }

    addControl(control: ErrorControl<any>) {
        this.ErrorControl.push(control);
    }

    isValidValue(value: any): errorControlType<any> {
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