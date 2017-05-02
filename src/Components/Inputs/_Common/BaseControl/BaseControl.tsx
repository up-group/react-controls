// Imports 
import * as React from "react";
import ValidationManager from "../Validation/ValidationManager"
import ErrorDisplay from "../Validation/ErrorDisplay"
// Importation des règles CSS de bases -> à transformer en styled-components
import "../../../../Common/theming/base.css"
import UpTooltip, { Tooltip } from '../../../Display/Tooltip';

// Exports
export interface InputBaseProps<_BaseType> {
    onChange?: (arg: _BaseType, event: any) => void;
    onError?: (hasError: boolean) => void;
    value?: _BaseType;
    defaultValue?: _BaseType;
    disabled?: boolean;
    readonly?: boolean;
    tooltip?: string | Tooltip;
}

export interface InputBaseState<_BaseType> {
    error?: string;
    value?: _BaseType;
}

export abstract class InputBaseComponent<_Props, _BaseType> extends React.Component<InputBaseProps<_BaseType> & _Props, InputBaseState<_BaseType>> {

    _validationManager: ValidationManager;

    constructor(props?: InputBaseProps<_BaseType> & _Props, context?) {
        super(props, context);
        this.state = { error: null, value: null };
        this._validationManager = new ValidationManager();
    }

    abstract onChange(args: any): _BaseType;
    abstract renderControl(): JSX.Element;

    public handleChangeEvent = (event) => {
        var cleanData = this.onChange(event);
        this.setState({
            value: cleanData
        });
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

    public hasError = (): boolean => {
        return this.state.error != null;
    }

    public setTooltip = (element) => {
        console.log(element);
    }

    public render() {
        if (this.props.tooltip) {
            var _tooltip: Tooltip;
            if (typeof this.props.tooltip === 'string' || this.props.tooltip instanceof String) {
                _tooltip = {
                    content: this.props.tooltip as string
                }
            } else {
                _tooltip = this.props.tooltip as Tooltip;
            }
            return (
                <ErrorDisplay error={this.state.error}>
                    <UpTooltip {..._tooltip}>
                        {this.renderControl()}
                    </UpTooltip>
                </ErrorDisplay>
            );
        } else {
            return (
                <ErrorDisplay error={this.state.error}>
                    {this.renderControl()}
                </ErrorDisplay>
            );
        }
    }


    private componentDidUpdate = (prevProps, prevState) => {
        var propsValue = (this.props as InputBaseProps<_BaseType>).value;
        var stateValue = this.state.value;
        if (propsValue != undefined && stateValue !== propsValue) {
            this.setState({ value: propsValue }, () => {
                this.dispatchOnChange(this.state.value);
            });
          
        }
    }
    //private componentWillReceiveProps(nextProps: (InputBaseProps<_BaseType> & _Props)) {
    //    var newValue = nextProps.value;
    //    var oldValue = this.state.value;
    //    if (newValue !== oldValue) {
    //        this.setState({ value: nextProps.value });
    //    }
    //}

    private dispatchOnChange = (data: _BaseType, event,errei) => {
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