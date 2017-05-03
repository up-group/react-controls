// Imports
import * as React from 'react'
import { InputBaseComponent } from '../_Common/BaseControl/BaseControl'
import { UpEmailProps } from './'
import UpInput from '../Input'

// Exports
export default class UpEmail extends InputBaseComponent<UpEmailProps, string> {
    public static defaultProps: UpEmailProps = {
        showError: true
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
            <UpInput iconName="email" validation={[{
                pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                errorMessage: "Le champ doit être un courriel"
            }]}
                onChange={this.handleChangeEvent} isRequired={this.props.isRequired} hasError={this.hasError()} showError={this.props.showError} />
        );
    }
}
