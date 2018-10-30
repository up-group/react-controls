// Imports
import * as React from 'react'
import * as classnames from 'classnames'

import { BaseControlComponent } from '../_Common/BaseControl/BaseControl'
import { UpRadioStyledProps, UpRadioProps } from './types';
import { RadioGroupStyles, getStyles } from './styles';
import { style } from 'typestyle';

type RadioGroupProps = {
    className?:string;
}

const RadioGroup: React.StatelessComponent<RadioGroupProps> = (props) => {
    const { children, className } = props;
    return (
      <div onClick={this.stopPropagation} className={classnames(className, style(RadioGroupStyles))}>
        {children}
      </div>
    )
  }

const BaseRadioButton: React.StatelessComponent<UpRadioStyledProps> = (props) => {
    const { checked, className, name, text, value, onChange } = props;
    return (
      <label className={classnames("up-control", "up-radio", getStyles(props), className)}>
        <input checked={checked} onChange={onChange} name={name} type="radio" value={value} />
        <span className="up-control-indicator"></span>
        <span className="up-control-text">{text}</span>
      </label>
    )
}

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
            <RadioGroup className={radioGroupClass}>
                {/* Avoid set active element when using the component inside a label */}
                <label style={{ display: "none" }}><input type="radio" /></label>
                {options.map((option, i) => {
                    return (
                        <BaseRadioButton 
                            onChange={this.handleChangeEvent} 
                            key={`Key_${this.props.name}_${option.value}`}
                            name={this.props.name}
                            checked={this.state.value != null && this.state.value === option.value}
                            text={option.text}
                            value={option.value}>
                        </BaseRadioButton>
                    )
                }

                )}
            </RadioGroup>
        );
    }
}