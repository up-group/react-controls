import * as React from "react";

import { arrayIsNullOrEmpty, isNullOrUndef } from "../../../Common/utils/helpers";

import Checkbox from "./Checkbox";


export interface CheckboxGroupProps {
    Values: string[];
    ValueIdx?: number[];
    Horizontal: boolean;
    Disable?: boolean;
    onChange?: (ValueIdx?: number[]) => void;
}

export interface CheckboxGroupState {
    ValueIdx: number[];
    FocusIdx: number;
}

export default class CheckboxGroup extends React.Component<CheckboxGroupProps, CheckboxGroupState> {
    private inputTab: any[];

    constructor(p, c) {
        super(p, c);
        this.inputTab = [];
        this.state = {
            ValueIdx: arrayIsNullOrEmpty(this.props.ValueIdx) ? [] : 
                    this.props.ValueIdx.map((d: number, idx: number): number => { return d; }),
                    FocusIdx: null,
        };
    }

    private onChange(valueIdx: number, check: boolean) {
        if (this.props.Disable) {
            return ;
        }

        if (this.state.ValueIdx.indexOf(valueIdx) >= 0) {
            if (check) {
                this.setState({ FocusIdx: valueIdx, });
            } else {
                this.setState({ ValueIdx: this.state.ValueIdx.filter(i => i !== valueIdx), FocusIdx: valueIdx, }, this.propageOnChange);
            }
        } else {
            if (check) {
                this.setState({ ValueIdx: this.state.ValueIdx.concat(valueIdx), FocusIdx: valueIdx, }, this.propageOnChange);
            } else {
                this.setState({ FocusIdx: valueIdx, });
            }
        }
    }
    private propageOnChange() {
        if ( ! isNullOrUndef(this.props.onChange)) {
            this.props.onChange(this.state.ValueIdx.map((d: number, idx: number): number => { return d; }));
        }
    }

    private onKeyDown = (event) => {
        if (this.props.Disable) {
            return ;
        }

        var focusIdx: number = this.state.FocusIdx;

        if (event.keyCode === 37 || event.keyCode === 38) { // fleche haut / gauche
            focusIdx--;
        } else if (event.keyCode === 39 || event.keyCode === 40) { // fleche bas / droite
            focusIdx++;
        } else {
            return ;
        }
        
        if (focusIdx < 0) {
            focusIdx = 0;
        }
        if (focusIdx >= this.props.Values.length) {
            focusIdx = this.props.Values.length - 1;
        }

        this.setState({ FocusIdx: focusIdx, });
        event.preventDefault();
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.ValueIdx !== this.props.ValueIdx && nextProps.ValueIdx !== this.state.ValueIdx) {
            this.setState({ ValueIdx: arrayIsNullOrEmpty(nextProps.ValueIdx) ? [] : 
                    nextProps.ValueIdx.map((d: number, idx: number): number => { return d; }) });
        }
    }

    componentDidUpdate() {
        if (this.state.FocusIdx !== null) {
            this.inputTab[this.state.FocusIdx].focus();
        }
    }

    render() {
        if (arrayIsNullOrEmpty(this.props.Values)) {
            return <span />;
        }

        return <span>
            { this.props.Values.map((value: string, idx: number): JSX.Element => {
                return <span key={idx} >
                    <Checkbox Text={value} Check={this.state.ValueIdx.indexOf(idx) >= 0} Disable={this.props.Disable}
                            onChange={(check: boolean) => this.onChange(idx, check)} onKeyDown={this.onKeyDown}
                            ref={(c) => { this.inputTab[idx] = c; }} />

                    { idx === this.props.Values.length ? null : 
                        this.props.Horizontal ? <span>&emsp;</span> : <br />
                    }
                </span>;
            }) }
        </span>;
    }
}