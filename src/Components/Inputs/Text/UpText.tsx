import * as React from "react"
import { InputBaseComponent } from "../_Common/BaseControl/BaseControl";
import { InputStyled, CommonProps } from "../_Common/Styled/Input/BaseInput"
import { TexAreatStyled } from "./styles";

export interface UpTextProps {
    multiline?:boolean;
    defaultValue?: string;
    value: string;
}

export default class UpText extends InputBaseComponent<UpTextProps, {}> {
    public static defaultProps: UpTextProps = {
        value:"",
        multiline:true
    }
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
