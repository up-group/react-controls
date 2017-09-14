// Imports
import * as React from 'react'
import UpLabel from '../../Display/Label/'
import { StyledRadioButton, RadioGroup } from './styles'
import { UpRadioProps, Position } from './'
import { BaseControlComponent } from '../_Common/BaseControl/BaseControl'

// Exports
export default class UpRadio extends BaseControlComponent<UpRadioProps, any> {

    public static defaultProps: UpRadioProps = {
        displayMode: "vertical",
        options: [],
        name: "option",
        showError: true
    }

    constructor(props) {
        super(props);
        //this.state = {
        //    value: (props.value !== undefined) ? props.value
        //        : null
        //};
    }

    stopPropagation = (event) => {
        event.stopPropagation();
    }

    getValue(data: any) {
        return (data == null) ? null :
            data.target != null ? data.target.value
                : data
    }

    private afterSetState = () => {
        this.dispatchOnChange(this.state.value);
    }

    public dispatchOnChange = (data: any, event?, error?: boolean) => {
        if (this.props.onChange !== undefined) {
            this.props.onChange(data, event, error);
        }
    }

    renderControl() {
        const options = this.props.options;
        /*const icon = <SvgIcon iconName={props.iconName}
              width={props.iconSize}
              height={props.iconSize}
              color={props.color} /> ;*/
        var radioGroupClass = "upContainer__groupradio-" + this.props.displayMode;

        return (
            <RadioGroup onClick={this.stopPropagation} className={radioGroupClass} >
                {/* Avoid set active element when using the component inside a label */}
                <label style={{ display: "none" }}><input type="radio" /></label>
                {options.map((option, i) => {
                    console.log(option.text,option.value,this.state.value)

                    return (
                        <StyledRadioButton onChange={this.handleChangeEvent} key={`Key_${this.props.name}_${option.value}`}
                            name={this.props.name}
                            checked={this.state.value != null && this.state.value === option.value}
                            text={option.text}
                            value={option.value}>
                        </StyledRadioButton>
                    )
                }

                )}
            </RadioGroup>
        );
    }
}