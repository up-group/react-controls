import { style, keyframes } from 'typestyle';
import { color } from 'csx';
import { NestedCSSProperties } from 'typestyle/lib/types';
import { IntentType } from 'theming/types';
import { toRem } from '../../../Common/theming/utils';

export const convertDurationFromMsToSecond = (duration: number | undefined): number | undefined => duration && duration / 1000;

export const getIntentColor = (intent: IntentType, theme) => ({
    fg: theme.colorMap[`${intent}Dark`] || theme.colorMap.darkGray5,
    bg: theme.colorMap[`${intent}Light`] || theme.colorMap.white3
});

export const getIntentStyle = (intent: IntentType, theme): any => {
    const intentColors = getIntentColor(intent, theme);

    return style({
        color: intentColors.fg,
        backgroundColor: intentColors.bg,
        $nest: {
            '& p, & .up-toast-title': {
                color: intentColors.fg,
                backgroundColor: intentColors.bg
            },
            '& .up-toast-close .colored svg, & .up-toast-close .colored svg path, & .up-toast-close .colored svg polygon, & .up-toast-close .colored svg polyline': {
                fill: intentColors.fg
            }
        }
    });
};

export const getHoverColor = (hexaColor: string) => color(hexaColor).darken('10%').toHexString();

export const toastTitleStyle = style({
    $nest: {
        '&.up-toast-title': {
            padding: toRem(6),
            borderTopLeftRadius: '6px',
            borderTopRightRadius: '6px',
            width: '100%',
            margin: `${toRem(0)} ${toRem(0)} ${toRem(10)} ${toRem(0)}`,
            textAlign: 'left'
        }
    }
});

export const buttonStyle = style({
    fontFamily: 'materialinear',
    backgroundColor: 'transparent',
    border: '0px',
    cursor: 'pointer',
    fontSize: toRem(32),
    position: 'absolute',
    top: toRem(-4),
    right: toRem(4)
});

export const wrapperToastCss: NestedCSSProperties = {
    position: 'fixed',
    fontSize: toRem(16),
    bottom: toRem(10),
    right: toRem(30),
    borderRadius: '6px',
    zIndex: 999999,
    display: 'flex',
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
    textAlign: 'center',
    padding: '0',
    width: toRem(350),
    height: 'auto',
    flexDirection: 'column',
    $nest: {
        '& .up-toast-body': {
            padding: 0
        },
        '& .up-toast-message': {
            border: 0,
            marginBottom: 0
        },
        '& .up-toast-message p': {
            margin: toRem(6)
        },
        '& .up-toast-title': {
            marginBottom: 0
        }
    }
};

export const unmount = keyframes({
    '0%': {
        transform: 'translateX(0%)',
        opacity: 1
    },
    '100%': {
        transform: 'translateX(50%)',
        opacity: 0
    }
});

export const mount = keyframes({
    '0%': {
        transform: 'translateX(50%)',
        opacity: 0
    },
    '100%': {
        transform: 'translateX(0%)',
        opacity: 1
    }
});

export const wrapperToastStyle = (isUnmounting: boolean) => style({
    ...wrapperToastCss,
    animationName: isUnmounting ? unmount : mount,
    animationDuration: '1.5s'
});