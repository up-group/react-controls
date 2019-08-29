import { ErrorControl, ErrorControlType } from "./error"

export default class ValidationManager {
    private errorControl: ErrorControl<any>[] = [];

    constructor() {

    }

    addControl(control: ErrorControl<any>) {
        this.errorControl.push(control);
    }

    isValidValue(value: any): ErrorControlType<any> {
        var newValue = value;
        let firstError = null ;
        this.errorControl.forEach( (handler) => {
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

        if(this.errorControl.length) {
            return { hasError: false, errorMessage: null, correctValue: newValue }
        }
            
        return null;
    }
}