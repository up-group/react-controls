import * as React from "react"
import {UpTextProps} from "./types"
import TextStyle from "./styles"

export default class UpText extends React.Component<UpTextProps, {}> {
    constructor(p, c) {
        super(p, c);
        this.onChange = this.onChange.bind(this) ;
    }

    render() {
        const {hasError, className, value} = this.props ;
        return (<TextStyle onChange={this.onChange} hasError={hasError} className={className} value={value}></TextStyle>)
    }

    onChange = (event) => {
        this.props.onChange(event.target.value);
    }
}
