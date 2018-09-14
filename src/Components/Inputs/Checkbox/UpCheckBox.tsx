import * as React from "react";
import { InputHTMLAttributes } from "react"
import { style } from "typestyle"


import { getFontClassName, isNullOrUndef } from "../../../Common/utils/helpers";
//import { IconCheckBox_Check, IconCheckBox_Empty } from "../../Display/Icons/Icons";
import { CheckBox, CheckBoxOutlineBlank } from "../../Display/Icons/materialinear";
import { debug } from "util";




export interface UpCheckboxProps /*extends InputHTMLAttributes<HTMLInputElement>*/ {
    text?: string;
    //Check?: boolean;
    //onChangeValue?: (check: boolean) => void;
    //Disable?: boolean;
    //onChange?: (check: boolean) => void;
    //onKeyDown?: (event) => void;
}

export interface UpCheckboxState {
    //Check: boolean;
    //Focus: boolean;
}

export type a = React.HTMLAttributes<HTMLSpanElement>
export type b = React.InputHTMLAttributes<HTMLSpanElement>
export type c = React.InputHTMLAttributes<HTMLInputElement>
export default class UpCheckbox extends React.Component<UpCheckboxProps & c, UpCheckboxState> {
    private ref: any;

    constructor(p, c) {
        super(p, c);

        this.state = {
            //Check: this.props.Check,
            //Focus: false,
        };
    }

    //private onKeyDown = (event) => {
    //    if (this.props.disabled) {
    //        return;
    //    }
    //    // espace
    //    if (event.keyCode === 32) {
    //        this.onClick(!this.state.Check);
    //        event.preventDefault();
    //    }
    //    if (!isNullOrUndef(this.props.onKeyDown)) {
    //        this.props.onKeyDown(event);
    //    }
    //}
    //private onClick = (event) => {
    //    if (this.props.disabled) {
    //        return;
    //    }
    //    this.setState({ Check: !this.state.Check, }, () => {
    //        if (!isNullOrUndef(this.props.onChange)) {
    //            this.props.onChangeValue(this.state.Check);
    //        }
    //    });
    //}
    //private onFocus = (event) => {
    //    this.setState({ Focus: true, });
    //}
    //private onBlur = (event) => {
    //    this.setState({ Focus: false, });
    //}

    // utilisé pour la gestion du focus dans CheckboxGroup
    //public focus = () => {
    //    if (!this.props.disabled) {
    //        this.ref.focus();
    //    }
    //}

