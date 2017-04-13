import * as React from "react";
import ValidationManager from "../Validation/ValidationManager"
import ErrorDisplay from "../Validation/ErrorDisplay"


export interface BaseProp {
}

export interface BaseState<basetype> {
    error?: string;
    value?: basetype;
}

export abstract class BaseControl<prop, basetype> extends React.Component<BaseProp & prop, BaseState<basetype>> {

    _validationManager: ValidationManager;

    constructor(props?, context?) {
        super(props, context);
        this.state = { error: null, value: null };
        this._validationManager = new ValidationManager();
    }

    abstract onChange(args: any): basetype;
    abstract renderControl(): JSX.Element;

    public handleChangeEvent = (event) => {
        var cleanData = this.onChange(event);
        this.checkData(cleanData);
    }

    public checkData = (cleanData) => {
        var result = this._validationManager.isValidValue(cleanData);
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
