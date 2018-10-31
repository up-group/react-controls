// Imports
import * as React from 'react'
import { BaseControlComponent } from '../_Common/BaseControl/BaseControl'
import UpInput from '../Input'
import { UpPhoneProps } from '.';

// Exports
export default class UpPhone extends BaseControlComponent<UpPhoneProps, string> {
    public static defaultProps: UpPhoneProps = {
        showError: true,
        width: "medium",
        defaultValue: ""
    };

    constructor(p, c) {
        super(p, c);
    }

    getValue(event: any) {
        return event;
    }

    phoneHandleChangeEvent = (event) => {
        this.handleChangeEvent(event) ;
    }   

    renderControl() {
        return (
            <UpInput iconName="phone" 
                validation={[{
                    pattern: /^(0|\+33)[1-9]([-. ]?[0-9]{2}){4}$/,
                    errorMessage: "Le champ doit être un numéro de téléphone "
                }]} 
                value={this.state.value} onChange={this.phoneHandleChangeEvent} 
                isRequired={this.props.isRequired}
                showError={this.props.showError} />
        );
    }
}