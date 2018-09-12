// Imports
import * as React from 'react'
import { BaseControlComponent } from '../_Common/BaseControl/BaseControl'
//import { UpNumberProps } from './'
import TypeNumberControl from '../_Common/Validation/TypeNumberControl'
import { CommonProps } from '../Input/'
import { style } from "typestyle"
import { Tooltip } from '../../Display/Tooltip'



import TextInput, { PosIconEnum, InputTypeEnum } from "../FinanceurInput/TextInput"
import BaseNewInput, { TextInputProps } from "../_Common/BaseControl/BaseNewInput"


export interface UpNumberProps  {
    type?: "number";
}

export interface UpNumberState {

}

export default class UpNumber extends React.Component<UpNumberProps & TextInputProps, UpNumberState>  {
    //public static defaultProps: UpNumberProps = {};

    constructor(p, c) {
        super(p, c);
        this.state = {};
    }

    render() {

        return <BaseNewInput type={"number"}  {...this.props} ></BaseNewInput>
    }
}



//export interface UpNumberProps extends CommonProps {
//    max?: number;
//    min?: number;
//    stepSize?: number;
//    decimalPlace?: number;
//    value?: number | string;
//}

//export interface UpNumberStyledProps extends UpNumberProps {
//    dataFor?: string; // For tooltip
//    handleNumericChange?: (valueAsNumber: number, valueAsString: string) => void;
//}

//export default  class UpNumber extends BaseControlComponent<UpNumberProps, number | string> {
//    public static defaultProps = {
//        decimalPlace: 2,
//        showError: true,
//        max: Infinity,
//        min: -Infinity
//    };

//    constructor(p, c) {
//        super(p, c);
//        this.state = {
//            value: p.value
//        }
//        this._validationManager.addControl(new TypeNumberControl(this.props.decimalPlace === 0, this.props.min, this.props.max));
//    }

//    round = (value, decimals) => {
//        decimals = Math.abs(parseInt(decimals)) || 0;
//        var multiplier = Math.pow(10, decimals);
//        return Math.round(value * multiplier) / multiplier;
//    }

//    handleNumericChange = (valueAsNumber: number, valueAsString: string) => {
//        if (this.props.decimalPlace != null) {
//            var _newValue = this.round(valueAsNumber, this.props.decimalPlace);
//            if (isNaN(valueAsNumber)) {
//                this.handleChangeEvent(this.state.value);
//            } else if (_newValue === valueAsNumber && _newValue.toString() !== valueAsString) {
//                this.handleChangeEvent(valueAsString);
//            } else {
//                this.handleChangeEvent(valueAsNumber);
//            }
//        } else {
//            this.handleChangeEvent(valueAsNumber);

//        }
//    }

//    getValue(value) {
//        return value;
//    }

//    renderControl() {
//        const { isRequired, onChange, readonly, decimalPlace, stepSize, value, tooltip } = this.props;
//        var s = style({
//            $nest: {
//                "& .pt-input-group": { flex: "1 1 auto" }
//            }
//        })
//        return (
//            <TextInput Type={InputTypeEnum.Number} Placeholder="placeholder" />

//            //<input type="number" onChange={(e) => { this.handleNumericChange(parseFloat(e.target.value), e.target.value) }} value={this.state.value} />
//            //<NumericInput
//            //    className={s}
//            //    value = { this.state.value }
//            //    stepSize={stepSize}
//            //    majorStepSize={stepSize ? stepSize + 10 : 10}
//            //    onValueChange={this.handleNumericChange}
//            //    minorStepSize={1 / (Math.pow(10, this.props.decimalPlace))}>
//            //</NumericInput>
//        );
//    }
//}
