import * as React from 'react';
import { getStyles } from './styles';

// Exports
export type ParagraphSize = 'small' | 'medium' | 'large' | 'xlarge';
export type Margin = 'none' | 'small' | 'medium' | 'large';


export interface SizeMap {
  small: number;
  medium: number;
  large: number;
  xlarge: number;
}

export interface MarginSizeMap {
  none: number;
  small: number;
  medium: number;
  large: number;
}

export interface UpParagraphProps {
  color?: string;
  textAlign?: string;
  paragraphSize?: ParagraphSize;
  margin?: Margin;
  children?: string | JSX.Element | Array<React.ReactNode>
}

const UpParagraph : React.StatelessComponent<UpParagraphProps> = (props : UpParagraphProps) => {
    const {children} = props ;   
    return <p className={getStyles(props)}>{children}</p>
} ;

export default UpParagraph;
