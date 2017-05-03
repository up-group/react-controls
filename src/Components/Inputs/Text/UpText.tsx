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
    
    renderControl(): JSX.Element {
        const {value, onChange, readonly, tooltip, ...others} = this.props ;
        return (<TexAreatStyled value={this.state.value} hasError={this.hasError()} onChange={this.handleChangeEvent} {...others} />)
    }

    onChange(event: any) {
        return event.target.value;
    }
}
