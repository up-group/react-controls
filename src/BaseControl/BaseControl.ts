import * as React from "react";
import ControlErrorCentral from "./errorCentral/ControlErrorCentral"


export interface baseProp {
}

export interface baseState {
}

export abstract class BaseControl<baseType> extends React.Component<baseProp & baseType, baseState> {

    _ControlErrorCentral: ControlErrorCentral;

    constructor(props?, context?) {        super(props, context);        this._ControlErrorCentral = new ControlErrorCentral();    }    abstract handleChangeJsEvent(args: any): baseType;

    public handleChangeJsEventGlobal = (event) => {
        var cleandata = this.handleChangeJsEvent(event);
        this.handleChangeEventGlobal(cleandata);
    }

    public handleChangeEventGlobal = (cleandata) => {
        var result = this._ControlErrorCentral.isValidValue(cleandata);
        console.log(result);
    }
}





