// Imports
import * as React from 'react'
import { InputBaseComponent } from '../_Common/BaseControl/BaseControl'
import { NumericInput } from '@blueprintjs/core'
import { UpIntegerProps } from './'
import UpNumber from '../Number'

// Exports
const MIN_VALUE_GREATER_THAN_0 = "La valeur minimale définit par la propriété 'min' doit être suppérieure à 0";

export default class UpInteger extends InputBaseComponent<UpIntegerProps, number> {
    public static defaultProps: UpIntegerProps = {
        min: 0
    };

    constructor(p, c) {
        super(p, c);
    }

    onChange(value: any) {
        return value;
    }

    validateProps(nextProps) {
        if (nextProps.min < 0) {
            throw new Error(MIN_VALUE_GREATER_THAN_0);
        }
    }

    renderControl() {
        const { onChange, ...others } = this.props ;
        return (
            <UpNumber onChange={this.handleChangeEvent} {...others}></UpNumber>
        );
    }
}
