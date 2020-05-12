// Imports
import * as React from 'react'
import { BaseControlState } from '../_Common/BaseControl/BaseControl'
import UpInput from '../Input'

import { CommonInputTextProps } from "../_Common/BaseControl/BaseInput"
import { Validation } from '../Input/types';
import * as _ from 'lodash';

// Exports
export interface UpPhoneProps extends CommonInputTextProps<string> {
    validation?: Array<Validation>;
}

// Exports
export default class UpPhone extends React.Component<UpPhoneProps, BaseControlState<string>> {
    public static defaultProps: UpPhoneProps = {
        showError: true,
        defaultValue: "",
        validation: [{
            pattern: /^(0|\+33)[1-9]([-. ]*[0-9]{2}){4}$/,
            errorMessage: "Le champ doit être un numéro de téléphone"
        }]
    };

    constructor(p, c) {
        super(p, c);
        this.state = {};
    }
    
    phoneHandleChangeEvent = (event, value, error) => {
        this.setState({ value, error }, () => {
            if(this.props.onChange) {
                this.props.onChange(event, value, error) ;
            }
        }); 
    }   

    get isControlled() {
        return this.props.value !== undefined;
    }

    get currentValue() {
        return this.isControlled ? this.props.value : this.state.value;
    }

    get currentError() {
        return this.isControlled ? this.props.error : this.state.error;
    }

    render() {
        return (
            <UpInput iconName="phone" 
                {...this.props}
                value={this.currentValue} 
                onChange={this.phoneHandleChangeEvent} 
                error={this.currentError}
                hasError={!_.isEmpty(this.currentError)} />
        );
    }
}