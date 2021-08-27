import defaultTheme from '../../../Common/theming';
import { UpPanelProps } from './types';
import classnames from 'classnames';
import { NestedCSSProperties } from 'typestyle/lib/types';
import { style } from 'typestyle';
import { WithThemeProps } from '../../../Common/theming/withTheme';
import { toRem } from '../../../Common/theming/utils';

const base = (props: UpPanelProps & WithThemeProps): NestedCSSProperties => ({
    borderRadius: props.theme.borderRadius || toRem(6),
    verticalAlign: 'top',
    borderWidth: '1px',
    borderStyle: 'solid',
    width: '100%',
    marginBottom: toRem(10),
    boxShadow: '0px 0px 1px grey',
    $nest: {
        '& .up-panel_header': {
            padding: toRem(8),
            fontWeight: 700,
            color: '#fff',
        },
        '& .up-panel_body': {
            background: 'linear-gradient(to bottom, #ffffff, rgba(255, 255, 255, 0)) left no-repeat, center no-repeat',
            backgroundColor: '#fff',
            padding: toRem(20),
            borderRadius: props.theme.borderRadius || toRem(6),
        },
        '& .up-panel_message': {
            margin: toRem(10),
            display: 'inline-block',
        },
        '& .up-panel_footer': {
            background: 'linear-gradient(to bottom, #ffffff, rgba(255, 255, 255, 0)) left no-repeat, center no-repeat',
            backgroundColor: props.theme.colorMap ? props.theme.colorMap.lightGray5 : defaultTheme.colorMap.lightGray5,
            borderColor: props.theme.colorMap ? props.theme.colorMap.lightGray1 : defaultTheme.colorMap.lightGray1,
            borderTopWidth: '1px',
            borderTopStyle: 'solid',
            padding: toRem(6),
        },
        svg: {
            margin:`${toRem(4)} ${toRem(4)} ${toRem(4)} ${toRem(0)}`,
            display: 'inline-block',
            float: 'left',
        },
    }
})

export const DefaultPanelStyle = (props: UpPanelProps & WithThemeProps): string => (
    classnames(style(base(props)), style({
        borderColor: props.theme.colorMap ? props.theme.colorMap.default : defaultTheme.colorMap.default,
        $nest: {
            '& .up-panel_header': {
                backgroundColor: props.theme.colorMap ? props.theme.colorMap.default : defaultTheme.colorMap.default,
            }
        }
    }))
);

export const PrimaryDefaultPanel = (props: UpPanelProps & WithThemeProps): string => (
    classnames(style(base(props)), style({
        borderColor: props.theme.colorMap ? props.theme.colorMap.primary : defaultTheme.colorMap.primary,
        $nest: {
            '& .up-panel_header': {
                backgroundColor: props.theme.colorMap ? props.theme.colorMap.primary : defaultTheme.colorMap.primary,
            }
        }
    }))
);

export const WarningDefaultPanel = (props: UpPanelProps & WithThemeProps): string => (
    classnames(style(base(props)), style({
        borderColor: props.theme.colorMap ? props.theme.colorMap.warning : defaultTheme.colorMap.warning,
        $nest: {
            '& .up-panel_header': {
                backgroundColor: props.theme.colorMap ? props.theme.colorMap.warning : defaultTheme.colorMap.warning,
            }
        }
    }))
);

export const SuccessDefaultPanel = (props: UpPanelProps & WithThemeProps): string => (
    classnames(style(base(props)), style({
        borderColor: props.theme.colorMap ? props.theme.colorMap.successDark : defaultTheme.colorMap.successDark,
        $nest: {
            '& .up-panel_header': {
                backgroundColor: props.theme.colorMap ? props.theme.colorMap.success : defaultTheme.colorMap.success,
            }
        }
    }))
);

export const InfoDefaultPanel = (props: UpPanelProps & WithThemeProps): string => (
    classnames(style(base(props)), style({
        borderColor: props.theme.colorMap ? props.theme.colorMap.infoDark : defaultTheme.colorMap.infoDark,
        $nest: {
            '& .up-panel_header': {
                backgroundColor: props.theme.colorMap ? props.theme.colorMap.info : defaultTheme.colorMap.info,
            }
        }
    }))
);

export const DangerDefaultPanel = (props: UpPanelProps & WithThemeProps): string => (
    classnames(style(base(props)), style({
        borderColor: props.theme.colorMap ? props.theme.colorMap.danger : defaultTheme.colorMap.danger,
        $nest: {
            '& .up-panel_header': {
                backgroundColor: props.theme.colorMap ? props.theme.colorMap.danger : defaultTheme.colorMap.danger,
            }
        }
    }))
);

export const getStyles = (props: UpPanelProps) => {
    switch (props.type) {
        case 'primary':
            return PrimaryDefaultPanel(props);
        case 'info':
            return InfoDefaultPanel(props);
        case 'warning':
            return WarningDefaultPanel(props);
        case 'danger':
            return DangerDefaultPanel(props);
        case 'success':
            return SuccessDefaultPanel(props);
            default: 
            return DefaultPanelStyle(props)
    }
};
