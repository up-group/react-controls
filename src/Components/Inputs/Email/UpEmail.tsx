import * as React from 'react'
import { BaseControlState } from '../_Common/BaseControl/BaseControl';
import { UpInputProps } from '../Input/types';
import UpInput from '../Input';

export default class UpEmail extends React.Component<UpInputProps, BaseControlState<string>>  {

    constructor(p, c) {
        super(p, c);
    }

    render() {
        const emailValidation = [{
            pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            errorMessage: "Le champ doit être un courriel"
        }]
        return <UpInput {...this.props} iconName="email" validation={emailValidation} />
    }
}