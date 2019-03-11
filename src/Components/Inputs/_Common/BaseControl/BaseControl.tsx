// Imports 
import * as React from "react";
import ValidationManager from "../Validation/ValidationManager"
import ErrorDisplay, { ErrorDisplayMode } from "../Validation/ErrorDisplay"
// Importation des règles CSS de bases -> à transformer en styled-components
import UpTooltip, { Tooltip } from '../../../Display/Tooltip'
import TypeNullControl from "../Validation/TypeNullControl"
import { isString } from '../../../../Common/utils'
import { WithThemeProps } from "../../../../Common/theming/withTheme";
import defaultTheme from "../../../../Common/theming";
import { eventFactory } from "../../../../Common/utils/eventListener";

// Exports
const ONCHANGE_MUST_BE_SPECIFIED = "La méthode onChange doit être spécifié dans le cas où la valeur du composant est défini dans les props";
export interface BaseControlProps<_BaseType> extends WithThemeProps {
  name?: string;
  onChange?: (
    event: React.ChangeEvent<any>,
    arg: _BaseType,
    error: string
  ) => void;
  value?: _BaseType;
  defaultValue?: _BaseType;
  disabled?: boolean;
  readonly?: boolean;
  tooltip?: string | Tooltip;
  isRequired?: boolean;
  showError?: boolean;
  showSuccess?: boolean;
  errorDisplayMode?: ErrorDisplayMode;
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

    public static defaultProps: BaseControlProps<any> = {
        theme: defaultTheme,
        errorDisplayMode: 'tooltip',
    }

    constructor(props?: BaseControlProps<_BaseType> & _Props, context?) {
        super(props, context);
        this.state = {
            error: null,
            value: this.props.value !== undefined ? this.props.value as any :
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
        return receiveValue;
    }

    get isControlled() {
        return this.props.value !== undefined;
    }

    get currentValue() {
        return this.isControlled ? this.props.value : this.state.value;
    }

    abstract renderControl(): JSX.Element;

    private checkAndDispatch = (event?: React.ChangeEvent<any>, value?: _BaseType) => {
        const _value = (value !== undefined) ? value : (event !== undefined) ? event : this.state.value;
        const cleanData: _BaseType = this.getValue(_value);
        let cloneEvent = event;
        if (event) {
            cloneEvent = eventFactory(event.target.name, cleanData);
        }
        let result = null;
        if (this._validationManager !== undefined) {
            result = this.checkData(cleanData);
        }

        if (this.isControlled) {
            this.dispatchOnChange(
              cleanData,
              cloneEvent,
              result ? result.errorMessage : null
            );
        } else {
            this.setState({ value: cleanData, error: result != null && result.hasError ? result.errorMessage : null }, () => {
                this.dispatchOnChange(
                    this
                        .state
                        .value,
                    cloneEvent,
                    result !=
                    null &&
                    result.errorMessage
                );
            });
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
        if (this.props.error != nextProps.error) {
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
        const RenderControl = this.renderControl();
        return (
            <ErrorDisplay theme={this.props.theme} displayMode={this.props.errorDisplayMode} showError={this.props.showError} hasError={this.hasError()} error={this.state.error}>
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

    public dispatchOnChange = (data: _BaseType, event: React.ChangeEvent<any>, error: string) => {
        if (this.props.onChange !== undefined && event != null) {
            this.props.onChange(event, data, error);
        }
    }
}
