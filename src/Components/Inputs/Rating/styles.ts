import { style } from 'typestyle';
import { WithThemeProps, withTheme } from '../../../Common/theming';
import { NestedCSSProperties } from 'typestyle/lib/types';
import { RatingProps } from './types';
import { toRem } from '../../../Common/theming/utils';
import { getStarFill } from './UpRating';


//** Not used CSS */
// export const RatingBoxStyle = (props: WithThemeProps) => style({
//     color: props.theme.colorMap.gray1,
//     textShadow: "0px 1px 10px rgba(0, 0, 0, 1)",
//     margin: "auto",
// });

// export const FullStarStyle = style({
//     ...CommonStartCSS,
// });

// export const EmptyStarStyle = style({
//     ...CommonStartCSS,
// });

// export const HalfStarStarStyle = (props: WithThemeProps) => style({
//     ...CommonStartCSS,
// });

// export const getStarFillStyle = (current, number, rating, max, theme): string => {
//     const fillType = getStarFill(current, number, rating, max)
//     switch (fillType) {
//         case 'full':
//             return FullStarStyle
//         case 'half':
//             return HalfStarStarStyle({ theme })
//         default:
//             return EmptyStarStyle
//     }
// };

export const RatingWrapperStyle = style({});

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