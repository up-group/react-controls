// Imports
import * as React from 'react'
import { BaseControlComponent } from '../_Common/BaseControl/BaseControl'
import { UpPhoneProps } from './'
import UpInput from '../Input'

// Exports
export default class UpPhone extends BaseControlComponent<UpPhoneProps, string> {
    public static defaultProps: UpPhoneProps = {
        showError: true,
        width:"medium"
    };

    constructor(p, c) {
        super(p, c);
    }

    initWithProps() { }

    onChange(event: any) {
        return event;
    }

    renderControl() {
        return (
            <UpInput iconName="phone" validation={[{
                pattern: /^(0|\+33)[1-9]([-. ]?[0-9]{2}){4}$/,
                errorMessage: "Le champ doit être un numéro de téléphone"
            }]} value={this.props.value} onChange={this.dispatchOnChange} isRequired={this.props.isRequired} hasError={this.hasError()} showError={this.props.showError} />
        );
    }
}
