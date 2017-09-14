// Imports
import * as React from 'react'
import { BaseControlComponent } from '../_Common/BaseControl/BaseControl'
import { UpEmailProps } from './'
import UpInput from '../Input'

// Exports
export default class UpEmail extends BaseControlComponent<UpEmailProps, string> {
    public static defaultProps: UpEmailProps = {
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

    renderControl() {
        return (
            <UpInput iconName="email" validation={[{
                pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                errorMessage: "Le champ doit être un courriel"
            }]}
                value={this.state.value}
                onChange={this.dispatchOnChange}
                isRequired={this.props.isRequired}
                maxLength={this.props.maxLength}
                placeholder={this.props.placeholder}
                width={this.props.width}
                hasError={this.hasError()}
                showError={this.props.showError} />
        );
    }
}