    //componentWillReceiveProps(nextProps) {
    //    if (nextProps.Check !== this.props.Check && nextProps.Check !== this.state.Check) {
    //        this.setState({ Check: nextProps.Check, });
    //    }
    //}
    private input: HTMLInputElement;
    render() {
        //var couleurCheck: string = this.state.Check && !this.props.disabled ? "#f59100" : "#d7d7d7";

        //var styleG = getFontClassName({ fontSize: "14px", color: "#4e5b59", }) + " " + style({
        //    cursor: this.props.disabled ? "auto" : "pointer",
        //    opacity: this.props.disabled ? 0.5 : 1,
        //    textDecoration: this.state.Focus && !this.props.disabled ? "underline #f59100" : "none",
        //    $nest: {
        //        "& > span": {
        //            verticalAlign: "middle",
        //        },
        //    },
        //});


        //var result: JSX.Element = <span className={styleG} > {this.props.Text}</span>; // /!\ l'espace au début du span est important

        //if (this.state.Check) {
        //    result = <CheckBox color={couleurCheck} IconSize="16px" onClick={this.onClick} >
        //        {result}
        //    </CheckBox>;
        //} else {
        //    result = <CheckBoxOutlineBlank color={couleurCheck} IconSize="16px" onClick={this.onClick} >
        //        {result}
        //    </CheckBoxOutlineBlank>;
        //}



        var checkmark = /*style*/{
            position: "absolute" as any,
            display: "block" as any,
            top: 0,
            left: 0,
        }

        var checked = style({
            color: this.props.disabled == true ? "#d7d7d7" : "#f59100"

        }, checkmark)

        var unchecked = style({
            //color: "#d7d7d7",
        }, checkmark)


        var container = style({
            display: "block",
            position: "relative",
            paddingLeft: 15,
            marginBottom: 5,
            cursor: "pointer",
            $nest: {
                "& input:focus ~ span": {
                    outline: "auto 5px #f59100",
                },
                "& input": {
                    left: 0,
                    position: "absolute",
                    opacity: 0,
                    cursor: "pointer"
                },

                ["& input:checked ~ ." + checked]: {
                    display: "inline-block",
                    opacity: 1,
                },
                ["& input:checked ~ ." + unchecked]: {
                    display: "none",
                    opacity: 0,

                },
                ["& input ~ ." + checked]: {
                    display: "none",
                    opacity: 0,
                },
                ["& input ~ ." + unchecked]: {
                    display: "inline-block",
                    opacity: 1,
                }
            }
        })


        const { value, text, children, ...rest } = this.props

        return <div onClick={() => { this.input.click() }} className={container}>
            &nbsp;
            {text}
            {children}
            <input ref={(r) => this.input = r} type="checkbox" {...rest} />
            <CheckBox color={this.props.disabled == true ? "#d7d7d7" : "#f59100"} className={checked} />
            <CheckBoxOutlineBlank className={unchecked} />
        </div>

        //return <span className={styleFocus}
        //    tabIndex={this.props.disabled ? null : 0}
        //    onFocus={this.onFocus}
        //    onBlur={this.onBlur}
        //    onKeyDown={this.onKeyDown}
        //    ref={(c) => { this.ref = c; }} >
        //    {result}
        //</span>;
    }
}

//// Imports
//import * as React from 'react'
//import UpLabel from '../../Display/Label/index'
////import {StyledCheckBox, CheckboxGroup} from './styles'


//export type Position = 'left' | 'right';

//export interface Option {
//    name: string;
//    value: any;
//    text?: string;
//    iconName?: string;
//    onChange?: (e: any) => void;
//    checked?: boolean;
//}

//export interface UpCheckboxStyledProps extends Option {
//    className?: string;
//}

//export interface UpCheckboxProps {
//    options: Array<Option>;
//    //position?:Position;
//}

//// Exports
//export default class UpCheckbox extends React.Component<UpCheckboxProps, any> {
//    constructor(props) {
//        super(props);
//        this.state = {
//            options: props.options
//        };
//    }

//    componentWillReceiveProps(nextProps: UpCheckboxProps) {
//        if (nextProps.options !== this.props.options) {
//            this.setState({ options: nextProps.options });
//        }
//    }

//    stopPropagation = (event) => {
//        event.stopPropagation();
//    }

//    handleChangeEvent = (event) => {
//        var options = this.state.options;
//        for (var i in options) {
//            var option: Option = options[i];
//            if (option.name == event.target.name && option.onChange != undefined) {
//                option.onChange(event.target.checked);
//                options[i].checked = event.target.checked;
//            }
//        }

//        this.setState({ options: options });
//    }

//    render() {
//        const options = this.state.options;
//        /*const icon = <SvgIcon iconName={props.iconName}
//              width={props.iconSize}
//              height={props.iconSize}
//              color={props.color} /> ;*/
//        return (
//            <div onClick={this.stopPropagation}>
//                {/* Avoid set active element when using the component inside a label */}
//                <label style={{ display: "none" }}><input type="checkbox" /></label>
//                {options.map((option) => (



//                    <label >
//                        <input checked={option.checked} onChange={option.onChange} name={name} type="checkbox" value={option.value} />
//                        <span className="up-control-indicator"></span>
//                        {option.text}
//                    </label>

//                ))}
//            </div>
//        );
//    }
//}