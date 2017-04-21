// Imports
import "normalize.css/normalize.css"
import "@blueprintjs/core/dist/blueprint.css"
import * as React from "react"
import { UpDateTimeProps } from './'
import { InputBaseComponent } from '../_Common/BaseControl/BaseControl'
import UpDateStyle from './styles'

export default class UpDateTime extends InputBaseComponent<UpDateTimeProps, Date> {

    public static defaultProps: UpDateTimeProps = {
        format:"DD/MM/YYYY",
        value:null
    };

    constructor(p, c) {
        super(p, c);
        this.onChange = this.onChange.bind(this) ;
        this.state = {
            innerValue : p.value
        };
    }

    componentDidMount = () => {
    }

    onChangeDate = (date:Date) => {
        var current = this.state.innerValue ;
        date.setHours(current.getHours()) ;
        date.setMinutes(current.getMinutes()) ;
        
        this.setState({
            innerValue:date
        }) ;
        this.handleChangeEvent(date) ;
    }

    onChangeTime = (time:Date) => {
        var current = this.state.innerValue ;
        time.setDate(current.getDate()) ;
        time.setMonth(current.getMonth()) ;
        time.setFullYear(current.getFullYear()) ;

        this.setState({
            innerValue:time
        }) ;
        this.handleChangeEvent(time) ;
    }

    renderControl() {
        return <UpDateStyle format={this.props.format} value={this.props.value} hasError={this.props.hasError} 
            onChangeDate={this.onChangeDate}
            onChangeTime={this.onChangeTime}></UpDateStyle>;
    }

    onChange(newDate: any) {
        return newDate;
    }

    getDate(date:string) {
        // check the date with a regexp
        var dateParts = date.split("/");
        return new Date(parseInt(dateParts[2]), parseInt(dateParts[1]) - 1, parseInt(dateParts[0])); // month is 0-based
    }
}