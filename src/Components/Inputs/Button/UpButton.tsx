import * as React from 'react';
import { BaseButton} from './styles';
import { UpButtonProps } from './';

export default class UpButton extends React.Component<UpButtonProps, undefined> {
  public static defaultProps: UpButtonProps = {
    color: '#fefefe',
    backgroundColor: '#c05b4d',
    borderColor: '#732419',
    fontSize: 'medium',
    disabled:false,
    shadow:false,
    iconName:false,
    iconSize:12,
    theme: {}
  };
  public render() {
    const {children, ...rest} = this.props ;
    
    return (
      <BaseButton {...rest}>
        <span>{children}</span>
      </BaseButton>
    );
  }
}
