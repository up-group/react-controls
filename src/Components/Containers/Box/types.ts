export const SIZE_MAP = {
    none: 0,
    small: 12,
    medium: 24,
    large: 48,
    xlarge: 96,
};

export const BOX_SIZE_MAP = {
    xxsmall: 48,
    xsmall: 96,
    small: 192,
    medium: 384,
    large: 576,
    xlarge: 720,
    xxlarge: 960,
};

export type Size = 'none' | 'small' | 'medium' | 'large' | 'xlarge';
export type Breakpoint = 'mobile' | 'tablet' | 'desktop';
export type BoxSize = 'auto' | 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge' | 'full';
export type Full = boolean | FullObject;
export type WrapOption = 'wrap' | 'wrap-reverse' | 'nowrap';
export type Selectable = 'none' | 'auto';

export interface SizeObject {
    horizontal?: Size;
    vertical?: Size;
};

export interface ResponsiveSize {
    mobile?: Size | SizeObject,
    tablet?: Size | SizeObject,
    desktop?: Size | SizeObject,
};

export interface BoxSizeObject { 
    horizontal?: BoxSize; 
    vertical?: BoxSize; 
};

export interface FullObject { 
    horizontal?: boolean; 
    vertical?: boolean; 
};

export interface SizeStyle {
    height: string;
    width: string;
};

export interface UpBoxProps {
    /** Direction of the items flow */
    flexDirection?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
    /** Alignment of the items flow inside the box on the main axe */
    alignContent?: 'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around' | 'stretch';
    /** Alignment of the items flow inside the box on the main axe */
    justifyContent?: 'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around' | 'normal';
    /** Define the align-self property of all children */
    alignItems?: 'flex-start' | 'center' | 'flex-end' | 'baseline' | 'stretch'| 'normal';
    /** Sets whether flex items are forced onto one line or can wrap onto multiple lines  */
    flexWrap?: boolean;
    /** Apply the reverse alignment order  */
    reverse?: boolean;
    /** Define a specific size both horizontally and vertically  */
    boxSize?: BoxSize | BoxSizeObject;
    /** Define a specific padding for the box  */
    pad?: Size | SizeObject;
    /** Define a specific margin for the box  */
    margin?: Size | SizeObject;
    /** Define the font color inside the box  */
    color?: string;
    /** Specify a background color */
    backgroundColor?: string;
    /** Specify a background image */
    backgroundImage?: string;
    /** Make the box using the full width and heigth of the parent container */
    full?: Full;
    /** Does the box selectable */
    selectable?: Selectable;
    /** Specify a specific style for the box */
    style?: React.CSSProperties;
    /** Specify a specific className for the box */
    className?: string;
    /** Add click handler on the Box */
    onClick?: (event: React.MouseEvent<any>) => void;
};