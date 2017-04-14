import * as React from 'react';
import {Props as StyleProps} from '../Input/index';
import {InputStyled} from '../Input/styles';

import { BaseControl } from '../BaseControl/BaseControl';
import TypeStringControl from '../Validation/TypeStringControl';

import { WidthSize, HeightSize, InputType } from '../Input/types';
import { CommonProps } from '../Input/index';

export interface Props extends CommonProps  {
    isNullable?: boolean;
}

export default class Email extends BaseControl<Props, string> {
    public static defaultProps: Props = {
    };

    constructor(p, c) {
        super(p, c);

        var pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        var patternErrorMessage = "Doit être un courriel";

        this._validationManager.addControl(new TypeStringControl(pattern, patternErrorMessage));
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
