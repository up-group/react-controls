import * as React from 'react';
import {Props as StyleProps} from '../Input/';

import { BaseControl } from '../BaseControl/BaseControl';
//import TypeStringControl from '../Validation/TypeStringControl';
//import TypeNumberControl from '../Validation/TypeNumberControl';

import { NumericInput } from '@blueprintjs/core'

//import { WidthSize, HeightSize, InputType } from '../Input/types';
import { CommonProps } from '../Input/index';

import {FilterProps} from '../utils/types'

export interface StyledProps extends CommonProps{
    color?: string;
    backgroundColor?: string;
    borderColor?: string;
    isNullable?: boolean;
    hasError?: boolean;
    onChange?: (data: any) => void;
    className?:string;
}

export interface Props extends CommonProps{
    max?: number,
    min?: number,
    isNullable?: boolean;
}

export default class Integer extends BaseControl<Props, number> {
    public static defaultProps: Props = {
    };
    
    public static defaultStyledProps: StyledProps = {
        color: "",
        backgroundColor: "",
        borderColor: "",
        isNullable: false,
        className:"",
        disabled: false,
        placeholder: "",
        height: "normal",
        width: "medium",
        readOnly: false
    };

    constructor(p, c) {
        super(p, c);
        // var pattern = /^[0-9]*$/
        // var patternErrorMessage = "Doit être un nombre entier";
        // this._validationManager.addControl(new TypeStringControl(pattern, patternErrorMessage));
        // this._validationManager.addControl(new TypeNumberControl(true, this.props.min, this.props.max));
    }

    onChange(event: any) {
        return event.target.value;
    }

    renderControl() {
        const styledProps= FilterProps(this.props, Integer.defaultStyledProps) ;
        
        return (
            <NumericInput
                {...styledProps}
                onChange={this.handleChangeEvent}>
            </NumericInput>
        );
    }
}
