// Imports
import remStringFromPX from '../../../Common/utils';
import { NestedCSSProperties } from 'typestyle/lib/types';
import { style } from 'typestyle';
import { SizeMap, MarginSizeMap, Margin, ParagraphSize, UpParagraphProps } from './UpParagraph';

// Exports
const sizeMap: SizeMap = {
  small: 14,
  medium: 16,
  large: 24,
  xlarge: 32,
};

const marginSizeMap: MarginSizeMap = {
  none: 0,
  small: 12,
  medium: 24,
  large: 48,
};

export function calculateMargin(margin: Margin): string {
  return remStringFromPX(marginSizeMap[margin]);
};

export function calculateSize(size: ParagraphSize): string {
  return remStringFromPX(sizeMap[size]);
};

const defaultProps: UpParagraphProps = {
  color: '#fff',
  textAlign: 'center',
  paragraphSize: 'medium',
  margin: 'medium',
};

export const marginCss = (margin: Margin) : NestedCSSProperties => {
  return {
    marginTop: calculateMargin(margin),
    marginBottom: calculateMargin(margin),
  }
};

export const getStyles = (props : UpParagraphProps) => (
  style({
      maxWidth: '630px',
      textAlign: props.textAlign || defaultProps.textAlign,
      color: props.color || defaultProps.color,
      ...marginCss(props.margin || defaultProps.margin),
      fontSize: calculateSize(props.paragraphSize || defaultProps.paragraphSize),
  } as NestedCSSProperties)
)
