import * as React from "react";

export interface ErrorDisplayProps {
    error: string;
    showError: boolean;
    hasError: boolean;
}

export default class ErrorDisplay extends React.Component<ErrorDisplayProps, {}> {
    constructor(p, c) {
        super(p, c);
    }

    render() {
        return <div>
            {this.props.children}
            {this.props.showError === true && this.props.hasError === true ? (<span style={{ color: "red" }}>{this.props.error}</span>) : "\u00a0"}

        </div>
    }
}
