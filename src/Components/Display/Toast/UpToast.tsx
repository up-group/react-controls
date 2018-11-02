import * as React from 'react';

import Box from '../../Containers/Box';
import {UpBoxProps} from '../../Containers/Box/UpBox';
import { style } from 'typestyle';
import { getStyle, buttonStyle } from './styles';

export type Status = 'ok' | 'warning' | 'error' | 'none';

export interface UpToastStyledProps extends UpBoxProps {
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

type ToasWrapperProps  = UpToastStyledProps & React.HTMLProps<HTMLDivElement> ;

const ToasWrapper : React.StatelessComponent<ToasWrapperProps> = (props: ToasWrapperProps) => {
    const {children, ...others} = props ;
    return <div className={getStyle(props)} {...others}>
        {children}
    </div>
}

type ToastButtonProps  = React.HTMLProps<HTMLButtonElement> ;

const ToastButton : React.StatelessComponent<ToastButtonProps> = (props: ToastButtonProps)  => {
    const {children, ...others} = props ;
    return <button className={style(buttonStyle)} {...others}>
        {children}
    </button>
}

export default class Toast extends React.Component<Props, State> {
  public static defaultProps = {
    status: 'none' as Status,
  };
  constructor(props, context) {
    super(props, context);
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
      <ToasWrapper {...this.state}>
        <Box alignItems="center" justifyContent="center" flexDirection="row" pad="medium" style={{ width: 'auto' }}>
          <Box style={{ flexGrow: 2 }}>
            {message != null  && message}
            {children != null  && children}
          </Box>
          <Box alignItems="flex-end" justifyContent="flex-end">
            <ToastButton onClick={this.handleClose}>
              <span>X</span>
            </ToastButton>
          </Box>
        </Box>
      </ToasWrapper>
    );
  }
}