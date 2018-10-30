// Imports
import * as classnames from 'classnames';
import { defaultStyles } from '../_Common/Styled/Input/styles'
import { NestedCSSProperties } from 'typestyle/lib/types';
import { UpTextProps } from './types';
import { style } from 'typestyle';

const sizeMap = {
    xsmall: "100px",
    small: "150px",
    medium: "350px",
    large: "450px",
    xlarge: "600px",
    xxlarge: "700px",
    fill: "100%",
};

const base = (props: UpTextProps) : NestedCSSProperties => (
    { 
        minHeight:'80px',
        width: sizeMap[props.width] || "500px",
        padding:'10px',
    }
);

const error = (props: UpTextProps) : NestedCSSProperties => ({ 
  border : `1px solid ${props.theme.colorMap.danger}`,
});

export const getStyles =(props: UpTextProps) : string => (
    classnames(style(defaultStyles(props)), style(base(props)), props.hasError ? style(error(props)) : null)
);
