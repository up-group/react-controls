// Imports
import * as React from 'react'
import { UpLigneProps } from './UpLigne';
import { NestedCSSProperties } from 'typestyle/lib/types';
import { style } from 'typestyle';

const defaultProps: UpLigneProps = {
  color: '#000',
  textAlign: 'center',
};

export const getStyles = (props: UpLigneProps) : string => (
  style({
    textAlign: props.textAlign || defaultProps.textAlign,
    color: props.color || defaultProps.color,
    display:'inline-block',
} as NestedCSSProperties))
