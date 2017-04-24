// Imports
import * as React from "react"
import { InputBaseComponent } from "../_Common/BaseControl/BaseControl"
import { TexAreatStyled } from "./styles";
import { UpTextProps } from './'
 
// Exports
export default class UpText extends InputBaseComponent<UpTextProps, string> {
    public static defaultProps: UpTextProps = {
        value:"",
        width:'medium'
    }
    constructor(p, c) {
        super(p, c);
        this.onChange = this.onChange.bind(this) ;
        this.state = {
            value:p.value
        }
    }
    
    componentWillReceiveProps(nextProps: UpTextProps) {
        if (nextProps.value !== this.props.value) {
            this.setState({value: nextProps.value });
        }
    }

    renderControl(): JSX.Element {
        const {value, onChange, onError, readonly, ...others} = this.props ;
        return (<TexAreatStyled value={this.state.value} hasError={this.hasError()} onChange={this.handleChangeEvent} {...others} />)
    }

    onChange(event: any) {
        return event.target.value;
    }
}
