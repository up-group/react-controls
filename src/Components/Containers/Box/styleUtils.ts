import {
  Size,
  SizeObject,
  ResponsiveSize,
  Breakpoint,
  BoxSize,
  BoxSizeObject,
  Full,
  WrapOption,
  SizeStyle,
  Rem,
  Px,
  SIZE_MAP, 
  BOX_SIZE_MAP
} from './types';

const rootRem: number = 16;
const remFromPX = (px: Px): Rem => (px / rootRem);

export function calculateFlexWrap(wrap?: boolean, reverse?: boolean): WrapOption {
  if (wrap && reverse) {
    return 'wrap-reverse';
  } else if (wrap && !reverse) {
    return 'wrap';
  } else {
    return 'nowrap';
  }
}

export function sizeToString(size: Size | SizeObject, smallSize: boolean = false): string {
  let returnVal;
  if (typeof size === 'string') {
    returnVal = `${remFromPX(SIZE_MAP[size])}rem`;
  } else if (typeof size === 'object') {
    const horizontal = size.horizontal || 'none';
    const vertical = size.vertical || 'none';
    returnVal = `${remFromPX(SIZE_MAP[vertical])}rem ${remFromPX(SIZE_MAP[horizontal])}rem`;
  } else {
    returnVal = `0rem`;
  }
  return returnVal;
}

function stringBoxStyle(size: BoxSize): SizeStyle {
  if (size === 'full') {
    return {
      width: '100vw',
      height: '100vh',
    };
  } else if (size === 'auto') {
    return {
      width: 'auto',
      height: 'auto',
    };
  } else {
    return {
      width: size ? `${remFromPX(BOX_SIZE_MAP[size])}rem` : '',
      height: size ? `${remFromPX(BOX_SIZE_MAP[size])}rem` : '',
    };
  }
}

function objectBoxStyle(size: BoxSizeObject): SizeStyle {
  let width = 'auto';
  let height = 'auto';
  if (size.vertical) {
    height = size.vertical === 'full'
      ? '100vh'
      : `${remFromPX(BOX_SIZE_MAP[size.vertical])}rem`;
  }
  if (size.horizontal) {
    width = size.horizontal === 'full'
      ? '100%'
      : `${remFromPX(BOX_SIZE_MAP[size.horizontal])}rem`;
  }
  return {
    width,
    height,
  };
}

export function boxSizeToStyle(size: BoxSize | BoxSizeObject): SizeStyle {
  if (typeof size === 'string') {
    return stringBoxStyle(size);
  } else if (typeof size === 'object') {
    return objectBoxStyle(size);
  } else {
    return { width: 'auto', height: 'auto' };
  }
}

export function calculateFullStyle(full: Full, postFix: 'vw' | 'vh'): string {
  if (typeof full === 'object') {
    if (postFix === 'vw') {
      return full.horizontal ? `100%` : 'auto';
    } else {
      return full.vertical ? `100%` : 'auto';
    }
  } else if (typeof full === 'boolean') {
    return full ? `100%` : 'auto';
  }
  return 'auto';
}