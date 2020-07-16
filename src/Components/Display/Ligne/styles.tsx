// Imports
import * as React from 'react'
import { UpLigneProps } from './UpLigne';
import { NestedCSSProperties } from 'typestyle/lib/types';
import { style } from 'typestyle';
import { WithThemeProps } from '../../../Common/theming/withTheme';

const defaultProps: UpLigneProps = {
  color: '#000',
  textAlign: 'center',
};

export const getStyles = (props: UpLigneProps & WithThemeProps) : string => (
  style({
    textAlign: props.textAlign || defaultProps.textAlign,
    color: props.color || props.theme?.colorMap.primary || defaultProps.color,
    display:'inline-block',
} as NestedCSSProperties))
