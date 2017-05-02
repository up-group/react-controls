// Imports
import * as React from 'react'
import { UpInputProps } from '../Input/'
import { InputBaseComponent } from '../_Common/BaseControl/BaseControl'
import { FilterProps } from '../../../Common/utils/types'
import { UpNumberProps, UpNumberStyledProps } from './'
import UpNumberStyled from './styles'

// Exports
export default class UpNumber extends InputBaseComponent<UpNumberProps, number|string> {
    public static defaultProps: UpNumberProps = {
        decimalPlace:2
    };

    constructor(p, c) {
        super(p, c);
        this.state = {
            value: p.value
        }
    }

    round = (value, decimals) => {
        decimals = Math.abs(parseInt(decimals)) || 0;
        var multiplier = Math.pow(10, decimals);
        return Math.round(value * multiplier) / multiplier;
    }

    handleNumericChange = (valueAsNumber: number, valueAsString:string)  => {
        var _value = valueAsNumber;
        var _newState:any = {
            value : (this.props.decimalPlace===0)?valueAsNumber:valueAsString
        }
        if (this.props.decimalPlace) {
            var _newValue = this.round(_value, this.props.decimalPlace);
            if (_newValue !== _value) {
                _newState = { 
                    value: _newValue
                };
                _value = _newValue;
            }
        }
        this.setState(_newState);
        this.handleChangeEvent(_value) ;
    }

    onChange(value) {
        return value;
    }

    componentWillReceiveProps(nextProps: UpNumberProps) {
        if (nextProps.value !== this.props.value) {
            this.setState({ value: nextProps.value });
        }
    }

    renderControl() {
        const { onChange, onError, readonly, decimalPlace, isNullable, stepSize, value, tooltip, ...others } = this.props ;
        
        return (
            <UpNumberStyled
                {...others}
                value={this.state.value}
                stepSize={stepSize}
                handleNumericChange={this.handleNumericChange}>
            </UpNumberStyled>
        );
    }
}
