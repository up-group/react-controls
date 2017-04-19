import * as React from "react"
import { BaseControl } from "../../../Common/BaseControl/BaseControl";
import { InputStyled, CommonProps } from "./../_Styled/Input/BaseInput"
import { TexAreatStyled } from "../_Styled/Textarea/styles";

export interface UpTextProps {
    multiline?:boolean;
    defaultValue?: string;
    value: string;
}

export default class UpText extends BaseControl<UpTextProps, {}> {
    
    constructor(p, c) {
        super(p, c);
        this.onChange = this.onChange.bind(this) ;
    }
    
    renderControl(): JSX.Element {
        if(this.props.multiline === true){
            return (<TexAreatStyled hasError={this.hasError()} onChange={this.handleChangeEvent}  />)
        }
        return <InputStyled hasError={this.hasError()} onChange={this.handleChangeEvent}/>
    }

    onChange(event: any) {
        return event.target.value;
    }
}
