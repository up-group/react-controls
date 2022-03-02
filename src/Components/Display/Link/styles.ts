// Imports
import { NestedCSSProperties } from 'typestyle/lib/types';
import { UpLinkProps } from './types';
import { style } from 'typestyle';
import { WithThemeProps } from '../../../Common/theming';
import { color } from 'csx';
import { toRem } from '../../../Common/theming/utils';

const plainStyle = (props: UpLinkProps): NestedCSSProperties => {
  if (props.plain) {
    return {
      textDecoration: 'inherit',
      lineHeight: 'inherit',
      cursor: 'pointer',
    };
  }
  return {
    textDecoration: 'underline',
    lineHeight: 'inherit',
    cursor: 'pointer',
  };
};

const colorStyle = (props: UpLinkProps & WithThemeProps) => {
  return {
    color: props.color || props.theme.colorMap.primary,
    $nest: {
      '&:hover': {
        color: props.color ? color(props.color).darken(0.1).toHexString() : props.theme.colorMap.primary,
      },
    },
  };
};

export const getStyles = (props: UpLinkProps): string =>
  style({
    fontSize: toRem(16),
    lineHeight: 1.5,
    fontWeight: 400,
    ...colorStyle(props),
    ...plainStyle(props),
  });
