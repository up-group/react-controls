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
  iconSize?:string;
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
    iconSize:"24px",
    theme: {}
  };
  public render() {
    const {children,isHero, ...rest} = this.props ;
    if (isHero) {
      return (
        <HeroButton {...rest}>
          {children}
        </HeroButton>
      );
    }

    return (
      <BaseButton {...rest}>
        {children}
      </BaseButton>
    );
  }
}

export default Button;
