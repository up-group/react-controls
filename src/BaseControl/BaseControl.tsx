import * as React from "react";
import ValidationManager from "../Validation/ValidationManager"
import ErrorDisplay from "../Validation/ErrorDisplay"


export interface BaseProp<basetype> {
    onChange?: (arg: basetype, event: any) => void;
    onError?: (hasError: boolean) => void;
}

export interface BaseState<basetype> {
    error?: string;
    value?: basetype;
}



export abstract class BaseControl<prop, basetype> extends React.Component<BaseProp<basetype> & prop, BaseState<basetype>> {

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

    public render() {
        return <ErrorDisplay error={this.state.error}>
            {this.renderControl()}
        </ErrorDisplay>;
    }

    private dispatchOnChange = (data: basetype, event) => {
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
