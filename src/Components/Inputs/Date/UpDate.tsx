import "normalize.css/normalize.css"
import "@blueprintjs/core/dist/blueprint.css"

import * as React from "react"
import { UpDateProps, UpDateStyledProps } from './'
import { InputBaseComponent } from '../_Common/BaseControl/BaseControl'
import UpDateStyle from './styles'

const MIN_DATE = new Date(-8640000000000) ;
const MAX_DATE = new Date(+8640000000000) ;

export default class UpDate extends InputBaseComponent<UpDateProps, Date> {

    public static defaultProps: UpDateProps = {
        format:"DD/MM/YYYY",
        value:null
    };

    constructor(p, c) {
        super(p, c);
        this.onChange = this.onChange.bind(this) ;
        this.state = {value: this.props.value };
    }
    
    componentWillMount = () => {
    }

    componentWillReceiveProps(nextProps: UpDateProps) {
        if (nextProps.value !== this.props.value) {
            this.setState({value: nextProps.value });
        }
    }
    
    shouldComponentUpdate(nextProps, nextState) {
        var shouldUpdate:boolean = nextState.value != this.state.value;
        if(shouldUpdate===false) {
            shouldUpdate = this.props.disabled != nextProps.disabled
                        || this.props.format != nextProps.format
                        || this.props.maxDate != nextProps.maxDate
                        || this.props.minDate != nextProps.minDate
                        || this.props.readonly != nextProps.readonly
                        || this.props.theme !== nextProps.theme
       }
       return shouldUpdate;
    }

    renderControl() {
        return <UpDateStyle 
            format={this.props.format} value={this.state.value} hasError={this.props.hasError} onChange={this.handleChangeEvent}
            disabled={this.props.disabled}
            minDate={this.props.minDate? this.props.minDate : MIN_DATE}
            maxDate={this.props.maxDate? this.props.maxDate : MAX_DATE}></UpDateStyle>;
    }

    onChange(newDate: any) {
        return newDate;
    }
}
