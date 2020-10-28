import * as classnames from 'classnames'

import { getCheckableStyles } from '../_Common/Styled'//
import { UpRadioStyledProps, UpRadioProps } from './UpRadio';
import { style } from 'typestyle';
import { NestedCSSProperties } from 'typestyle/lib/types';
import { WithThemeProps } from '../../../Common/theming/withTheme';
import { isEmpty } from '../../../Common/utils';
import { RadioGroupProps } from './UpRadio';
import { svgStyle } from 'Components/Display/LoadingIndicator/styles';

const baseStyles = (props: UpRadioStyledProps): NestedCSSProperties => (
    {
        $nest: {
            '& .up-control-indicator': {
                borderRadius: '50%',
                fontSize: '6px',
                cursor: props.readonly && 'unset'
            },
            '& .up-control-text': {
                zIndex: 100,
            },
            '& input:checked ~ .up-control-wrapper .up-control-indicator::before': {
                display: 'inline-block',
                position: 'absolute',
                top: '50%',
                left: '50%',
                '-webkit-transform': 'translate(-50%, -50%)',
                transform: 'translate(-50%, -50%)',
                borderRadius: '50%',
                background: '#ffffff',
                width: '6px',
                height: '6px',
                content: "",
            },
            '& input:indeterminate ~ .up-control-wrapper .up-control-indicator::before': {
                display: 'inline-block',
                position: 'absolute',
                top: '50%',
                left: '50%',
                '-webkit-transform': 'translate(-50%, -50%)',
                transform: 'translate(-50%, -50%)',
                borderRadius: '50%',
            }
        }
    });

export const getStyles = (props: UpRadioStyledProps & WithThemeProps) => (
    classnames(style(getCheckableStyles(props)), style(baseStyles(props)))
);

