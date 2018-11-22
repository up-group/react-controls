import { ErrorControl, ErrorControlType } from "./error"

export default class ValidationManager {
    private ErrorControl: ErrorControl<any>[] = [];

    constructor() {

    }

    addControl(control: ErrorControl<any>) {
        this.ErrorControl.push(control);
    }

    isValidValue(value: any): ErrorControlType<any> {
        var newValue = value;
        let firstError = null ;
        this.ErrorControl.forEach( (handler) => {
            if(firstError == null) {
                var result = handler.isValidValue(value);
                if (result.hasError) {
                    firstError = result;
                } else if (result.correctValue !== undefined) {
                    newValue = result.correctValue;
                }
            }
        });
        
        if(firstError != null) {
            return firstError ;   
        }
        if(this.ErrorControl.length) {
            return { hasError: false, errorMessage: null, correctValue: newValue }
        }    
        return null;
    }
}