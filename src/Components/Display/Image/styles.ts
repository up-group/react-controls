import remStringFromPx from '../../../Common/utils';
import { NestedCSSProperties } from 'typestyle/lib/types';
import { UpImageProps } from './UpImage';
import { style } from 'typestyle';

const imageSizeMap = {
  thumb: 50,
  xxsmall: 100,
  xsmall: 200,
  small: 300,
  medium: 400,
  large: 500,
  xlarge: 600,
  full: 1200,
};

export const imageStyle = ({ imageSize }: UpImageProps): NestedCSSProperties => {
  const sizeWithDefault = imageSize || 'small';
  const px = imageSizeMap[sizeWithDefault];
  const rem = remStringFromPx(px);
  if (sizeWithDefault === 'full') {
    return {
      width: '100vw',
      height: 'auto',
    };
  }
  if (sizeWithDefault === 'thumb') {
    return {
      width: rem,
      height: rem,
      flex: '0 0 auto',
      objectFit: 'cover',
    };
  }
  return {
    maxWidth: '100%',
    height: 'auto',
    minHeight: rem,
    maxHeight: rem,
    display: 'block',
  };
};

export const getStyles = (props: UpImageProps): string => style(imageStyle(props));
