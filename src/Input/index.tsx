import * as React from 'react';
import { TextInputComponent, EmailInputComponent } from './styles';
import { Size, InputType } from './types';
import { BaseControl } from '../BaseControl/BaseControl';
import  TypeStringControl  from '../BaseControl/errorCentral/TypeStringControl';


export interface Props extends React.HTMLProps<HTMLInputElement> {
    color?: string;
    backgroundColor?: string;
    fontSize?: Size;
    borderColor?: string;
    type?: InputType;
}


export default class Input extends BaseControl<Props> {
    public static defaultProps: Props = {
        color: '#fefefe',
        backgroundColor: '#c05b4d',
        borderColor: '#732419',
        fontSize: 'medium',
    };

    constructor(p, c) {
        super(p, c);

        var pattern = null;
        var patternErrorMessage = null;

        if (this.props.pattern != null ) {
             pattern = new RegExp(this.props.pattern);
             patternErrorMessage = "test";
        }
        else {

            if (this.props.type === "email") {
                pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                patternErrorMessage = "Doit être un mail";
            }
        }

        this._ControlErrorCentral.addControl(new TypeStringControl(pattern, patternErrorMessage));

    }

    handleChangeJsEvent(event: any) {
        return event.target.value;
    }

    public renderControl() {
        if (this.props.type == "email") {
            return (
                <EmailInputComponent
                    type="email"
                    style={this.props.style}
                    borderColor={this.props.borderColor}
                    onClick={this.props.onClick}
                    color={this.props.color}
                    backgroundColor={this.props.backgroundColor}
                    fontSize={this.props.fontSize}
                    onChange={this.handleChangeJsEventGlobal} 
                >
                    
                    {this.props.children}
                </EmailInputComponent>
            );
        }
        return (
            <TextInputComponent
                type="text"
                onClick={this.props.onClick}
                color={this.props.color}
                backgroundColor={this.props.backgroundColor}
                fontSize={this.props.fontSize}
            >
                {this.props.children}
            </TextInputComponent>
        );
    }
}
