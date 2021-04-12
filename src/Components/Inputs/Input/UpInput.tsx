// Imports
import * as React from 'react'
import classnames from 'classnames'

import { BaseControlComponent } from '../_Common/BaseControl/BaseControl'
import { UpInputProps, Validation, UpInputStyledProps } from './types'
import TypeStringControl from '../_Common/Validation/TypeStringControl'
import SvgIcon from '../../Display/SvgIcon';
import { IconName, IconNames } from '../../../Common/theming/icons';
import withTheme, { WithThemeProps } from '../../../Common/theming/withTheme';
import { getStyles } from '../_Common/Styled/Input/styles';
import defaultTheme from '../../../Common/theming/';
import { generateId, isEmpty, shallowEqual } from '../../../Common/utils';
import UpLoadingIndicator from '../../Display/LoadingIndicator'

const BaseInput: React.StatelessComponent<UpInputStyledProps & WithThemeProps & UpInputProps> = (props: UpInputStyledProps & WithThemeProps & UpInputProps) => {

  const {
    name,
    autocomplete,
    className,
    type,
    iconPosition,
    placeholder,
    disabled,
    readonly,
    maxLength,
    dataFor,
    onChange,
    onFocus,
    onBlur,
    autoFocus,
    hasClearOption,
    onClear,
    value,
    isLoading,
    showValidationStatus
  } = props;

  let iconName = props.iconName;
  let icon: any = null;
  let RightIcon: any = null;
  let size = 20;
  const showClearIcon = hasClearOption && !!value && (type === 'search' || props.focused)

  if (props.hasError && props.showError && type !== 'search' && showValidationStatus) {
    iconName = "close";
    size = 8;
  } else if (!props.hasError && !isEmpty(value) && props.showSuccess && type !== 'search' && showValidationStatus) {
    iconName = "checkmark";
    size = 8;
  }

  if (iconName) {
    icon = (
      <SvgIcon
        iconName={iconName}
        width={size}
        height={size}
        color={props.color}
      />
    );
  }

  if (showClearIcon) {
    RightIcon = <SvgIcon
      iconName='clear'
      width={size}
      height={size}
      className={'clear-icon'}
      onClick={onClear}
    />
  }

  if(hasClearOption && !!value && isLoading) {
    RightIcon= <UpLoadingIndicator isLoading={isLoading} loaderSize={30}  ></UpLoadingIndicator>
  }

  // Tooltip
  var tooltipProps = {};
  if (dataFor) {
    tooltipProps = {
      "data-tip": "tooltip",
      "data-for": dataFor
    }
  }

  const id = props.id || generateId();

  return (
    <div className={classnames(getStyles(props), className)}>
      <div
        className={classnames(
          "up-input-group",
          {
            'up-input-focused': props.focused && type !== 'search',
            'up-input-valued': value != null && value != "" && type !== 'search',
            'up-input-search': type === 'search',
          },
        )}
      >
        {iconPosition === "left" && iconName && icon}
        {iconPosition === "left" && props.floatingLabel && (
          <label htmlFor={id}>{props.floatingLabel}</label>
        )}
        <input
          id={id}
          autoComplete={autocomplete}
          name={name}
          value={value}
          onChange={onChange}
          onFocus={onFocus}
          onBlur={(event) => {
              event.persist()
              setTimeout(onBlur.bind(this, event), 100)
            }
          }
          className="up-input"
          type={type}
          placeholder={props.floatingLabel ? "" : placeholder}
          dir="auto"
          disabled={disabled}
          readOnly={readonly}
          maxLength={maxLength}
          {...tooltipProps}
          autoFocus={autoFocus}
        />
        {iconPosition === "right" && props.floatingLabel && (
          <label htmlFor={id}>{props.floatingLabel}</label>
        )}
        {iconPosition === "right" && !readonly &&
          iconName &&
          icon
        }
        {RightIcon}
      </div>
    </div>
  );
}

// Exports
class UpInput extends BaseControlComponent<UpInputProps, any> {

