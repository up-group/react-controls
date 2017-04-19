import * as React from 'react';
import { HeroButton, BaseButton} from './styles';
import { Size } from './types';

// This is so that the onClick handler is accepted without type interferance
export interface Props extends React.HTMLProps<HTMLButtonElement & Button> {
  color?: string;
  backgroundColor?: string;
  fontSize?: Size;
  isHero?: boolean;
  borderColor?: string;
  disabled? : boolean;
  shadow? : boolean;
  theme?: any;
  iconName?:any;
  iconSize?:number;
}

class Button extends React.Component<Props, undefined> {
  public static defaultProps: Props = {
    color: '#fefefe',
    backgroundColor: '#c05b4d',
    borderColor: '#732419',
    fontSize: 'medium',
    isHero: false,
    disabled:false,
    shadow:false,
    iconName:false,
    iconSize:12,
    theme: {}
  };
  public render() {
    const {children,isHero, ...rest} = this.props ;
    if (isHero) {
      return (
        <HeroButton {...rest}>
         <span>{children}</span>
        </HeroButton>
      );
    }

    return (
      <BaseButton {...rest}>
        <span>{children}</span>
      </BaseButton>
    );
  }
}

export default Button;
