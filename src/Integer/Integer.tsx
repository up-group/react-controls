import * as React from 'react';
import {Props as StyleProps} from '../Input/';
import {InputStyled} from '../Input/styles';

import { BaseControl } from '../BaseControl/BaseControl';
import TypeStringControl from '../Validation/TypeStringControl';
import TypeNumberControl from '../Validation/TypeNumberControl';

import { WidthSize, HeightSize, InputType } from '../Input/types';
import { CommonProps } from '../Input/index';

export interface Props extends CommonProps{
    max?: number,
    min?: number,
    isNullable?: boolean;
}

export default class Integer extends BaseControl<Props, number> {
    public static defaultProps: Props = {
    };

    constructor(p, c) {
        super(p, c);

        var pattern = /^[0-9]*$/
        var patternErrorMessage = "Doit être un nombre entier";

        this._validationManager.addControl(new TypeStringControl(pattern, patternErrorMessage));
        this._validationManager.addControl(new TypeNumberControl(true, this.props.min, this.props.max));

    }

    onChange(event: any) {
        return event.target.value;
    }

    renderControl() {
        return (
            <InputStyled
                hasError={this.hasError()}
                onChange={this.handleChangeEvent}
            >
            </InputStyled>
        );
    }
}
