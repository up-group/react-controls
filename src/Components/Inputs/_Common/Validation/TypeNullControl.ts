import { ErrorControl, ErrorControlType } from "./error"

export default class TypeNullControl implements ErrorControl<any> {

    private _isRequierd: boolean;
    public defaultValue: any;

    constructor(/*isRequierd: boolean*/) {
        this._isRequierd = true;// isRequierd;
    }


    isValidValue(value: any) {
        if (this._isRequierd && this.isNullOrWhiteSpace(value) === true) {
            return { hasError: true, errorMessage: "La valeur de ce champ est requise" }
        }

        //if (this._isNullable == false) {
        //    return { hasError: true, errorMessage: "Doit avoir une valeur" }
        //}

        return { hasError: false }
    }

    private isNullOrWhiteSpace(value) {
        if (value === undefined || value === null || value === "") {
            return true;
        }

        if (value.length === 0) {
            return true;
        }

        return false;
    }
}