import * as React from "react"

export interface UpHoverProps {
    onHoverChange: (hover: boolean) => void;
}

export interface UpHoverState {
    hover: boolean;
}

export default class UpHover extends React.Component<UpHoverProps, UpHoverState>{

    constructor(p, c) {
        super(p, c);
    }

    render() {
        return <div onMouseEnter={this.onMouseEnterHandler} onMouseLeave={this.onMouseLeaveHandler}>
            {this.props.children}
        </div>
    }

    onMouseEnterHandler = () => {
        this.setState({ hover: true }, this.onStateChange);
    }
    onMouseLeaveHandler = () => {
        this.setState({ hover: false }, this.onStateChange);
    }

    onStateChange = () => {
        this.props.onHoverChange(this.state.hover);
    }
}