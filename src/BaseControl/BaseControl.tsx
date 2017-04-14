import * as React from "react";
import ValidationManager from "../Validation/ValidationManager"
import ErrorDisplay from "../Validation/ErrorDisplay"
import "../theming/base.css"

export interface BaseProps<_BaseType> {
    value?: _BaseType;
}

export interface BaseState {
    error?: string;
}

export abstract class BaseControl<_Props, _BaseType> extends React.Component<BaseProps<_BaseType> & _Props, BaseState> {

    _validationManager: ValidationManager;

    constructor(props?, context?) {
        super(props, context);
        this.state = { error: null };
        this._validationManager = new ValidationManager();
    }

    abstract onChange(args: any): _BaseType;
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
