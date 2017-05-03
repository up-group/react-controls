// Imports 
import * as React from "react";
import ValidationManager from "../Validation/ValidationManager"
import ErrorDisplay from "../Validation/ErrorDisplay"
// Importation des règles CSS de bases -> à transformer en styled-components
import "../../../../Common/theming/base.css"
import UpTooltip, { Tooltip } from '../../../Display/Tooltip';
import TypeNullControl from "../Validation/TypeNullControl"

// Exports
export interface InputBaseProps<_BaseType> {
    onChange?: (arg: _BaseType, event: any, error: boolean) => void;
    value?: _BaseType;
    defaultValue?: _BaseType;
    disabled?: boolean;
    readonly?: boolean;
    tooltip?: string | Tooltip;
    isRequired?: boolean;
    showError?: boolean;
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

        this.initWithProps();
    }


    protected initWithProps() {
        this._validationManager = new ValidationManager();
        if (this.props.isRequired) {
            this._validationManager.addControl(new TypeNullControl());
        }
    }

    abstract onChange(args: any): _BaseType;
    abstract renderControl(): JSX.Element;

    public handleChangeEvent = (event) => {
        var cleanData = this.onChange(event);
        this.setState({ value: cleanData }, this.checkAndDispatch);
    }

    private checkData = () => {
        var result = this._validationManager.isValidValue(this.state.value);
        if (result.hasError) {
            this.setState({ error: result.errorMessage });
        } else {
            this.setState({ error: null });
        }
        return result.hasError;
    }

    public hasError = (): boolean => {
        return this.state.error != null;
    }

    public render() {
        var _tooltip: Tooltip = null;
        if (this.props.tooltip) {
            if (typeof this.props.tooltip === 'string' || this.props.tooltip instanceof String) {
                _tooltip = {
                    content: this.props.tooltip as string
                }
            } else {
                _tooltip = this.props.tooltip as Tooltip;
            }
        }
        return (<ErrorDisplay showError={this.props.showError} hasError={this.hasError()} error={this.state.error}>
            {_tooltip === null ?
                this.renderControl()
                :
                <UpTooltip {..._tooltip}>
                    {this.renderControl()}
                </UpTooltip>}
        </ErrorDisplay>
        );

    }

    public componentDidMount() {
        this.checkAndDispatch();
    }

    private componentDidUpdate = (prevProps, prevState) => {
        var propsValue = (this.props as InputBaseProps<_BaseType>).value;
        var stateValue = this.state.value;
        if (propsValue !== undefined && this.equal(propsValue, stateValue) === false) {
            this.setState({ value: propsValue }, this.checkAndDispatch);

        }
    }

    private checkAndDispatch = () => {
        if (this._validationManager !== undefined) {
            var hasError = this.checkData();
            this.dispatchOnChange(this.state.value, event, hasError);
        } else {
            this.dispatchOnChange(this.state.value, event, null);
        }
    }

    private equal = (v1, v2) => {
        if (v1 === v2) {
            return v1 !== 0 || 1 / v1 === 1 / v2;
        } else {
            return v1 !== v1 && v2 !== v2;
        }
    }

    //private componentWillReceiveProps(nextProps: (InputBaseProps<_BaseType> & _Props)) {
    //    var newValue = nextProps.value;
    //    var oldValue = this.state.value;
    //    if (newValue !== oldValue) {
    //        this.setState({ value: nextProps.value });
    //    }
    //}

    public dispatchOnChange = (data: _BaseType, event, error: boolean) => {
        if (this.props.onChange !== undefined) {
            this.props.onChange(data, event, error);
        }
    }

}