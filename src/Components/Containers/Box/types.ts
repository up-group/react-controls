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

export const BREAKPOINTS = {
  phone: 480,
  tablet: 768,
  desktop: 1024,
};

export type Size = 'none' | 'small' | 'medium' | 'large' | 'xlarge';
export interface SizeObject { horizontal?: Size; vertical?: Size; };
export type Breakpoint = 'mobile' | 'tablet' | 'desktop';
export interface ResponsiveSize {
  mobile?: Size | SizeObject,
  tablet?: Size | SizeObject,
  desktop?: Size | SizeObject,
}
export type BoxSize =  'auto' | 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge' | 'full' ;
export interface BoxSizeObject { horizontal?: BoxSize; vertical?: BoxSize; };
export interface FullObject { horizontal?: boolean; vertical?: boolean; };
export type Full = boolean | FullObject;
export type WrapOption = 'wrap' | 'wrap-reverse' | 'nowrap';
export type Rem = number;
export type Px = number;

export interface SizeStyle {
  height: string;
  width: string;
}