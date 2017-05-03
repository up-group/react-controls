// Imports
import * as React from 'react'
import styled, {css} from '../../../Common/theming/themedComponents'
import { UpNumberStyledProps} from './'
import { NumericInput } from '@blueprintjs/core'

export default class UpNumberStyled extends React.Component<UpNumberStyledProps, undefined> {
    public static defaultProps: UpNumberStyledProps = {
        value: null
    };
    
    numericInput: any;

    setInput = (input) => {
        // The ref function is called twice, 
        // the first one with the component instance (as React) 
        // and the second one with the DOM node instance
        if (this.numericInput == undefined) {
            this.numericInput = input;
        }
    }

    componentDidMount = () => {
        var _props = this.props as UpNumberStyledProps;
        if (_props.dataFor && this.numericInput) {
            this.numericInput.inputElement.setAttribute('data-tip', 'tooltip');
            this.numericInput.inputElement.setAttribute('data-for', _props.dataFor);
        }
    }

    public render() {
        const { readonly, decimalPlace, handleNumericChange, dataFor, stepSize, value, tooltip, ...others } = this.props ;
        
        return (
            <NumericInput
                {...others}
                ref={this.setInput}
                value={this.props.value}
                stepSize={stepSize}
                majorStepSize={stepSize ? stepSize + 10 : 10}
                onValueChange={handleNumericChange}>
            </NumericInput>
        );
    }
}