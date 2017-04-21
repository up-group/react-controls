// Imports
import * as React from 'react'
import { InputTextComponent } from "../_Common/BaseControl/BaseInput"
import TypeStringControl from "../_Common/Validation/TypeStringControl"
import { CommonInputTextProps} from "../_Common/BaseControl/BaseInput"
import {ThemedProps} from '../../../Common/theming/types' 

// Exports
export default class UpEmail extends InputTextComponent {
    public static defaultProps: CommonInputTextProps = {
        iconName:"email"
    };

    constructor(p, c) {
        super(p, c);

        var pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        var patternErrorMessage = "Doit être un courriel";

        this._validationManager.addControl(new TypeStringControl(pattern, patternErrorMessage));
    }
}
