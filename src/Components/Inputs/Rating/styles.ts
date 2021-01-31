import { style } from 'typestyle';
import { WithThemeProps } from '../../../Common/theming';
import { NestedCSSProperties } from 'typestyle/lib/types';
import { RatingProps } from './types';
import { toRem } from '../../../Common/theming/utils';

export const RatingWrapperStyle = (props: RatingProps & WithThemeProps) => style({
    $nest: {
        "&.up-rating[disabled] .up-star svg, &.up-rating[disabled] .up-star svg path, &.up-rating[disabled] .up-star svg polygon, &.up-rating[disabled] .up-star svg polyline": {
            fill : props.theme.colorMap.gray1,
            color : props.theme.colorMap.gray1
        }
    }
});

export const CommonStartCSS = (props: RatingProps & WithThemeProps) => ({
    fontSize: toRem(16),
    height: toRem(32),
    width: toRem(32),
    padding: toRem(2),
    position: "relative",
    display: "inline-block",
    $nest: {
        "&.up-star svg, &.up-star svg path, &.up-star svg polygon, &.up-star svg polyline": {
            fill: props.theme.colorMap.primary
        }
    },
    cursor: props.disabled ? "default" : "pointer"
} as NestedCSSProperties);
