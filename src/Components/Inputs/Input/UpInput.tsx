// Imports
import * as React from 'react'
import * as classnames from 'classnames'

import { BaseControlComponent } from '../_Common/BaseControl/BaseControl'
import { UpInputProps, Validation, UpInputStyledProps } from './types'
import TypeStringControl from '../_Common/Validation/TypeStringControl'
import defaultTheme from '../../../Common/theming'
import SvgIcon from '../../Display/SvgIcon';
import { IconName } from '../../../Common/theming/icons';
import withTheme, { WithThemeProps } from '../../../Common/theming/withTheme';
import { getStyles } from '../_Common/Styled/Input/styles';

const BaseInput: React.StatelessComponent<UpInputStyledProps & WithThemeProps> = (props) => {
    const {className, type, iconName, placeholder, disabled, readonly, maxLength, dataFor, onChange } = props;

    var icon:any = "" ;
    if(iconName) {
      icon = <SvgIcon iconName={iconName}
          width={20}
          height={20}
          color={props.color} /> ;
    }
    // Tooltip
    var tooltipProps = {};
    if(dataFor) {
      tooltipProps = {
        "data-tip" : "tooltip",
        "data-for" :  dataFor
      }
    }
    return (<div className={classnames(getStyles(props) ,className)}>
              <div className="up-input-group">
                <input value={props.value} onChange={onChange} className="up-input" type={type} placeholder={placeholder} dir="auto" disabled={disabled} readOnly={readonly} maxLength={maxLength} {...tooltipProps}/>
                {icon}
              </div>
            </div>);
}

// Exports
class UpInput extends BaseControlComponent<UpInputProps & WithThemeProps, any> {
    public static defaultProps: UpInputProps & WithThemeProps = {
        showError: true,
        //theme:defaultTheme,
        width: "fill"
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
        this.handleChangeEvent(event) ;
    }   

    renderControl() {
        const {type, onChange, value, validation, hasError, iconName, width, disabled, readonly, tooltip, maxLength, placeholder, theme, ...others } = this.props;
        var realIconName = iconName ;
        if(realIconName == null && type != null) {
            realIconName = type as IconName ;
        }

        return (
            <BaseInput
                value={this.state.value == null ? "" : this.state.value}
                iconName={realIconName}
                width={width}
                disabled={disabled}
                readonly={readonly}
                tooltip={tooltip}
                theme={theme}
                maxLength={maxLength}
                placeholder={placeholder}
                type={type || "text"}
                hasError={this.props.hasError || this.hasError()}
                showError={this.props.showError}
                onChange={this.inputHandleChangeEvent}>
                {this.props.children}
            </BaseInput>
        );
    }
}

export default withTheme<UpInputProps>(UpInput);
