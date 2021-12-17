// Imports
import { marginCss } from '../Paragraph/styles';
import remStringFromPX from '../../../Common/utils';
import { NestedCSSProperties } from 'typestyle/lib/types';
import { Tag, UpHeadingProps } from './types';
import { style } from 'typestyle';
import { toRem } from '../../../Common/theming/utils';

const sizeMap = {
  h1: 32, // 24 pt
  h2: 26.7, // 20 pt
  h3: 21.3, // 16 pt
  h4: 18.7, // 14 pt
  h5: 18,
  h6: 16, // 16 pt
};

const calculateSize = (tag: Tag): string => remStringFromPX(sizeMap[tag]);

const truncateCss = (truncate: boolean): NestedCSSProperties => {
  if (truncate) {
    return {
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
    };
  }
  return {};
};

const textTransformCss = (upcase: boolean) => {
  if (upcase) {
    return {
      textTransform: 'uppercase',
    };
  }
  return {};
};

export const getStyles = (props: UpHeadingProps): string =>
  style({
    fontSize: calculateSize(props.tag),
    textAlign: props.textAlign,
    color: props.color,
    letterSpacing: 'normal',
    ...truncateCss(props.truncate),
    ...textTransformCss(props.upcase),
    ...marginCss(props.margin),
  } as NestedCSSProperties);
