// Imports
import { marginCss } from '../Paragraph/styles';
import remStringFromPX from '../../../Common/utils';
import { NestedCSSProperties } from 'typestyle/lib/types';
import { Tag, UpHeadingProps } from './UpHeading';
import { style } from 'typestyle';

//const sizeMap = {
//  h1: 36,
//  h2: 30,
//  h3: 24,
//  h4: 18,
//  h5: 16
//};

//const calculateSize = (tag: Tag): string => remStringFromPX(sizeMap[tag]);

const truncateCss = (truncate: boolean) : NestedCSSProperties => {
  if (truncate) {
    return {
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
    }
  }
  return {};
};

const textTransformCss = (upcase: boolean) => {
  if (upcase) {
    return {
      textTransform: 'uppercase',
    }
  }
  return {};
};

export const getStyles = (props: UpHeadingProps) : string => (
  style({
    fontSize: calculateSize(props.tag),
    textAlign: props.textAlign,
    color: props.color,
    ...truncateCss(props.truncate),
    ...textTransformCss(props.upcase),
    ...marginCss(props.margin),
  } as NestedCSSProperties)
)