export const RadioGroupStyles = (props: RadioGroupProps & WithThemeProps) => {
    return {
        $nest: {
            "& .up-control-text": {
                fontSize: "14px",
                fontWeight: "normal",
                fontStyle: "normal",
                fontStretch: "normal",
                letterSpacing: "normal",
                textAlign: "center",
                color: "#4e5b59"
            },
            "&.upContainer__groupradio-horizontal label.up-radio": {
                marginRight: `${props.gutter ? props.gutter : 0}px`,
                marginBottom : `${props.gutter ? props.gutter : 0}px`,
                width: props.nbItemsPerRow ? `${Math.floor(100/props.nbItemsPerRow) - Math.ceil(props.gutter/16)}%` : 'auto'
            },
            "&.upContainer__groupradio-horizontal label.up-radio .up-control-text": {
                flex : 2
            },
            "&.upContainer__groupradio-vertical label.up-radio": {
                marginTop: `${props.gutter ? props.gutter : 0}px`,
                cursor: props.readonly && 'unset'
            },
            "&.upContainer__groupradio-button.upContainer__groupradio-horizontal label.up-radio": {
                marginLeft: `${props.gutter ? props.gutter : 0}px`,
                cursor: props.readonly && 'unset'
            },
            "&.upContainer__groupradio-horizontal": {
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-start",
                flexWrap: "wrap",
                alignItems: "stretch"
            },
            "&.upContainer__groupradio-vertical": {
                height: "100%",
                display: "flex",
                flexDirection: "column",
                flexWrap: props.flexWrap ? "wrap" : "nowrap",
                alignItems: "flex-start",
                justifyContent: "flex-start",
            },
            "&.upContainer__groupradio-button input:checked ~ .up-control-wrapper .up-control-indicator::before": {
                visibility: "hidden"
            },
            "&.upContainer__groupradio-button input:indeterminate ~ .up-control-wrapper .up-control-indicator::before": {
                visibility: "hidden"
            },
            "&.upContainer__groupradio-button label.up-radio": {
                padding: "8px",
                backgroundColor: "#EEE",
                border: "0.01em solid #CCC",
                borderRight: isEmpty(props.gutter) ? 0 : "0.01em solid #CCC",
                position: "relative",
                marginTop: 0,
                marginRight: `${props.gutter ? props.gutter : 0}px`,
                borderRadius: isEmpty(props.gutter) ? 0 : props.theme.borderRadius
            },
            "&.upContainer__groupradio-button label.up-radio:nth-child(2), &.upContainer__groupradio-button label.up-radio:nth-child(2) .up-control-wrapper .up-control-indicator": {
                borderTopLeftRadius: props.theme.borderRadius,
                borderBottomLeftRadius: props.theme.borderRadius
            },
            "&.upContainer__groupradio-button label.up-radio:last-child": {
                borderRight: "0.01em solid #CCC"
            },
            "&.upContainer__groupradio-button label.up-radio:last-child, &.upContainer__groupradio-button label.up-radio:last-child .up-control-wrapper .up-control-indicator": {
                borderTopRightRadius: props.theme.borderRadius,
                borderBottomRightRadius: props.theme.borderRadius
            },
            "&.upContainer__groupradio-button .up-radio:hover input:indeterminate ~ .up-control-text": {
                color: props.theme.colorMap.black1
            },
            "&.upContainer__groupradio-button .up-radio:hover .up-control-text": {
                color: props.theme.colorMap.black1
            },
            "&.upContainer__groupradio-button .up-radio input:checked ~ .up-control-text": {
                color: props.theme.colorMap.primaryFg
            },
            "&.upContainer__groupradio-button label.up-radio input ~ .up-control-text": {
                position: "relative"
            },
            "&.upContainer__groupradio-button label.up-radio input ~ .up-control-wrapper .up-control-indicator": {
                position: "absolute",
                width: "100%",
                height: "100%",
                border: 0,
                top: 0,
                left: 0,
                borderRadius: isEmpty(props.gutter) ? 0 : props.theme.borderRadius,
                display: "inline-block",
                boxShadow: "unset",
                background: "#EFEFEF"
            },
            "&.upContainer__groupradio-button label.up-radio input:checked ~ .up-control-wrapper .up-control-indicator": {
                backgroundColor: props.theme.colorMap.primary
            },
            "&.upContainer__groupradio-button label.up-radio input:checked ~ .up-control-wrapper .up-control-indicator ~ *": {
                color: "white",
                fontWeight: 500,
            },
            "&.upContainer__groupradio-large label.up-radio": {
                display: "flex",
                flexDirection: "row",
                // alignItems: "flex-start",
                cursor: props.readonly && 'unset',
                justifyContent: "center",
                paddingLeft : 0
            },
            "&.upContainer__groupradio-large .up-control-wrapper": {
                background: "rgba(245, 145, 0, 0.2)",
                position: "relative",

                border: `1px solid ${props.theme.colorMap.primary}`,
                borderBottomLeftRadius: "4px",
                borderTopLeftRadius: "4px",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                $nest: {
                    "&.up-control-wrapper--adaptive-height": {
                        width: "60px",
                    },
                    "&.up-control-wrapper--fixed-height": {
                        width: "80px",
                        height: "80px",
                    }
                }
            },
            "&.upContainer__groupradio-large .up-control-wrapper .up-control-indicator": {
                position: "inherit",
                cursor: props.readonly && 'unset',
            },
            "&.upContainer__groupradio-large .up-control-text": {
                border: `1px solid ${props.theme.colorMap.primary}`,
                borderBottomRightRadius: "4px",
                borderTopRightRadius: "4px",
                borderLeftWidth: "0px",
                verticalAlign: "middle",
                display: "flex",
                justifyContent: "center",
                $nest: {
                    "&.up-control-text--adaptive-height": {
                        flexDirection: 'column',
                        alignItems: "flex-start",
                        padding: "5px 10px",
                    },
                    "&.up-control-text--fixed-height": {
                        height: "80px",
                        padding: "26px",
                        lineHeight: "30px",
                        alignItems: "center",
                    }
                }
            },
            "&.upContainer__groupradio-large .up-control-text span": {
                paddingTop: "4px"
            },
            "&.upContainer__groupradio-large .up-control-text svg,&.upContainer__groupradio-large .up-control-text svg path, &.upContainer__groupradio-large .up-control-text svg polygon, &.upContainer__groupradio-large .up-control-text svg polyline": {
                color: "#4e5b59"
            },
            "&.upContainer__groupradio-large.upContainer__groupradio-vertical label.up-radio": {
                marginTop: "12px"
            }
        }
    } as NestedCSSProperties;
};