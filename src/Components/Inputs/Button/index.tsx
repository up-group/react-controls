import UpButton from './UpButton'

export default UpButton ;

export const sizeMap = {
  xsmall: 10,
  small: 12,
  medium: 16,
  large: 20,
  xlarge: 24,
};

export type Size = 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge';

// This is so that the onClick handler is accepted without type interferance
export interface UpButtonProps extends React.HTMLProps<HTMLButtonElement & UpButton> {
  color?: string;
  backgroundColor?: string;
  fontSize?: Size;
  borderColor?: string;
  disabled? : boolean;
  shadow? : boolean;
  theme?: any;
  iconName?:any;
  iconSize?:number;
}
