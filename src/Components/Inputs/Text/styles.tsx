// Imports
import * as classnames from 'classnames';
import { defaultStyles } from '../_Common/Styled/Input/styles'
import { NestedCSSProperties } from 'typestyle/lib/types';
import { UpTextProps } from './types';
import { style } from 'typestyle';
import { toRem } from '../../../Common/theming/utils';

const sizeMap = {
    xsmall: "100px",
    small: "150px",
    medium: "350px",
    large: "450px",
    xlarge: "600px",
    xxlarge: "700px",
    fill: "100%",
};

const base = (props: UpTextProps): NestedCSSProperties => (
    {
        $nest: {
            "&.up-text": {
                minHeight: '80px',
                width: sizeMap[props.width] || "500px",
                padding: toRem(10),
                border: `1px solid ${props.theme.colorMap.darkGray4}`,
                borderRadius: props.theme.borderRadius
            },
            "&.up-text::placeholder": {
                color: props.theme.colorMap.grey1,
                fontStyle: 'italic',
                fontSize: toRem(14),
                fontWeight: 500
            }

        }
    }
);

const error = (props: UpTextProps): NestedCSSProperties => ({
    border: `1px solid ${props.theme.colorMap.danger}`,
});

export const getStyles = (props: UpTextProps): string => (
    classnames(style(defaultStyles(props)), style(base(props)), props.hasError ? style(error(props)) : null)
);
