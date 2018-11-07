// Imports
import * as React from 'react'
import * as classnames from 'classnames'

import * as update from 'react-addons-update'

import { BaseControlComponent } from '../_Common/BaseControl/BaseControl'
import { UpInputProps, Validation, UpInputStyledProps } from './types'
import TypeStringControl from '../_Common/Validation/TypeStringControl'
import SvgIcon from '../../Display/SvgIcon';
import { IconName } from '../../../Common/theming/icons';
import withTheme, { WithThemeProps } from '../../../Common/theming/withTheme';
import { getStyles } from '../_Common/Styled/Input/styles';

const BaseInput: React.StatelessComponent<UpInputStyledProps & WithThemeProps> = (props: UpInputStyledProps & WithThemeProps) => {
    const {className, type, iconName, iconPosition, placeholder, disabled, readonly, maxLength, dataFor, onChange, onFocus, onBlur } = props;

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
              <div className={classnames("up-input-group", props.focused === true ? 'up-input-focused' : null)}>
                {iconPosition === 'left' &&
                    icon
                }
                <input value={props.value} onChange={onChange} onFocus={onFocus} onBlur={onBlur} className="up-input" type={type} placeholder={placeholder} dir="auto" disabled={disabled} readOnly={readonly} maxLength={maxLength} {...tooltipProps}/>
                {iconPosition === 'right' &&
                    icon
                }
              </div>
            </div>);
}

// Exports
class UpInput extends BaseControlComponent<UpInputProps & WithThemeProps, any> {
    
    public static defaultProps: UpInputProps & WithThemeProps = {
        showError: true,
        //theme:defaultTheme,
        width: "fill",
        iconPosition : 'left',
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

    onFocus = (e) => {
        if(this.state.extra === undefined) {
            this.setState({ extra : { focused : true}});
        } else {
            this.setState(update(this.state, { extra : { focused : { $set : true}}}));
        }
        if(this.props.onFocus)
            this.props.onFocus(e) ;
    }

    onBlur = (e) =>  {
        if(this.state.extra === undefined) {
            this.setState({ extra : { focused : false}});
        } else {
            this.setState(update(this.state, { extra : { focused : { $set : false}}}))
        }
        if(this.props.onBlur)
            this.props.onBlur(e) ;
    }

    get isFocused() {
        return this.state.extra ? this.state.extra.focused === true : false ;
    }

    renderControl() {
        const {type, onChange, value, validation, hasError, iconName, iconPosition, width, disabled, readonly, tooltip, maxLength, placeholder, theme, ...others } = this.props;
        var realIconName = iconName ;
        if(realIconName == null && type != null) {
            realIconName = type as IconName ;
        }

        return (
            <BaseInput
                value={this.state.value == null ? "" : this.state.value}
                iconName={realIconName}
                iconPosition={iconPosition}
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
                onFocus={this.onFocus}
                onBlur={this.onBlur}
                focused={this.isFocused}
                onChange={this.inputHandleChangeEvent}>
                {this.props.children}
            </BaseInput>
        );
    }
}

export default withTheme<UpInputProps>(UpInput);
