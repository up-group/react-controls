// Imports
import * as React from 'react'
import * as classnames from 'classnames'

import { BaseControlComponent } from '../_Common/BaseControl/BaseControl'
import { UpInputProps, Validation, UpInputStyledProps } from './types'
import TypeStringControl from '../_Common/Validation/TypeStringControl'
import SvgIcon from '../../Display/SvgIcon';
import { IconName, IconNames } from '../../../Common/theming/icons';
import withTheme, { WithThemeProps } from '../../../Common/theming/withTheme';
import { getStyles } from '../_Common/Styled/Input/styles';
import defaultTheme from '../../../Common/theming/';
import { generateId, isEmpty } from '../../../Common/utils';

const BaseInput: React.StatelessComponent<UpInputStyledProps & WithThemeProps> = (props: UpInputStyledProps & WithThemeProps) => {
    const { name, autocomplete, className, type, iconPosition, placeholder, disabled, readonly, maxLength, dataFor, onChange, onFocus, onBlur, autoFocus } = props;
    let iconName = props.iconName ;
    let icon: any = null;
    let size = 20 ;
    if (props.hasError && props.showError) {
        iconName = "close";
        size = 8 ;
    } else if (!props.hasError && !isEmpty(props.value) && props.showSuccess) {
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

    // Tooltip
    var tooltipProps = {};
    if (dataFor) {
        tooltipProps = {
            "data-tip": "tooltip",
            "data-for": dataFor
        }
    }

    const id = props.id || generateId() ;

    return (
      <div className={classnames(getStyles(props), className)}>
        <div
          className={classnames(
            "up-input-group",
            props.focused === true ? "up-input-focused" : null,
            props.value != null && props.value != ""
              ? "up-input-valued"
              : null
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
            value={props.value}
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
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
          {iconPosition === "right" &&
            iconName &&
            icon
          }
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
        event.persist();
        this.handleChangeEvent(event, undefined);
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

    renderControl() {
      const { id, name, autocomplete, touched, type, onChange, value, validation, errorDisplayMode, hasError, iconName, iconPosition, width, disabled, readonly, tooltip, maxLength, placeholder, floatingLabel, theme, ...others } = this.props;
        var realIconName = iconName;
        if (realIconName == null && type != null && IconNames.indexOf(type as IconName) != -1) {
            realIconName = type as IconName;
        }

        return (
          <BaseInput
            name={name}
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
            onBlur={this.onBlur}
            autoFocus={this.props.autoFocus}
          >
            {this.props.children}
          </BaseInput>
        );
    }
}

export default withTheme<UpInputProps>(UpInput);
