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

    private onChange(valueIdx: number) {
        if (this.props.MultiCheckAccept) {
            if (this.state.ValueIdx.indexOf(valueIdx) >= 0) {
                this.setState({ ValueIdx: this.state.ValueIdx.filter(i => i !== valueIdx), }, this.propageOnChange);
            } else {
                this.setState({ ValueIdx: this.state.ValueIdx.concat(valueIdx), }, this.propageOnChange);
            }
        } else {
            if (this.state.ValueIdx[0] !== valueIdx) {
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
                    <Radio Value={value} Check={this.state.ValueIdx.indexOf(idx) >= 0} onChange={() => this.onChange(idx)} 
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
    Value: string;
    Check: boolean;
    MultiCheckAccept?: boolean;
    Disable?: boolean;
    onChange?: () => void;
}

export interface RadioState {
}

export class Radio extends React.Component<RadioProps, RadioState> {
    constructor(p, c) {
        super(p, c);
        // this.state = {
        // };
    }

    render() {
        var styleG = getFontClassName({ fontSize: "14px", color: "#4e5b59", }) + " " + style({
            cursor: this.props.Disable ? "auto" : "pointer",
            opacity: this.props.Disable ? 0.5 : 1,
            $nest: {
                "& > span": {
                    verticalAlign: "middle",
                },
            },
        });
         
        if (this.props.MultiCheckAccept) {
            if (this.props.Check) {
                return <IconCheckBox_Check Color="#f59100" IconSize="16px" onClick={this.props.Disable ? null : this.props.onChange} >
                    <span className={styleG} > {this.props.Value}</span>
                </IconCheckBox_Check>
            } else {
                return <IconCheckBox_Empty Color="#d7d7d7" IconSize="16px" onClick={this.props.Disable ? null : this.props.onChange} >
                    <span className={styleG} > {this.props.Value}</span>
                </IconCheckBox_Empty>
            }
        }

        var epaisseurCercle: string = this.props.Check ? "5" : "2";
        var couleurCercle: string = this.props.Check ? "f59100" : "d7d7d7";
        
        var styleCercle = style({
            borderRadius: "50%",
            height: "16px",
            width: "16px",
            border: epaisseurCercle + "px solid #" + couleurCercle,
            display: "inline-block",
            boxSizing: "border-box",
        });

        return <span className={styleG} onClick={this.props.Disable ? null : this.props.onChange} >
            <span className={styleCercle} /><span> {this.props.Value}</span>
        </span>;
    }
}