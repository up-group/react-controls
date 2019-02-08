// Imports
import * as React from 'react'
import { BaseControlComponent, BaseControlState } from '../_Common/BaseControl/BaseControl'
import UpInput from '../Input'

import { CommonInputTextProps } from "../_Common/BaseControl/BaseInput"
import { Validation } from '../Input/types';

// Exports
export interface UpPhoneProps extends CommonInputTextProps<string> {
    validation?: Array<Validation>;
}

// Exports
export default class UpPhone extends React.Component<UpPhoneProps, BaseControlState<string>> {
    public static defaultProps: UpPhoneProps = {
        showError: true,
        width: "medium",
        defaultValue: "",
        validation: [{
            pattern: /^(0|\+33)[1-9]([-. ]?[0-9]{2}){4}$/,
            errorMessage: "Le champ doit être un numéro de téléphone"
        }]
    };

    constructor(p, c) {
        super(p, c);
        this.state = {};
    }
    
    phoneHandleChangeEvent = (event, value, error) => {
        this.setState({ value }, () => {
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

    render() {
        return (
            <UpInput iconName="phone" 
                validation={this.props.validation} 
                value={this.currentValue} 
                onChange={this.phoneHandleChangeEvent} 
                isRequired={this.props.isRequired}
                showError={this.props.showError} />
        );
    }
}