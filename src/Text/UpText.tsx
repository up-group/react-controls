import * as React from "react"
import {UpTextProps} from "./types"
import TextStyle from "./styles"

export default class UpText extends React.Component<UpTextProps, {}> {
    constructor(p, c) {
        super(p, c);
    }

    render() {

        return (<TextStyle  hasError={this.props.hasError}
                            className={this.props.className}
                            onChange={this.onChange}></TextStyle>)
    }

    onChange = (event) => {
        this.props.onChange(event.target.value);
    }
}
