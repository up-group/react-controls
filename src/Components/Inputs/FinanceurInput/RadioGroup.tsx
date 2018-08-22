import * as React from "react";
import { style } from "typestyle"

import { arrayIsNullOrEmpty, isNullOrUndef, getFontClassName } from "../../../Common/utils/helpers";
import { IconCheckBox_Check, IconCheckBox_Empty } from "../../Display/Icons/Icons";


export interface RadioGroupProps {
    Values: string[];
    ValueIdx?: number[];
    Horizontal: boolean;
    MultiCheckAccept?: boolean;
    Disable?: boolean;
    onChange?: (ValueIdx?: number[]) => void;
}

export interface RadioGroupState {
    ValueIdx: number[];
}

export default class RadioGroup extends React.Component<RadioGroupProps, RadioGroupState> {
    constructor(p, c) {
        super(p, c);
        this.state = {
            ValueIdx: arrayIsNullOrEmpty(this.props.ValueIdx) ? [] : 
                    (this.props.MultiCheckAccept ? 
                        this.props.ValueIdx.map((d: number, idx: number): number => { return d; }) :
                        [this.props.ValueIdx[0]]),
        };
    }

    private onChange(valueIdx: number, check: boolean) {
        if (this.props.MultiCheckAccept) {
            if (this.state.ValueIdx.indexOf(valueIdx) >= 0) {
                if ( ! check) {
                    this.setState({ ValueIdx: this.state.ValueIdx.filter(i => i !== valueIdx), }, this.propageOnChange);
                }
            } else {
                if (check) {
                    this.setState({ ValueIdx: this.state.ValueIdx.concat(valueIdx), }, this.propageOnChange);
                }
            }
        } else {
            if (this.state.ValueIdx[0] !== valueIdx && check) {
                this.setState({ ValueIdx: [valueIdx], }, this.propageOnChange);
            }
        }
    }
    private propageOnChange() {
        if ( ! isNullOrUndef(this.props.onChange)) {
            this.props.onChange(this.state.ValueIdx.map((d: number, idx: number): number => { return d; }));
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.ValueIdx !== this.props.ValueIdx && nextProps.ValueIdx !== this.state.ValueIdx) {
            this.setState({ ValueIdx: arrayIsNullOrEmpty(nextProps.ValueIdx) ? [] : 
                    (nextProps.MultiCheckAccept ? 
                        nextProps.ValueIdx.map((d: number, idx: number): number => { return d; }) :
                        [nextProps.ValueIdx[0]]) });
        }
    }

    render() {
        if (arrayIsNullOrEmpty(this.props.Values)) {
            return <span />;
        }

        return <span>
            { this.props.Values.map((value: string, idx: number): JSX.Element => {
                return <span key={idx} >
                    <Radio Text={value} Check={this.state.ValueIdx.indexOf(idx) >= 0} onChange={(check: boolean) => this.onChange(idx, check)} 
                            MultiCheckAccept={this.props.MultiCheckAccept} Disable={this.props.Disable} />

                    { idx === this.props.Values.length ? null : 
                        this.props.Horizontal ? <span>&emsp;</span> : <br />
                    }
                </span>;
            }) }
        </span>;
    }
}


export interface RadioProps {
    Text: string;
    Check: boolean;
    MultiCheckAccept?: boolean;
    Disable?: boolean;
    onChange?: (check: boolean) => void;
}

export interface RadioState {
    Check: boolean;
    Focus: boolean;
}

export class Radio extends React.Component<RadioProps, RadioState> {
    constructor(p, c) {
        super(p, c);
        this.state = {
            Check: this.props.Check,
            Focus: false,
        };
    }
    
    private styleG(): string {
        return getFontClassName({ fontSize: "14px", color: "#4e5b59", }) + " " + style({
            cursor: this.props.Disable ? "auto" : "pointer",
            opacity: this.props.Disable ? 0.5 : 1,
            $nest: {
                "& > span": {
                    verticalAlign: "middle",
                },
            },
        });
    }
    private styleFocus(): string {
        return style({
            $nest: {
                "&:focus": {
                    outline: "none",
                },
            },
        });
    }
    private styleSousligner(): string {
        return style({
            textDecoration: this.state.Focus ? "underline dotted #f59100" : "none",
        });
    }

    private onChange = (check: boolean) => {
        if (this.state.Check === check) {
            return ;
        }
        this.setState({ Check: check, });
        if ( ! isNullOrUndef(this.props.onChange)) {
            this.props.onChange(check);
        }
    }
    private onFocus = (event) => {
        this.setState({ Focus: true, });
    }
    private onBlur = (event) => {
        this.setState({ Focus: false, });
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.Check !== this.props.Check) {
            this.setState({ Check: nextProps.Check, });
        }
    }

    render() {         
        if (this.props.MultiCheckAccept) {
            return this.renderMulti();
        }

        var epaisseurCercle: string = this.state.Check ? "5" : "2";
        var couleurCercle: string = this.state.Check ? "f59100" : "d7d7d7";
        
        var styleCercle = style({
            borderRadius: "50%",
            height: "16px",
            width: "16px",
            border: epaisseurCercle + "px solid #" + couleurCercle,
            display: "inline-block",
            boxSizing: "border-box",
        });

        return <span className={this.styleG() + " " + this.styleFocus()} tabIndex={0} 
                onClick={this.props.Disable ? null : () => this.props.onChange(!this.state.Check)}
                onFocus={this.onFocus} onBlur={this.onBlur} >
            <span className={styleCercle} />
            <span className={this.styleSousligner()} > {this.props.Text}</span>
        </span>;
    }
    private renderMulti(): JSX.Element {
        var result: JSX.Element = <span className={this.styleG() + " " + this.styleSousligner()} > {this.props.Text}</span>;

        if (this.state.Check) {
            result = <IconCheckBox_Check Color="#f59100" IconSize="16px"
                    onClick={this.props.Disable ? null : () => this.onChange(false)} >
                {result}
            </IconCheckBox_Check>;
        } else {
            result = <IconCheckBox_Empty Color="#d7d7d7" IconSize="16px"
                    onClick={this.props.Disable ? null : () => this.onChange(true)} >
                {result}
            </IconCheckBox_Empty>;
        }

        return <span className={this.styleFocus()} tabIndex={0} onFocus={this.onFocus} onBlur={this.onBlur} >
            {result}
        </span>;
    }
}