import * as React from "react";


export interface ErrorDisplayProps {
    error: string;
}

export default class ErrorDisplay extends React.Component<ErrorDisplayProps, {}> {
    constructor(p, c) {
        super(p, c);
    }

    render() {

        return <div>
            {this.props.children}
            <span style={{color:"red"}}>{this.props.error}</span>
        </div>


    }

   
}
