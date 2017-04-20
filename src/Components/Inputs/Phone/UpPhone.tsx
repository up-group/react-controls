import * as React from 'react';
import { InputBaseComponent } from "../_Common/BaseControl/BaseControl";
import TypeStringControl from "../_Common/Validation/TypeStringControl";
import { InputStyled, CommonProps } from "../_Common/Styled/Input/BaseInput"

export interface Props extends CommonProps {
    isNullable?: boolean;
}

export default class UpPhone extends InputBaseComponent<Props, string> {
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
        return <InputStyled hasError={this.hasError()} onChange={this.handleChangeEvent} iconName="phone" />
    }
}
