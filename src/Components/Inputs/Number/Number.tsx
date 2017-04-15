import * as React from 'react';
import { BaseControl } from "../../../Common/BaseControl/BaseControl";
import { InputStyled, CommonProps } from "./../_Styled/Input/BaseInput"
import TypeNumberControl from "../../../Common/Validation/TypeNumberControl";
import TypeStringControl from "../../../Common/Validation/TypeStringControl";

export interface Props extends CommonProps {
    max?: number,
    min?: number,
    isNullable?: boolean;
}

export default class Number extends BaseControl<Props, number> {
    public static defaultProps: Props = {
    };

    constructor(p, c) {
        super(p, c);

        var pattern = /^[0-9]*(|\.[0-9]*)*$/
        var patternErrorMessage = "Doit être un nombre";

        this._validationManager.addControl(new TypeStringControl(pattern, patternErrorMessage));
        this._validationManager.addControl(new TypeNumberControl(false, this.props.min, this.props.max));

    }

    onChange(event: any) {
        return event.target.value;
    }

    renderControl() {
        return <InputStyled hasError={this.hasError()} onChange={this.handleChangeEvent} />
    }
}
