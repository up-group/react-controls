import { style } from 'typestyle/lib';
import { WithThemeProps, UpThemeInterface } from '../../../Common/theming';
import { NestedCSSProperties } from 'typestyle/lib/types';
import { toRem } from '../../../Common/theming/utils';

export const boxUpload = style({
    border: '2px dashed #d7d7d7',
    $nest: {
        '&:hover': {
            borderColor: "#f39100",
        }
    }
});

export const boxUploaded = style({
    border: '1px solid',
    borderTopColor: '#d7d7d7',
    borderRightColor: '#d7d7d7',
    borderLeftColor: '#d7d7d7',
    borderBottomColor: '#F5F5F5',
    backgroundColor: '#F5F5F5',
    borderRadius: '4px 0x',
});

export const base: NestedCSSProperties = {
    fontFamily: 'Roboto',
    textAlign: 'center',
    cursor: 'pointer',
    width: '100%',
    borderTopRightRadius: '4px',
    borderTopLeftRadius: '4px',
    minHeight: toRem(64),
    height: 'auto',
    marginTop: toRem(8),
    position: 'relative',
};

export const baseStyle = (bgSrc: string, theme: UpThemeInterface) =>
    style({
        ...base,
        maxWidth: "100%",
        backgroundImage: `url(${bgSrc})`,
        backgroundRepeat: "no-repeat",
        $nest: {
            "& canvas": {
                maxWidth: "100%",
                borderRadius: theme.borderRadius,
            }
        }
    });

export const fileStyle = style({
    color: '#7a756f',
    textAlign: 'center',
    height: '100%',
    width: '100%',
    marginTop: toRem(16),
});

export const wrapperDropStyle = style({
    width: '100%',
});

export const extensionsStyle = (props: WithThemeProps) => style({
    fontSize: toRem(11),
    fontFamily: 'Roboto',
    color: props.theme.colorMap.darkGray5,
});

export const wrapperActionStyle = (props: WithThemeProps) => style({
    position: 'absolute',
    top: '1px',
    right: '1px',
    borderRadius: '4px',
    borderLeft: `1px solid ${props.theme.colorMap.primary}`,
    borderBottom: `1px solid ${props.theme.colorMap.primary}`,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    background: props.theme.colorMap.white,
    $nest: {
        span: {
            marginRight: toRem(4),
        },
    },
});

export const wrapperErrorsStyle = style({
    margin: `${toRem(18)} ${toRem(9)}`
});

export const wrapperFileNameStyle = (props: WithThemeProps) => style({
    display: 'flex',
    justifyContent: 'space-between',
    borderRadius: '4px',
    borderLeft: `1px solid ${props.theme.colorMap.disabledFg}`,
    borderBottom: `1px solid ${props.theme.colorMap.disabledFg}`,
    borderRight: `1px solid ${props.theme.colorMap.disabledFg}`,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    background: props.theme.colorMap.white,
    padding: `${toRem(5)} ${toRem(15)}`,
    $nest: {
        span: {
            marginRight: toRem(4),
            textOverflow: 'ellipsis',
            fontSize: toRem(15),
            color: '#4A4A4A',
        },
    },
});