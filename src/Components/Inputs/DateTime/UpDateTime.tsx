// Imports
import "normalize.css/normalize.css"
import "@blueprintjs/core/dist/blueprint.css"
import * as React from "react"
import { UpDateTimeProps } from './'
import { InputBaseComponent } from '../_Common/BaseControl/BaseControl'
import UpDateStyle from './styles'

const MIN_DATE = new Date(-8640000000000) ;
const MAX_DATE = new Date(+8640000000000) ;

export default class UpDateTime extends InputBaseComponent<UpDateTimeProps, Date> {

    public static defaultProps: UpDateTimeProps = {
        format:"DD/MM/YYYY",
        value:null
    };

    constructor(p, c) {
        super(p, c);
        this.onChange = this.onChange.bind(this) ;
        this.state = {
            value : p.value
        };
    }

    componentDidMount = () => {
    }

    onChangeDate = (date:Date) => {
        var current = this.state.value ;
        if(current!=null) {
            date.setHours(current.getHours()) ;
            date.setMinutes(current.getMinutes()) ;
        }
        
        this.setState({
            value:date
        }) ;
        this.handleChangeEvent(date) ;
    }

    onChangeTime = (time:Date) => {
        var current = this.state.value ;
        if(current!=null) {
            time.setDate(current.getDate()) ;
            time.setMonth(current.getMonth()) ;
            time.setFullYear(current.getFullYear()) ;
        }
        this.setState({
            value:time
        }) ;
        this.handleChangeEvent(time) ;
    }
    
    componentWillReceiveProps(nextProps: UpDateTimeProps) {
        if (nextProps.value !== this.props.value) {
            this.setState({value: nextProps.value });
        }
    }

    renderControl() {
        return <UpDateStyle format={this.props.format} value={this.state.value} hasError={this.props.hasError} 
            onChangeDate={this.onChangeDate}
            disabled={this.props.disabled}
            minDate={this.props.minDate ? this.props.minDate : MIN_DATE}
            maxDate={this.props.maxDate? this.props.maxDate : MAX_DATE}
            onChangeTime={this.onChangeTime}></UpDateStyle>;
    }

    onChange(newDate: any) {
        return newDate;
    }
}