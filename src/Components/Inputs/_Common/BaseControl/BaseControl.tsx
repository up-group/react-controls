// Imports
import * as React from "react";
import ValidationManager from "../Validation/ValidationManager";
import ErrorDisplay, { ErrorDisplayMode } from "../Validation/ErrorDisplay";
// Importation des règles CSS de bases -> à transformer en styled-components
import UpTooltip, { Tooltip } from "../../../Display/Tooltip";
import TypeNullControl from "../Validation/TypeNullControl";
import { isString } from "../../../../Common/utils";
import { WithThemeProps } from "../../../../Common/theming/withTheme";
import defaultTheme from "../../../../Common/theming";
import { eventFactory } from "../../../../Common/utils/eventListener";

import * as update from "react-addons-update";
import HelpMessageDisplay from "../Validation/HelpMessageDisplay";
import { string } from "prop-types";
import { isFunction } from "util";

// Exports
const ONCHANGE_MUST_BE_SPECIFIED =
  "La méthode onChange doit être spécifié dans le cas où la valeur du composant est défini dans les props";

type RenderHelp = (children: React.ReactNode) => JSX.Element;

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
  hasError?: boolean;
  showSuccess?: boolean;
  errorDisplayMode?: ErrorDisplayMode;
  error?: string;
  touched?: boolean;
  helpMessage?: string | RenderHelp;
  tabIndex?: number;
  onClear?: () => void;
  maxCharMsg?: string;
  maxCharMsgShowNumber?: number;
}
export interface BaseControlState<_BaseType> {
  error?: string;
  value?: _BaseType;
  extra?: any;
}
export abstract class BaseControlComponent<
  _Props,
  _BaseType
> extends React.Component<
  BaseControlProps<_BaseType> & _Props,
  BaseControlState<_BaseType>
> {
  _validationManager: ValidationManager;

  public static defaultProps: BaseControlProps<any> = {
    theme: defaultTheme,
    errorDisplayMode: "tooltip"
  };

  constructor(props?: BaseControlProps<_BaseType> & _Props, context?) {
    super(props, context);
    this.state = {
      error: null,
      value:
        this.props.value !== undefined
          ? (this.props.value as any)
          : this.props.defaultValue !== undefined
          ? (this.props.defaultValue as any)
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
  };

  get isControlled() {
    return this.props.value !== undefined;
  }

  get currentValue() {
    return this.isControlled ? this.props.value : this.state.value;
  }

  abstract renderControl(): JSX.Element;

  private checkAndDispatch = (
    event?: React.ChangeEvent<any>,
    value?: _BaseType
  ) => {
    const _value =
      value !== undefined
        ? value
        : event !== undefined
        ? event
        : this.state.value;
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
      this.setState(
        {
          value: cleanData,
          error: result != null && result.hasError ? result.errorMessage : null
        },
        () => {
          this.dispatchOnChange(
            this.state.value,
            cloneEvent,
            result != null && result.errorMessage
          );
        }
      );
    }
  };

  validateProps(nextProps) {
    if (nextProps.value !== undefined && nextProps.onChange === undefined) {
      throw new Error(ONCHANGE_MUST_BE_SPECIFIED);
    }
  }

  public handleChangeEvent = (
    event: React.ChangeEvent<any>,
    value?: _BaseType
  ) => {
    this.checkAndDispatch(event, value);
  };

  public handleClearEvent = () => {
    if (this.isControlled) {
      this.props.onClear()
    } else {
      this.setState({value: undefined})
    }
  }

  private checkData = (value?: any) => {
    return this._validationManager.isValidValue(value);
  };

  get hasError() {
    return this.props.hasError !== undefined
      ? this.props.hasError === true
      : this.error != null;
  }

  abstract showError();

  abstract showSuccess();

  get error() {
    return this.props.error !== undefined ? this.props.error : this.state.error;
  }

  onFocus = event => {
    event.persist();
    const handleOnFocus = event => {
      if (this.props["onFocus"]) this.props["onFocus"](event);
    };

    if (this.state.extra === undefined) {
      this.setState(
        { extra: { focused: true } },
        handleOnFocus.bind(null, event)
      );
    } else {
      this.setState(
        update(this.state, { extra: { focused: { $set: true } } }),
        handleOnFocus.bind(null, event)
      );
    }
  };

  onBlur = event => {
    event.persist();
    const handleOnBlur = event => {
      if (this.props["onBlur"]) this.props["onBlur"](event);
    };

    if (this.state.extra === undefined) {
      this.setState(
        { extra: { focused: false, touched: true } },
        handleOnBlur.bind(null, event)
      );
    } else {
      this.setState(
        update(this.state, {
          extra: {
            focused: { $set: false },
            touched: { $set: true }
          }
        }),
        handleOnBlur.bind(null, event)
      );
    }
  };

  get isFocused() {
    return this.state.extra ? this.state.extra.focused === true : false;
  }

  get isTouched() {
    return this.state.extra ? this.state.extra.touched === true : false;
  }

  public render() {
    var _tooltip: Tooltip = null;
    if (this.props.tooltip) {
      if (isString(this.props.tooltip)) {
        _tooltip = {
          content: this.props.tooltip as string
        };
      } else {
        _tooltip = this.props.tooltip as Tooltip;
      }
    }
    const RenderControl = this.renderControl();

    var content = null;
    if (this.props.helpMessage == null) {
      content = (
        <ErrorDisplay
          theme={this.props.theme}
          displayMode={this.props.errorDisplayMode}
          showError={this.showError()}
          hasError={this.hasError}
          error={this.error}
        >
          {_tooltip === null ? (
            RenderControl
          ) : (
            <UpTooltip {..._tooltip}>{RenderControl}</UpTooltip>
          )}
        </ErrorDisplay>
      );
    } else if (
      this.props.helpMessage != null &&
      typeof this.props.helpMessage === "string"
    ) {
      content = (
        <HelpMessageDisplay
          theme={this.props.theme}
          helpMessageText={this.props.helpMessage}
        >
          {RenderControl}
        </HelpMessageDisplay>
      );
    } else if (
      this.props.helpMessage != null &&
      isFunction(this.props.helpMessage)
    ) {
      var temp = (this.props.helpMessage as RenderHelp)(RenderControl);
      if (React.isValidElement(temp)) {
        content = temp;
      }
    }

    return content;
  }

  public dispatchOnChange = (
    data: _BaseType,
    event: React.ChangeEvent<any>,
    error: string
  ) => {
    if (this.props.onChange !== undefined && event != null) {
      this.props.onChange(event, data, error);
    }
  };  
}
