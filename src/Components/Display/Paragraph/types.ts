export type ParagraphSize = 'small' | 'medium' | 'large' | 'xlarge';
export type Margin = 'none' | 'small' | 'medium' | 'large';
export type TextAlign = 'left' | 'right' | 'center' | 'justify';

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
  /** To set text color */
  color?: string;
  /** To set the horizontal alignment of text */
  textAlign?: TextAlign;
  /** To set text size */
  paragraphSize?: ParagraphSize;
  /** To Specify Text Margin */
  margin?: Margin;
  /** To add className for text customization style */
  className?: string;
  /** To provide content */
  children?: string | JSX.Element | Array<React.ReactNode>;
}
