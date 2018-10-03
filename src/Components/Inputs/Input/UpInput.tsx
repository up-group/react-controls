// Imports
import * as React from 'react'
import { InputStyled } from './styles'
import { BaseControlComponent } from '../_Common/BaseControl/BaseControl'
import { UpInputProps, Validation } from './'
import TypeStringControl from '../_Common/Validation/TypeStringControl'
import defaultTheme from '../../../Common/theming'
import {IconName} from '../../Display/SvgIcon/icons'

// EXports
export default class UpInput extends BaseControlComponent<UpInputProps, any> {
    public static defaultProps: UpInputProps = {
        showError: true,
        theme:defaultTheme,
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
        const {type, onChange, value, validation, hasError, iconName, width, disabled, readonly, tooltip, theme, maxLength, placeholder, ...others } = this.props;
        var realIconName = iconName ;
        if(realIconName == null && type != null) {
            realIconName = type as IconName ;
        }

        return (
            <InputStyled
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
            </InputStyled>
        );
    }
}
