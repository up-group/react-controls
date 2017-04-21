// Imports
import * as React from 'react'
import { InputTextComponent } from "../_Common/BaseControl/BaseInput"
import TypeStringControl from "../_Common/Validation/TypeStringControl"
import { CommonInputTextProps} from "../_Common/BaseControl/BaseInput"
import {ThemedProps} from '../../../Common/theming/types'

export default class UpPhone extends InputTextComponent {
    public static defaultProps: CommonInputTextProps = {
        iconName:"phone"
    };

    constructor(p, c) {
        super(p, c);

        var pattern = /^(0|\+33)[1-9]([-. ]?[0-9]{2}){4}$/
        var patternErrorMessage = "Doit être un numéro de téléphone";

        this._validationManager.addControl(new TypeStringControl(pattern, patternErrorMessage));
    }
}