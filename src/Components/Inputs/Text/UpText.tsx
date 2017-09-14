// Imports
import * as React from "react"
import { BaseControlComponent } from "../_Common/BaseControl/BaseControl"
import { TexAreatStyled } from "./styles";
import { UpTextProps } from './'
import defaultTheme from '../../../Common/theming'
 
// Exports
export default class UpText extends BaseControlComponent<UpTextProps, string> {
    public static defaultProps:UpTextProps = {
        width: 'medium',
        showError: true,
        theme:defaultTheme
    }
    
    constructor(p, c) {
        super(p, c);
        this.getValue = this.getValue.bind(this) ;
        this.state = {
            value:p.value
        }
    }
    
    renderControl(): JSX.Element {
        const {value, onChange, readonly, tooltip, ...others} = this.props ;
        return (<TexAreatStyled value={this.state.value} hasError={this.hasError()} onChange={this.handleChangeEvent} {...others} />)
    }

    getValue(event: any) {
        return (event != null && event.target != null) ? event.target.value : event ;
    }
}