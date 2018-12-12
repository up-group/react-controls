// Imports
import * as React from 'react'
import defaultTheme from '../../../Common/theming'
import { isString } from '../../../Common/utils'
import { UpPanelStyledProps } from './'
import SvgIcon from "../../Display/SvgIcon/index";
import * as classnames from 'classnames'
import { NestedCSSProperties } from 'typestyle/lib/types';
import { style } from 'typestyle';
import { WithThemeProps } from '../../../Common/theming/withTheme';

const shadow = (props:UpPanelStyledProps & WithThemeProps) : NestedCSSProperties => ({
    boxShadow: '0px 0px 1px grey',
});

const base = (props:UpPanelStyledProps & WithThemeProps) : NestedCSSProperties => ({
  textAlign: 'left',
  display: 'block',
  borderRadius: props.theme.borderRadius || '6px',
  verticalAlign: 'top',
  borderWidth: '1px',
  borderStyle: 'solid',
  width: '100%',
  marginBottom:'10px', 
  $nest : {
      '& .up-panel-header' : {
        width:'100%',
        padding: '8px',
        fontWeight:700,
        color:'white',
    },
    '& .up-panel-body' : {
        background: 'linear-gradient(to bottom, #ffffff, rgba(255, 255, 255, 0)) left no-repeat, center no-repeat' , 
        backgroundColor: '#fff',
        padding: '20px',
        borderRadius: props.theme.borderRadius || '6px',
    },
    '& .up-panel-message' : {
        margin:'10px',
        display:'inline-block',
    },
    '& .up-panel-footer' : {
        background: 'linear-gradient(to bottom, #ffffff, rgba(255, 255, 255, 0)) left no-repeat, center no-repeat', 
        backgroundColor: props.theme.colorMap ? props.theme.colorMap.lightGray5 : defaultTheme.colorMap.lightGray5,
        borderColor: props.theme.colorMap ? props.theme.colorMap.lightGray1 : defaultTheme.colorMap.lightGray1,
        borderTopWidth:'1px',
        borderTopStyle:'solid',
        padding: '6px',
    },
    svg : {
        margin:'4px 4px 4px 0px',
        display:'inline-block',
        float:'left',
    },
  }
})

export const DefaultPanelStyle = (props: UpPanelStyledProps & WithThemeProps) : string => (
    classnames(style(base(props)), style(shadow(props)), style({
        borderColor: props.theme.colorMap ? props.theme.colorMap.default : defaultTheme.colorMap.default,
        $nest : {
            '& .up-panel-header' : {
                color:'#111',
                backgroundColor: props.theme.colorMap ? props.theme.colorMap.default : defaultTheme.colorMap.default,
            }
        }
    }))
);


export const PrimaryDefaultPanel = (props: UpPanelStyledProps & WithThemeProps) : string => (
    classnames(style(base(props)), style(shadow(props)), style({
        borderColor: props.theme.colorMap ? props.theme.colorMap.primary : defaultTheme.colorMap.primary,
        $nest : {
            '& .up-panel-header' : {
                backgroundColor: props.theme.colorMap ? props.theme.colorMap.primary : defaultTheme.colorMap.primary,
            }
        }
    }))
);

export const WarningDefaultPanel = (props: UpPanelStyledProps & WithThemeProps) : string => (
    classnames(style(base(props)), style(shadow(props)), style({
        borderColor: props.theme.colorMap ? props.theme.colorMap.warning : defaultTheme.colorMap.warning,
        $nest : {
            '& .up-panel-header' : {
                backgroundColor: props.theme.colorMap ? props.theme.colorMap.warning : defaultTheme.colorMap.warning,
            }
        }
    }))
);

export const SuccessDefaultPanel = (props: UpPanelStyledProps & WithThemeProps) : string => (
    classnames(style(base(props)), style(shadow(props)), style({
        borderColor: props.theme.colorMap ? props.theme.colorMap.successDark : defaultTheme.colorMap.successDark,
        $nest : {
            '& .up-panel-header' : {
                backgroundColor: props.theme.colorMap ? props.theme.colorMap.success : defaultTheme.colorMap.success,
            }
        }
    }))
);

export const InfoDefaultPanel = (props: UpPanelStyledProps & WithThemeProps) : string => (
    classnames(style(base(props)), style(shadow(props)), style({
        borderColor: props.theme.colorMap ? props.theme.colorMap.infoDark : defaultTheme.colorMap.infoDark,
        $nest : {
            '& .up-panel-header' : {
                backgroundColor: props.theme.colorMap ? props.theme.colorMap.info : defaultTheme.colorMap.info,
            }
        }
    }))
);

export const DangerDefaultPanel = (props: UpPanelStyledProps & WithThemeProps) : string => (
    classnames(style(base(props)), style(shadow(props)), style({
        borderColor: props.theme.colorMap ? props.theme.colorMap.danger : defaultTheme.colorMap.danger,
        $nest : {
            '& .up-panel-header' : {
                backgroundColor: props.theme.colorMap ? props.theme.colorMap.danger : defaultTheme.colorMap.danger,
            }
        }
    }))
);

export const getStyles = (props:UpPanelStyledProps) => {
    switch (props.type) {
        case "primary":
            return PrimaryDefaultPanel(props);
        case "info":
            return InfoDefaultPanel(props);
        case "warning":
            return WarningDefaultPanel(props);
        case "danger":
            return DangerDefaultPanel(props);
        case "success":
            return SuccessDefaultPanel(props);
    }

    return DefaultPanelStyle(props);
}