  public static defaultProps: UpInputProps = {
    theme: defaultTheme,
    width: "fill",
    iconPosition: 'right',
    hasClearOption: false,
    showValidationStatus: true,
  };

  constructor(p, c) {
    super(p, c);
    var _self = this;
    if (this.props.validation && this.props.validation.length > 0) {
      this.props.validation.map(function (value: Validation, index: number) {
        if (value && value.pattern) {
          _self._validationManager.addControl(new TypeStringControl(value.pattern, value.errorMessage));
        }
      });
    }
  }

  getValue(event: any) {
    return (event == null) ? null :
      event.target != null ? event.target.value
        : event
  }

  inputHandleChangeEvent = (event) => {
    event.persist()
    this.handleChangeEvent(event, undefined);
  }

  clearValue = () => {
    this.handleClearEvent()
  }

  public showError() {
    return this.props.showError !== undefined
      ? this.props.showError
      : this.hasError && !this.isFocused && this.isTouched;
  }

  showSuccess() {
    return this.props.showSuccess !== undefined
      ? this.props.showSuccess
      : !this.hasError && !this.isFocused && this.isTouched && !isEmpty(this.currentValue);
  }

  shouldComponentUpdate(nextProps, nextState) {
    const shouldUpdate = this.props.value !== nextProps.value
      || this.props.error !== nextProps.error
      || this.props.errorDisplayMode !== nextProps.errorDisplayMode
      || this.props.floatingLabel !== nextProps.floatingLabel
      || this.props.iconName !== nextProps.iconName
      || this.props.iconPosition !== nextProps.iconPosition
      || this.props.isRequired !== nextProps.isRequired
      || this.props.placeholder !== nextProps.placeholder
      || this.props.readonly !== nextProps.readonly
      || this.props.disabled !== nextProps.disabled
      || this.props.rounded !== nextProps.rounded
      || this.props.showError !== nextProps.showError
      || this.props.showSuccess !== nextProps.showSuccess
      || this.props.touched !== nextProps.touched
      || this.props.tooltip !== nextProps.tooltip
      || this.props.hasError !== nextProps.hasError
      || this.props.maxLength !== nextProps.maxLength
      || this.props.name !== nextProps.name
      || this.props.theme !== nextProps.theme
      || this.props.type !== nextProps.type
      || this.state.error !== nextState.error
      || this.state.value !== nextState.value
      || this.props.isLoading !== nextProps.isLoading
      || !shallowEqual(this.state.extra, nextState.extra);

    return shouldUpdate;
  }

  renderControl() {
    const { id, name, autocomplete, touched, hasClearOption, type, onChange, value, validation, errorDisplayMode, hasError, iconName, iconPosition, width, disabled, readonly, tooltip, maxLength, placeholder, floatingLabel, theme, ...others } = this.props;
    var realIconName = iconName;
    if (realIconName == null && type != null && IconNames.indexOf(type as IconName) != -1) {
      realIconName = type as IconName;
    }

    return (
      <BaseInput
        name={name}
        hasClearOption={hasClearOption}
        id={id}
        rounded={this.props.rounded}
        value={this.currentValue == null ? "" : this.currentValue}
        iconName={realIconName}
        iconPosition={iconPosition}
        width={width}
        autocomplete={autocomplete}
        disabled={disabled}
        readonly={readonly}
        tooltip={tooltip}
        theme={theme}
        maxLength={maxLength}
        placeholder={placeholder}
        floatingLabel={floatingLabel}
        type={type || "text"}
        hasError={this.hasError}
        showError={this.showError()}
        showSuccess={this.showSuccess()}
        onFocus={this.onFocus}
        focused={this.isFocused}
        touched={touched}
        onChange={this.inputHandleChangeEvent}
        onBlur={e => setTimeout(this.onBlur.bind(null, e), 200)}
        autoFocus={this.props.autoFocus}
        onClear={this.clearValue}
        isLoading={this.props.isLoading}
        className={this.props.className}
        showValidationStatus={this.props.showValidationStatus}
      >
        {this.props.children}
      </BaseInput>
    );
  }
}

export default withTheme<UpInputProps>(UpInput);
