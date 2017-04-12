import * as React from "react";
import ControlErrorCentral from "./errorCentral/ControlErrorCentral"
import ErrorDisplay from "./errorCentral/ErrorDisplay"


export interface baseProp {
}

export interface baseState {
    error: string
}

export abstract class BaseControl<baseType> extends React.Component<baseProp & baseType, baseState> {

    _ControlErrorCentral: ControlErrorCentral;

    constructor(props?, context?) {        super(props, context);        this.state = { error: null };        this._ControlErrorCentral = new ControlErrorCentral();    }    abstract handleChangeJsEvent(args: any): baseType;
    abstract renderControl(): JSX.Element;

    public handleChangeJsEventGlobal = (event) => {
        var cleandata = this.handleChangeJsEvent(event);
        this.handleChangeEventGlobal(cleandata);
    }

    public handleChangeEventGlobal = (cleandata) => {
        var result = this._ControlErrorCentral.isValidValue(cleandata);
        if (result.hasError) {
            this.setState({ error: result.errorMessage });
        } else {
            this.setState({ error: null });
        }
    }

    public render() {
        return <ErrorDisplay error={this.state.error}>
            {this.renderControl()}
        </ErrorDisplay>;

    }
}





