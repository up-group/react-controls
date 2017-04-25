// Imports
import * as React from 'react'
import { InputStyled } from './styles'
import { InputBaseComponent } from '../_Common/BaseControl/BaseControl'
import { UpInputProps, Validation } from './'
import TypeStringControl from '../_Common/Validation/TypeStringControl'

// EXports
export default class UpInput extends InputBaseComponent<UpInputProps, any> {
    public static defaultProps: UpInputProps = {
    };

    constructor(p, c) {
        super(p, c);
        this.state = {
            value:p.value
        }
        var _self = this ;
        if(this.props.validation && this.props.validation.length>0) {
            this.props.validation.map(function(value:Validation, index:number) {
                if(value && value.pattern) {
                    _self._validationManager.addControl(new TypeStringControl(value.pattern, value.errorMessage));
                }
            }) ;
        }
    }

    onChange(event: any) {
        return event.target.value;
    }

    componentWillReceiveProps(nextProps: UpInputProps) {
        if (nextProps.value !== this.props.value) {
            this.setState({value: nextProps.value });
        }
    }

    renderControl() {
        const {type, onChange, onError, value, validation, hasError, ...others } = this.props;
        return (
            <InputStyled
                value={this.state.value}
                type={type || "text"}
                hasError={this.hasError()}
                {...others}
                onChange={this.handleChangeEvent}>
                {this.props.children}
            </InputStyled>
        );
    }
}
