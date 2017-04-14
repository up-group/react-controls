import * as React from 'react';
import {Props as StyleProps} from '../Input/';
import {InputStyled} from '../Input/styles';

import { BaseControl } from '../BaseControl/BaseControl';
import TypeStringControl from '../Validation/TypeStringControl';

import { WidthSize, HeightSize } from '../Input/types';

export interface Props {
    isNullable?: boolean;
}

export default class Phone extends BaseControl<Props, string> {
    public static defaultProps: Props = {
    };

    constructor(p, c) {
        super(p, c);

        var pattern = /^(0|\+33)[1-9]([-. ]?[0-9]{2}){4}$/
        var patternErrorMessage = "Doit être un numéro de téléphone";

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
