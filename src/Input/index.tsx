import * as React from 'react';
import { InputStyled } from './styles';
import { WidthSize, HeightSize, InputType } from './types';
import {BaseControl} from '../BaseControl/BaseControl';
import TypeStringControl from '../Validation/TypeStringControl';
import TypeNumberControl from '../Validation/TypeNumberControl';

//import Validator from 'validator'

export interface Props extends React.HTMLProps<HTMLInputElement> {
    color?: string;
    backgroundColor?: string;
    width?: WidthSize;
    height?: HeightSize;
    borderColor?: string;
    type?: InputType;
    isNullable?:boolean;
    iconName?:string;
    hasError?:boolean;
}


export default class Input extends BaseControl<Props,any> {
    public static defaultProps: Props = {
        color: '#fefefe',
        backgroundColor: '#c05b4d',
        borderColor: '#732419',
        width: 'medium',
        height: 'normal'
    };

    constructor(p, c) {
        super(p, c);

        var pattern = null;
        var patternErrorMessage = null;

        if (this.props.pattern != null) {
            pattern = new RegExp(this.props.pattern);
            patternErrorMessage = "test";
            this._validationManager.addControl(new TypeStringControl(pattern, patternErrorMessage));
        }
        // else {
        //     switch (this.props.type) {
        //         case "email":
        //             pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        //             patternErrorMessage = "Doit être un mail";
        //             break;
        //         case "number":
        //             pattern = /^[0-9]*(|\.[0-9]*)*$/
        //             patternErrorMessage = "Doit être un nombre";
        //             break;
        //         case "integer":
        //             pattern = /^[0-9]*$/
        //             patternErrorMessage = "Doit être un nombre entier";
        //             break;
        //         case "phone":
        //             pattern = /^(0|\+33)[1-9]([-. ]?[0-9]{2}){4}$/
        //             patternErrorMessage = "Doit être un téléphone";
        //             break;
        //         default:
        //     }
        // }

        // this._validationManager.addControl(new TypeStringControl(pattern, patternErrorMessage));

        // if (this.props.type == "number" || this.props.type == "integer") {

        //     var min, max = null;
        //     if (this.props.min != null) {
        //         if (typeof (this.props.min) === "number") {
        //             min = this.props.min;
        //         } else {
        //             min = parseFloat(this.props.min);
        //         }
        //     }

        //     if (this.props.max != null) {
        //         if (typeof (this.props.max) === "number") {
        //             max = this.props.max;
        //         } else {
        //             max = parseFloat(this.props.max);
        //         }
        //     }

        //     this._validationManager.addControl(new TypeNumberControl(this.props.type == "integer", min, max));
        // }
    }

    onChange(event: any) {
        return event.target.value;
    }

    renderControl() {
        if (this.props.type == "email") {
            return (
                <InputStyled
                    type="email"
                    iconName="email"
                    style={this.props.style}
                    borderColor={this.props.borderColor}
                    onClick={this.props.onClick}
                    color={this.props.color}
                    backgroundColor={this.props.backgroundColor}
                    width={this.props.width}
                    height={this.props.height}
                    readOnly={this.props.readOnly}
                    disabled={this.props.disabled}
                    onChange={this.handleChangeEvent}
                >
                    {this.props.children}
                </InputStyled>
            );
        }
        return (
            <InputStyled
                type="text"
                style={this.props.style}
                iconName={this.props.iconName || this.props.type}
                onClick={this.props.onClick}
                color={this.props.color}
                backgroundColor={this.props.backgroundColor}
                width={this.props.width}
                height={this.props.height}
                readOnly={this.props.readOnly}
                disabled={this.props.disabled}
                onChange={this.handleChangeEvent}
            >
                {this.props.children}
            </InputStyled>
        );
    }
}
