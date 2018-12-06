// Imports
import { NestedCSSProperties } from 'typestyle/lib/types';
import { UpLinkProps } from './UpLink';
import { style } from 'typestyle';
import { WithThemeProps } from '../../../Common/theming';
import {color} from 'csx' ;

const plainStyle = (props: UpLinkProps) : NestedCSSProperties => {
  if (props.plain) {
    return {
      cursor: 'pointer',
      lineHeight: 'inherit',
      textDecoration: 'inherit',
    }
  }
  return {
    textDecoration: 'underline',
    lineHeight: 'inherit',
    cursor: 'pointer',
  }
};

const colorStyle = (props: UpLinkProps & WithThemeProps) => {
  return {
    color: props.color || props.theme.colorMap.primary,
    $nest : {
      '&:hover' : {
        color: props.color ? color(props.color).darken(0.1).toHexString() : props.theme.colorMap.primary,
      },
    },
  };
};

export const getStyles = (props : UpLinkProps) : string => (
  style({
    fontSize: '1.1875rem',
    lineHeight: '24px',
    fontWeight: 400,
    ...colorStyle(props),
    ...plainStyle(props),
  })
)
