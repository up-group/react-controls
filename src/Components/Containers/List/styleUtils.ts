import remStringFromPX from '../../../Common/utils';

export interface SizeMap {
  xsmall : number;
  small: number;
  medium: number;
  large: number;
  xlarge: number;
}

const sizeMap: SizeMap = {
  xsmall: 10,
  small: 30,
  medium: 48,
  large: 60,
  xlarge: 72,
};

export type HeadlineSize = 'xsmall' | 'small' | 'medium' | 'xlage' | 'xlarge' | string ;
export default function calculateSize(size: HeadlineSize): string {
  if(typeof sizeMap[size] != "undefined")
    return remStringFromPX(sizeMap[size]);
  else
    return size ;
};
