// Imports
import { NestedCSSProperties } from 'typestyle/lib/types';
import { UpLinkProps } from './UpLink';
import { style } from 'typestyle';

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

const colorStyle = (props: UpLinkProps) => {
  if (props.color) {
    return {
      color: props.color,
    }
  }
  return null;
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
