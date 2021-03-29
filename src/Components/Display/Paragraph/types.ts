export type ParagraphSize = 'small' | 'medium' | 'large' | 'xlarge';
export type Margin = 'none' | 'small' | 'medium' | 'large';
export type TextAlign = 'left' | 'right' | 'center' | 'justify';

export interface SizeMap {
    small: number;
    medium: number;
    large: number;
    xlarge: number;
};

export interface MarginSizeMap {
    none: number;
    small: number;
    medium: number;
    large: number;
};

export interface UpParagraphProps {
    /** To set Text color*/
    color?: string;
    /** To set the horizontal alignment of Paragraph Element*/
    textAlign?: TextAlign;
    /** To set Text Size*/
    paragraphSize?: ParagraphSize;
    /** To Specify Text Margin*/
    margin?: Margin;
    /** To add customized className*/
    className?: string;
    /** Paragraph content*/
    children?: string | JSX.Element | Array<React.ReactNode>;
};