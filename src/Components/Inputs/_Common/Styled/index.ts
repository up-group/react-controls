import { NestedCSSProperties } from "typestyle/lib/types";
import { WithThemeProps } from "theming/withTheme";

export const sizeMap = {
  xxsmall: "30px",
  xsmall: "60px",
  small: "150px",
  normal: "300px",
  medium: "250px",
  large: "350px",
  xlarge: "400px",
  xxlarge: "500px",
  fill: "100%",
};

const boxShadow = {
  boxShadow: 'inset 0 0 0 1px rgba(245, 145, 0, 0.4), inset 0 -1px 0 rgba(245, 145, 0, 0.2)',
}

export const getCheckableStyles = (props: WithThemeProps) : NestedCSSProperties => {
  return {
    position:'relative',
    display: 'block',
    cursor: 'pointer',
    minHeight: '20px',
    paddingLeft: '26px',
    textTransform: 'none',
    lineHeight: '16px',  
    $nest : {
      '& svg' : {
        margin:'4px 4px 4px 0px',
        display:'inline-block',
        float:'left',
      },
      '& .up-control-label' : {
        color: '#7f8fa4',
        fontSize:'14px',
      },
      '& .up-control-indicator' : {
        ...boxShadow,
        fontFamily: '"Icons16", sans-serif',
        fontSize: '16px',
        fontWeight: 400,
        fontStyle: 'normal',
        background: 'linear-gradient(to bottom, #ffffff, rgba(255, 255, 255, 0)) left no-repeat, center no-repeat #f5f8fa',
        position: 'absolute',
        top: 0,
        left: 0,
        margin: 0,
        border: 'none',
        backgroundClip: 'padding-box',
        cursor: 'pointer',
        width: '16px',
        height: '16px',
        lineHeight: '16px',
        '-webkit-user-select': 'none',
          '-moz-user-select': 'none',
            '-ms-user-select': 'none',
                userSelect: 'none', 
      },
      '&.up-checkbox .up-control-indicator' : {
        borderRadius: props.theme.borderRadius,  
      },
     '& .up-control-indicator::before' : {
        position: 'relative',
        content: '""', 
      },
      '& input' : {
        position: 'absolute',
        top: 0,
        left: 0,
        margin: 0,
        zIndex:0,
        visibility:'hidden',
      },
      '& input:checked ~ .up-control-indicator, & input:checked ~ .up-control-wrapper .up-control-indicator' : {
        ...boxShadow,
        background: `linear-gradient(to bottom, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0)) left no-repeat, center no-repeat  ${props.theme.colorMap.primary}`,
        color: props.theme.colorMap.primaryFg,
      },
      '&:hover .up-control-indicator' : {
        background: `linear-gradient(to bottom, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0)) left no-repeat, center no-repeat ${props.theme.colorMap.primaryDark}`, 
      },
      '&:hover input:checked ~ .up-control-indicator, &:hover input:indeterminate ~ .up-control-indicator,&:hover input:checked ~ .up-control-wrapper .up-control-indicator, &:hover input:indeterminate ~ .up-control-wrapper .up-control-indicator' : {
        background: `linear-gradient(to bottom, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0)) left no-repeat, center no-repeat ${props.theme.colorMap.primaryDark}`,
        ...boxShadow,
      },
      '&.up-intent-danger input:checked ~ .up-control-indicator, &.up-intent-danger input:checked ~ .up-control-wrapper .up-control-indicator' : {
        background: `linear-gradient(to bottom, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0)) left no-repeat, center no-repeat  ${props.theme.colorMap.danger}`,
        color: props.theme.colorMap.dangerFg,
        ...boxShadow,
      },
      '&.up-intent-danger:hover .up-control-indicator' : {
        background: `linear-gradient(to bottom, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0)) left no-repeat, center no-repeat ${props.theme.colorMap.dangerDark}`, 
        color: props.theme.colorMap.dangerFg,
      },
      '&.up-intent-danger:hover ~ .up-control-indicator, &.up-intent-danger:hover ~ .up-control-wrapper .up-control-indicator' : {
        background: `linear-gradient(to bottom, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0)) left no-repeat, center no-repeat ${props.theme.colorMap.dangerDark}` ,
        ...boxShadow,
        color: props.theme.colorMap.dangerFg,
      },
      '&.up-intent-success input:checked ~ .up-control-indicator, &.up-intent-success input:checked ~ .up-control-wrapper .up-control-indicator' : {
        background: `linear-gradient(to bottom, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0)) left no-repeat, center no-repeat  ${props.theme.colorMap.success}`,
        ...boxShadow,
      },
      '&.up-intent-success:hover ~ .up-control-indicator, &.up-intent-success:hover ~ .up-control-wrapper .up-control-indicator' : {
        background: `linear-gradient(to bottom, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0)) left no-repeat, center no-repeat ${props.theme.colorMap.successDark}`, 
        color: props.theme.colorMap.successFg,
        ...boxShadow,
      },
      '&.up-intent-success input:not(:disabled):active ~ .up-control-indicator, &.up-intent-success input:not(:disabled):active ~ .up-control-wrapper .up-control-indicator' : {
        ...boxShadow,
        background: props.theme.colorMap.success,
        color: props.theme.colorMap.successFg,
      },
      '&.up-intent-success input:not(:disabled):active:checked ~ .up-control-indicator, &.up-intent-success input:not(:disabled):active:checked ~ .up-control-wrapper .up-control-indicator' : {
        ...boxShadow,
        background: props.theme.colorMap.success, 
        color: props.theme.colorMap.successFg,
      },
      '&.up-intent-danger input:not(:disabled):active ~ .up-control-indicator, &.up-intent-danger input:not(:disabled):active ~ .up-control-wrapper .up-control-indicator' : {
        ...boxShadow,
        background: props.theme.colorMap.danger,
        color: props.theme.colorMap.dangerFg,
      },
      '&.up-intent-danger input:not(:disabled):active:checked ~ .up-control-indicator, &.up-intent-danger input:not(:disabled):active:checked ~ .up-control-wrapper .up-control-indicator' : {
        ...boxShadow,
        background: props.theme.colorMap.danger, 
        color: props.theme.colorMap.dangerFg,
      },
      '&:hover ~ .up-control-indicator ~ *, &:hover ~ .up-control-wrapper .up-control-indicator ~ *' : {
        color: props.theme.colorMap.primaryFg,
      },
      '&.up-intent-success:hover  ~ .up-control-indicator ~ *, &.up-intent-success:hover  ~ .up-control-wrapper .up-control-indicator ~ *' : {
        color: props.theme.colorMap.successFg,
      },
      '&.up-intent-danger:hover ~ .up-control-indicator ~ *, &.up-intent-danger:hover ~ .up-control-wrapper .up-control-indicator ~ *' : {
        color: props.theme.colorMap.successFg,
      },
      '& input:not(:disabled):active ~ .up-control-indicator, & input:not(:disabled):active ~ .up-control-wrapper .up-control-indicator' : {
        ...boxShadow,
        background: props.theme.colorMap.primary,
        color: props.theme.colorMap.successFg,
      },
      '& input:not(:disabled):active:checked ~ .up-control-indicator,& input:not(:disabled):active:checked ~ .up-control-wrapper .up-control-indicator' : {
        ...boxShadow,
        background: props.theme.colorMap.primary, 
        color: props.theme.colorMap.primaryFg,
      },
      '& input:focus ~ .up-control-indicator, & input:focus ~ .up-control-wrapper .up-control-indicator' : {
        outline: 'rgba(19, 124, 189, 0.5) auto 2px',
        outlineOffset: '2px',
        '-moz-outline-radius': '6px', 
      },
      '& input:disabled ~ .up-control-indicator, & input:disabled ~ .up-control-wrapper .up-control-indicator' : {
        boxShadow: 'none',
        background: 'rgba(206, 217, 224, 0.5)',
        cursor: 'notAllowed', 
      },
      '& input:disabled:checked ~ .up-control-indicator, & input:disabled:checked ~ .up-control-wrapper .up-control-indicator' : {
        boxShadow: 'none',
        background: 'rgba(19, 124, 189, 0.5)', 
      },
      '& input[type="checkbox"]:checked ~ .up-control-indicator::before, & input[type="checkbox"]:checked ~ .up-control-wrapper .up-control-indicator::before' : {
        content: '""', 
      },
      '& input[type="checkbox"]:indeterminate ~ .up-control-indicator::before, & input[type="checkbox"]:indeterminate ~ .up-control-wrapper .up-control-indicator::before' : {
        content: '""', 
      },
    }
  }
}
