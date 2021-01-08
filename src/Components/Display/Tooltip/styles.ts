import { style } from 'typestyle';
import { UpTooltipProps } from './types';
import { WithThemeProps } from '../../../Common/theming/withTheme';
import { toRem } from '../../../Common/theming/utils';

export const upToolTipWrapper = style({
    display: 'inline-block',
    $nest: {
        '& .up-icon-wrapper.colored:hover svg, & .up-icon-wrapper.colored:hover svg path,& .up-icon-wrapper.colored:hover svg polygon, & .up-icon-wrapper.colored:hover svg polyline': {
            fill: '#C47400'
        }
    }
});

export const getStyles = (props: UpTooltipProps & WithThemeProps) => style({
    pointerEvents: 'auto',
    opacity: 0.95,
    padding: 0,
    ...(props.type == 'light' ? {
        background: '#4E5B59 !important',
        border: '1px #4E5B59 solid',
        borderRadius: props.theme.borderRadius ? props.theme.borderRadius : 'initial',
    } : {}),
    $nest: {
        '& .up-tooltip-content': {
            padding: 0,
            margin: 0,
            color: 'white',
            width: toRem(215),
        },
        '& .up-tooltip-header': {
            padding: `${toRem(8)} ${toRem(14)}`,
            margin: 0,
            borderBottom: '1px solid #ebebeb',
            borderRadius: 0,
            borderTopLeftRadius: props.theme.borderRadius,
            borderTopRightRadius: props.theme.borderRadius,
            fontWeight: 700,
            fontSize: toRem(13),
            color: '#4d4f5c',
            background: '#f7f7f7',
        },
        '& .up-tooltip-body': {
            padding: toRem(8),
            fontSize: toRem(14),
            lineHeight: 1.15,
            whiteSpace: 'pre-line'
        },
        '&:hover': {
            visibility: 'visible',
            opacity: 1,
        },
        ...(props.type == 'light' ? {
            '&.place-top:after': {
                borderTopColor: '#4E5B59 !important',
                borderTopStyle: 'solid !important',
                borderTopWidth: '6px !important'
            },
            '&.place-left:after': {
                borderLeftColor: '#4E5B59 !important',
                borderLeftStyle: 'solid !important',
                borderLeftWidth: '6px !important'
            },
            '&.place-right:after': {
                borderRightColor: '#4E5B59 !important',
                borderRightStyle: 'solid !important',
                borderRightWidth: '6px !important'
            },
            '&.place-bottom:after': {
                borderBottomColor: '#4E5B59 !important',
                borderBottomStyle: 'solid !important',
                borderBottomWidth: '6px !important',
                left: '10% !important'
            },
        } : {}),
    }
});