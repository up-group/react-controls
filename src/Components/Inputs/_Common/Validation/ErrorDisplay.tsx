import * as React from "react";

export interface ErrorDisplayProps {
    error: string;
    showError: boolean;
}

export default class ErrorDisplay extends React.Component<ErrorDisplayProps, {}> {
    constructor(p, c) {
        super(p, c);
    }

    render() {
        return <div>
            {this.props.children}
            <span style={{ color: "red", display: this.props.showError ? "none" : null }}>{this.props.error}</span>
        </div>
    }
}
