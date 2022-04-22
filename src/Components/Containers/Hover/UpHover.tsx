import React from 'react';

export interface UpHoverProps {
  onHoverChange: (hover: boolean) => void;
}

export interface UpHoverState {
  hover: boolean;
}

export default class UpHover extends React.Component<UpHoverProps, UpHoverState> {
  state = {
    hover: false,
  };

  onMouseEnterHandler = () => {
    this.setState({ hover: true }, this.onStateChange);
  };

  onMouseLeaveHandler = () => {
    this.setState({ hover: false }, this.onStateChange);
  };

  onStateChange = () => {
    this.props.onHoverChange(this.state.hover);
  };

  render() {
    const { children } = this.props;

    return (
      <div onMouseEnter={this.onMouseEnterHandler} onMouseLeave={this.onMouseLeaveHandler}>
        {children}
      </div>
    );
  }
}
