import * as React from "react";
import ControlErrorCentral from "./errorCentral/ControlErrorCentral"
import ErrorDisplay from "./errorCentral/ErrorDisplay"


export interface baseProp {
}

export interface baseState<basetype> {
    error?: string;
    value?: basetype;
}

export abstract class BaseControl<prop, basetype> extends React.Component<baseProp & prop, baseState<basetype>> {

    _ControlErrorCentral: ControlErrorCentral;

    constructor(props?, context?) {        super(props, context);        this.state = { error: null, value: null };        this._ControlErrorCentral = new ControlErrorCentral();    }    abstract handleChangeJsEvent(args: any): basetype;
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





