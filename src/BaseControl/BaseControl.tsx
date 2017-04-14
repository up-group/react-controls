import * as React from "react";
import ValidationManager from "../Validation/ValidationManager"
import ErrorDisplay from "../Validation/ErrorDisplay"
import "../theming/base.css"


export interface BaseProp<_BaseType> {
    onChange?: (arg: _BaseType, event: any) => void;
    onError?: (hasError: boolean) => void;
    value?: _BaseType;
}

export interface BaseState<_BaseType> {
    error?: string;
}


export abstract class BaseControl<_Props, _BaseType> extends React.Component<BaseProp<_BaseType> & _Props, BaseState<_BaseType>> {

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
        this.dispatchOnChange(cleanData, event);
    }

    public checkData = (cleanData) => {
        var result = this._validationManager.isValidValue(cleanData);
        if (result.hasError) {
            this.setState({ error: result.errorMessage }, this.dispatchOnError);
        } else {
            this.setState({ error: null }, this.dispatchOnError);
        }
    }
    
    public hasError() : boolean {
        return this.state.error != null;
    }

    public render() {
        return <ErrorDisplay error={this.state.error}>
            {this.renderControl()}
        </ErrorDisplay>;
    }

    private dispatchOnChange = (data: _BaseType, event) => {
        if (this.props.onChange !== undefined) {
            this.props.onChange(data, event);
        }
    }
    private dispatchOnError = () => {
        if (this.props.onError !== undefined) {
            this.props.onError(this.state.error != null);
        }
    }
}
