// Imports
import * as React from 'react'
import { UpInputProps } from '../Input/'
import { BaseControlComponent } from '../_Common/BaseControl/BaseControl'
import { FilterProps } from '../../../Common/utils/types'
import { UpNumberProps, UpNumberStyledProps } from './'
import TypeNumberControl from '../_Common/Validation/TypeNumberControl'

import { NumericInput } from '@blueprintjs/core'

// Exports
export default class UpNumber extends BaseControlComponent<UpNumberProps, number | string> {
    public static defaultProps = {
        decimalPlace: 2,
        showError: true,
        max: Infinity,
        min: -Infinity
    };

    constructor(p, c) {
        super(p, c);
        this.state = {
            value: p.value
        }
        this._validationManager.addControl(new TypeNumberControl(this.props.decimalPlace === 0, this.props.min, this.props.max));
    }

    round = (value, decimals) => {
        decimals = Math.abs(parseInt(decimals)) || 0;
        var multiplier = Math.pow(10, decimals);
        return Math.round(value * multiplier) / multiplier;
    }

    handleNumericChange = (valueAsNumber: number, valueAsString: string) => {
        if (this.props.decimalPlace != null) {
            var _newValue = this.round(valueAsNumber, this.props.decimalPlace);
            if (isNaN(valueAsNumber)) {
                this.handleChangeEvent(this.state.value);
            } else if (_newValue === valueAsNumber && _newValue.toString() !== valueAsString) {
                this.handleChangeEvent(valueAsString);
            } else {
                this.handleChangeEvent(valueAsNumber);
            }
        } else {
            this.handleChangeEvent(valueAsNumber);

        }
    }

    getValue(value) {
        return value;
    }

    renderControl() {
        const {isRequired, onChange, readonly, decimalPlace, stepSize, value, tooltip} = this.props;

        return (
            <NumericInput
                
                value={this.state.value}
                stepSize={stepSize}
                majorStepSize={stepSize ? stepSize + 10 : 10}
                onValueChange={this.handleNumericChange}
                minorStepSize={1 / (Math.pow(10, this.props.decimalPlace))}>
            </NumericInput>
        );
    }
}
