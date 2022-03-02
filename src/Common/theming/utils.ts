import { rem } from 'csx';

export const BREAKPOINTS = {
  phone: 480,
  tablet: 768,
  desktop: 1024,
};

const rootRem = 16;

export const toRem = (px: number): string | number => rem(px / rootRem);
