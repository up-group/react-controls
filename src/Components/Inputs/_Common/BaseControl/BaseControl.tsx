// Imports 
import * as React from "react";
import ValidationManager from "../Validation/ValidationManager"
import ErrorDisplay from "../Validation/ErrorDisplay"
// Importation des règles CSS de bases -> à transformer en styled-components
import UpTooltip, { Tooltip } from '../../../Display/Tooltip'
import TypeNullControl from "../Validation/TypeNullControl"
import { isString } from '../../../../Common/utils'
import { WithThemeProps } from "../../../../Common/theming/withTheme";
import defaultTheme from "../../../../Common/theming";

// Exports
const ONCHANGE_MUST_BE_SPECIFIED = "La méthode onChange doit être spécifié dans le cas où la valeur du composant est défini dans les props";
export interface BaseControlProps<_BaseType> extends WithThemeProps {
    name?: string;
    onChange?: (event: React.ChangeEvent<any>, arg: _BaseType, error: boolean) => void;
    value?: _BaseType;
    defaultValue?: _BaseType;
    disabled?: boolean;
    readonly?: boolean;
    tooltip?: string | Tooltip;
    isRequired?: boolean;
    showError?: boolean;
    error?: string;
    touched?: boolean;
}
export interface BaseControlState<_BaseType> {
    error?: string;
    value?: _BaseType;
    extra?: any;
}
export abstract class BaseControlComponent<_Props, _BaseType> extends React.Component<BaseControlProps<_BaseType> & _Props, BaseControlState<_BaseType>> {

    _validationManager: ValidationManager;

    public static defaultProps: WithThemeProps = {
        theme: defaultTheme,
    }

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

    private checkAndDispatch = (event?: React.ChangeEvent<any>, value?: _BaseType) => {
        const _value = (value !== undefined) ? value : (event !== undefined) ? event : this.state.value;
        const cleanData: _BaseType = this.getValue(_value);
        if (this._validationManager !== undefined) {
            const result = this.checkData(cleanData);
            if(result != null) {
                this.setState({ value: cleanData, error : result.hasError ? result.errorMessage : null }, () => { this.dispatchOnChange(this.state.value, event, result.hasError) });
            } else {
                this.setState({ value: cleanData }, () => { this.dispatchOnChange(this.state.value, event, null) });
            }
        } else {
            this.setState({ value: cleanData }, () => { this.dispatchOnChange(this.state.value, event, null); });
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
            this.setState({ value: value, error: nextProps.error }, this.checkAndDispatch);
        } else if(this.props.error != nextProps.error) {
            this.setState({ error: nextProps.error });
        }
    }

    public handleChangeEvent = (event: React.ChangeEvent<any>, value?: _BaseType) => {
        this.checkAndDispatch(event, value);
    }

    private checkData = (value?: any) => {
        return this._validationManager.isValidValue(value);
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
        const RenderControl = this.renderControl() ;
        return (
        <ErrorDisplay showError={this.props.showError} hasError={this.hasError()} error={this.state.error}>
        {_tooltip === null ?
            RenderControl
            :
            <UpTooltip {..._tooltip}>
                {RenderControl}
            </UpTooltip>
        }
        </ErrorDisplay>
        );
    }

    public dispatchOnChange = (data: _BaseType, event: React.ChangeEvent<any>, error: boolean) => {
        if (this.props.onChange !== undefined && event != null) {
            this.props.onChange(event, data, error);
        }
    }
}
