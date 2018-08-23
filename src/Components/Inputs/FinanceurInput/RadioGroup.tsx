import * as React from "react";

import { numberIsNullOrUndef, isNullOrUndef, arrayIsNullOrEmpty } from "../../../Common/utils/helpers";

import Radio from "./Radio";


export interface RadioGroupProps {
    Values: string[];
    ValueIdx?: number;
    Horizontal: boolean;
    Disable?: boolean;
    onChange?: (ValueIdx: number) => void;
}

export interface RadioGroupState {
    ValueIdx: number;
    FocusIdx: number;
}

export default class RadioGroup extends React.Component<RadioGroupProps, RadioGroupState> {
    private inputTab: any[];

    constructor(p, c) {
        super(p, c);
        this.inputTab = [];
        this.state = {
            ValueIdx: numberIsNullOrUndef(this.props.ValueIdx) ? null : this.props.ValueIdx,
            FocusIdx: null,
        };
    }

    private onChange = (valueIdx: number, check: boolean) => {
        if (this.props.Disable) {
            return ;
        }
        
        if (this.state.ValueIdx !== valueIdx) {
            if (check) {
                this.setState({ ValueIdx: valueIdx, FocusIdx: valueIdx, }, this.propageChange);
            } else {
                this.setState({ FocusIdx: valueIdx, });
            }
        } else {
            if (check) {
                this.setState({ FocusIdx: valueIdx, });
            } else {
                this.setState({ ValueIdx: null, FocusIdx: valueIdx, }, this.propageChange);
            }
        }
    }
    private propageChange = () => {
        if ( ! isNullOrUndef(this.props.onChange)) {
            this.props.onChange(this.state.ValueIdx);
        }
    }

    private onKeyDown = (event) => {
        if (this.props.Disable) {
            return ;
        }

        var valueIdx = this.state.ValueIdx;

        if (event.keyCode === 37 || event.keyCode === 38) { // fleche haut / gauche
            valueIdx--;
        } else if (event.keyCode === 39 || event.keyCode === 40) { // fleche bas / droite
            valueIdx++;
        } else {
            return ;
        }
        
        if (valueIdx < 0) {
            valueIdx = 0;
        }
        if (valueIdx >= this.props.Values.length) {
            valueIdx = this.props.Values.length - 1;
        }

        this.onChange(valueIdx, true);
        event.preventDefault();
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.ValueIdx !== this.props.ValueIdx && nextProps.ValueIdx !== this.state.ValueIdx) {
            this.setState({ ValueIdx: numberIsNullOrUndef(nextProps.ValueIdx) ? null : nextProps.ValueIdx, });
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
                    <Radio Text={value} Check={this.state.ValueIdx === idx} Disable={this.props.Disable}
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