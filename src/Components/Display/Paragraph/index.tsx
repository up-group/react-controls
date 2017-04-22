// Imports
import UpParagraph from './UpParagraph' ;

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
}

export interface UpParagraphStyledProps extends UpParagraphProps {}

export default UpParagraph