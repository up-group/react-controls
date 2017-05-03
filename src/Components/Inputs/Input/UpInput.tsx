// Imports
import * as React from 'react'
import { InputStyled } from './styles'
import { InputBaseComponent } from '../_Common/BaseControl/BaseControl'
import { UpInputProps, Validation } from './'
import TypeStringControl from '../_Common/Validation/TypeStringControl'

// EXports
export default class UpInput extends InputBaseComponent<UpInputProps, any> {
    public static defaultProps = {
        showError: true
    };

    constructor(p, c) {
        super(p, c);
        this.state = {
            value: p.value
        }
        var _self = this;
        if (this.props.validation && this.props.validation.length > 0) {
            this.props.validation.map(function (value: Validation, index: number) {
                if (value && value.pattern) {
                    _self._validationManager.addControl(new TypeStringControl(value.pattern, value.errorMessage));
                }
            });
        }
    }

    onChange(event: any) {
        return event.target.value;
    }

    renderControl() {
        const {type, onChange, value, validation, hasError, ...others } = this.props;
        return (
            <InputStyled
                value={this.state.value}
                type={type || "text"}
                hasError={this.props.hasError || this.hasError()}
                showError={this.props.showError}
                onChange={this.handleChangeEvent}>
                {this.props.children}
            </InputStyled>
        );
    }
}
