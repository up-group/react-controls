import * as React from 'react';
import { TextInputComponent, EmailInputComponent} from './styles';
import { Size } from './types';

export interface Props extends React.HTMLProps<HTMLInputElement & Input> {
  color?: string;
  backgroundColor?: string;
  fontSize?: Size;
  isEmail?: boolean;
  borderColor?: string;
}

class Input extends React.Component<Props, undefined> {
  public static defaultProps: Props = {
    color: '#fefefe',
    backgroundColor: '#c05b4d',
    borderColor: '#732419',
    fontSize: 'medium',
    isEmail: false
  };
  public render() {
    if (this.props.isEmail) {
      return (
        <EmailInputComponent
          type="email"
          style={this.props.style}
          borderColor={this.props.borderColor}
          onClick={this.props.onClick}
          color={this.props.color}
          backgroundColor={this.props.backgroundColor}
          fontSize={this.props.fontSize}
        >
          {this.props.children}
        </EmailInputComponent>
      );
    }
    return (
      <TextInputComponent
        type="text"
        onClick={this.props.onClick}
        color={this.props.color}
        backgroundColor={this.props.backgroundColor}
        fontSize={this.props.fontSize}
      >
        {this.props.children}
      </TextInputComponent>
    );
  }
}

export default Input;
