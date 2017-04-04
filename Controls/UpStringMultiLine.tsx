import * as React from "react";
import * as ReactDOM from "react-dom";

interface UpStringMultiLineProps {
    hasError: boolean;
    onChange: (value: number[]) => void;
}

export default class UpStringMultiLine extends React.Component<UpStringMultiLineProps, {}> {
    constructor(p, c) {        super(p, c);
    }    render() {
        return <textarea
            style={this.props.hasError === true ? { borderColor: "red" } : null}
            type="text"
            className="form-control"
            onChange={this.onchange} ></textarea>

    }   

    onchange = (event) => {
        this.props.onChange(event.target.value);
    }


}