import * as React from 'react';
import Box from '../../Containers/Box';
//import Component, { Button } from './styles';
import {UpBoxProps} from '../../Containers/Box/UpBox';
import { Status } from './types';

export interface StyledProps extends UpBoxProps {
  status?: Status;
  isVisible: boolean;
  isUnmounting: boolean;
}

export interface Props extends UpBoxProps {
  message?: JSX.Element | string ;
  children?: JSX.Element;
  onClose?: () => void;
  status?: Status;
}

export interface State {
  isVisible: boolean;
  isUnmounting: boolean;
}

export default class Toast extends React.Component<Props, State> {
  public static defaultProps = {
    status: 'none' as Status,
  };
  constructor() {
    super();
    this.handleClose = this.handleClose.bind(this);
    this.state = {
      isVisible: true,
      isUnmounting: false,
    };
  }
  public componentDidMount() {
    setTimeout(() => {
      this.handleClose();
    }, 5000);
  }
  private handleClose() {
    this.setState({
      isUnmounting: true,
    });
    setTimeout(() => {
      if (this.props.onClose) {
        this.props.onClose();
      }
      this.setState({
        isUnmounting: false,
        isVisible: false,
      });
    }, 1000);
  }
  public render() {
    const { isVisible } = this.state;
    const { message, children, status } = this.props;
    if (!isVisible) {
      return null;
    }
    return (
      <div /*status={status} {...this.state}*/>
        <Box alignItems="center" justifyContent="center" flexDirection="row" pad="medium" style={{ width: 'auto' }}>
          <Box style={{ flexGrow: 2 }}>
            {message != null  && message}
            {children != null  && children}
          </Box>
          <Box alignItems="flex-end" justifyContent="flex-end">
            <button onClick={this.handleClose}>
              ✕
            </button>
          </Box>
        </Box>
      </div>
    );
  }
}