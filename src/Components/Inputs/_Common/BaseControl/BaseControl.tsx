// Imports 
import * as React from "react";
import ValidationManager from "../Validation/ValidationManager"
import ErrorDisplay from "../Validation/ErrorDisplay"
// Importation des règles CSS de bases -> à transformer en styled-components
import UpTooltip, { Tooltip } from '../../../Display/Tooltip'
import TypeNullControl from "../Validation/TypeNullControl"
import { isString } from '../../../../Common/utils'

// Exports
const ONCHANGE_MUST_BE_SPECIFIED = "La méthode onChange doit être spécifié dans le cas où la valeur du composant est défini dans les props";

export interface BaseControlProps<_BaseType> {
    onChange?: (arg: _BaseType, event: any, error: boolean) => void;
    value?: _BaseType;
    defaultValue?: _BaseType;
    disabled?: boolean;
    readonly?: boolean;
    tooltip?: string | Tooltip;
    isRequired?: boolean;
    showError?: boolean;
}

export interface BaseControlState<_BaseType> {
    error?: string;
    value?: _BaseType;
    extra?: any;
}

export abstract class BaseControlComponent<_Props, _BaseType> extends React.Component<BaseControlProps<_BaseType> & _Props, BaseControlState<_BaseType>> {

    _validationManager: ValidationManager;

    constructor(props?: BaseControlProps<_BaseType> & _Props, context?) {
        super(props, context);
        this.state = {
            error: null,
            value: this.props.value !== undefined ? this.props.value as any  :
                this.props.defaultValue !== undefined ? this.props.defaultValue as any
                    : null
        };

        this.initWithProps();
        this.registerValidations();
    }

    private initWithProps() {
        if (this.props.value !== undefined)
            this.state = { value: this.props.value as any };
    }

    protected registerValidations() {
        this._validationManager = new ValidationManager();
        if (this.props.isRequired) {
            this._validationManager.addControl(new TypeNullControl());
        }
    }

    abstract getValue(args: any): _BaseType;

    protected setValue = (receiveValue: any): _BaseType => {
        return receiveValue ;
    }

    abstract renderControl(): JSX.Element;

    private checkAndDispatch = (value?: any) => {
        var _value = (value !== undefined) ? value : this.state.value;
        var cleanData: _BaseType = this.getValue(_value);
        if (this._validationManager !== undefined) {
            var hasError = this.checkData(cleanData);
            this.setState({ value: cleanData }, () => { this.dispatchOnChange(this.state.value, null, hasError) });
        } else {
            this.setState({ value: cleanData }, () => { this.dispatchOnChange(this.state.value, null, null); });
        }
    }

    private equal = (v1, v2) => {
        if (v1 === v2) {
            return v1 !== 0 || 1 / v1 === 1 / v2;
        } else {
            return v1 !== v1 && v2 !== v2;
        }
    }

    validateProps(nextProps) {
        if (nextProps.value !== undefined && nextProps.onChange === undefined) {
            throw new Error(ONCHANGE_MUST_BE_SPECIFIED);
        }
    }

    public componentWillReceiveProps(nextProps) {
        var newValue = nextProps.value;
        var oldValue = this.state.value;
        if (newValue !== undefined && !this.equal(newValue, oldValue)) {
            // Handle specific conversion between the value receive from props and the inner state
            var value = this.setValue(nextProps.value);
            // Reset the error : if one it will be set in the checkData
            this.setState({ value: value, error: null }, this.checkAndDispatch);
        }
    }

    public handleChangeEvent = (event) => {
        this.checkAndDispatch(event);
    }

    private checkData = (value?: any) => {
        var result = this._validationManager.isValidValue(value || this.state.value);
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
            if (isString(this.props.tooltip)) {
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

    componentDidMount() {
        this.checkAndDispatch();
    }

    public dispatchOnChange = (data: _BaseType, event, error: boolean) => {
        if (this.props.onChange !== undefined) {
            this.props.onChange(data, event, error);
        }
    }
}