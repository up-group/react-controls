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

export const CommonCheckableStyle = (props: WithThemeProps) : NestedCSSProperties => {
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
      '& .up-control-indicator' : {
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
        boxShadow: 'inset 0 0 0 1px rgba(16, 22, 26, 0.2), inset 0 -1px 0 rgba(16, 22, 26, 0.1)',
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
      '& input:checked ~ .up-control-indicator, & input:indeterminate ~ .up-control-indicator' : {
        background: `linear-gradient(to bottom, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0)) left no-repeat, center no-repeat  ${props.theme.colorMap.primary}`,
        color: props.theme.colorMap.primaryFg,
        boxShadow: 'inset 0 0 0 1px rgba(16, 22, 26, 0.4), inset 0 -1px 0 rgba(16, 22, 26, 0.2)',
      },
      '&:hover .up-control-indicator' : {
        background: `linear-gradient(to bottom, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0)) left no-repeat, center no-repeat ${props.theme.colorMap.primaryDark}`, 
        color: props.theme.colorMap.primaryFg,
      },
      '&:hover input:checked ~ .up-control-indicator, &:hover input:indeterminate ~ .up-control-indicator' : {
        background: `linear-gradient(to bottom, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0)) left no-repeat, center no-repeat ${props.theme.colorMap.primaryDark}`,
        color: props.theme.colorMap.primaryFg,
        boxShadow: 'inset 0 0 0 1px rgba(16, 22, 26, 0.4), inset 0 -1px 0 rgba(16, 22, 26, 0.2)', 
      },
      '&.up-intent-danger input:checked ~ .up-control-indicator' : {
        background: `linear-gradient(to bottom, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0)) left no-repeat, center no-repeat  ${props.theme.colorMap.danger}`,
        color: props.theme.colorMap.dangerFg,
        boxShadow: 'inset 0 0 0 1px rgba(16, 22, 26, 0.4), inset 0 -1px 0 rgba(16, 22, 26, 0.2)',
      },
      '&.up-intent-danger:hover .up-control-indicator' : {
        background: `linear-gradient(to bottom, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0)) left no-repeat, center no-repeat ${props.theme.colorMap.dangerDark}`, 
        color: props.theme.colorMap.dangerFg,
      },
      '&.up-intent-danger:hover ~ .up-control-indicator' : {
        background: `linear-gradient(to bottom, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0)) left no-repeat, center no-repeat ${props.theme.colorMap.dangerDark}` ,
        boxShadow: 'inset 0 0 0 1px rgba(16, 22, 26, 0.4), inset 0 -1px 0 rgba(16, 22, 26, 0.2)', 
        color: props.theme.colorMap.dangerFg,
      },
      '& input:checked .up-control-text, &:hover .up-control-text' : {
        color: props.theme.colorMap.primaryFg,
      },
      '&.up-intent-success input:checked .up-control-text, &.up-intent-success:hover .up-control-text' : {
        color: props.theme.colorMap.successFg,
      },
      '&.up-intent-danger input:checked .up-control-text, &.up-intent-danger:hover .up-control-text' : {
        color: props.theme.colorMap.dangerFg,
      },
      '&.up-intent-success input:checked ~ .up-control-indicator' : {
        background: `linear-gradient(to bottom, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0)) left no-repeat, center no-repeat  ${props.theme.colorMap.success}`,
        boxShadow: 'inset 0 0 0 1px rgba(16, 22, 26, 0.4), inset 0 -1px 0 rgba(16, 22, 26, 0.2)',
      },
      '&.up-intent-success:hover .up-control-indicator' : {
        background: `linear-gradient(to bottom, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0)) left no-repeat, center no-repeat ${props.theme.colorMap.successDark}`, 
        color: props.theme.colorMap.successFg,
      },
      '&.up-intent-success:hover ~ .up-control-indicator' : {
        background: `linear-gradient(to bottom, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0)) left no-repeat, center no-repeat ${props.theme.colorMap.successDark}` ,
        color: props.theme.colorMap.successFg,
        boxShadow: 'inset 0 0 0 1px rgba(16, 22, 26, 0.4), inset 0 -1px 0 rgba(16, 22, 26, 0.2)', 
      },

      '&.up-intent-success input:not(:disabled):active ~ .up-control-indicator' : {
        boxShadow: 'inset 0 0 0 1px rgba(16, 22, 26, 0.2), inset 0 1px 2px rgba(16, 22, 26, 0.2)',
        background: props.theme.colorMap.success,
        color: props.theme.colorMap.successFg,
      },
      '&.up-intent-success input:not(:disabled):active:checked ~ .up-control-indicator' : {
        boxShadow: 'inset 0 0 0 1px rgba(16, 22, 26, 0.4), inset 0 1px 2px rgba(16, 22, 26, 0.2)',
        background: props.theme.colorMap.success, 
        color: props.theme.colorMap.successFg,
      },
      '&.up-intent-danger input:not(:disabled):active ~ .up-control-indicator' : {
        boxShadow: 'inset 0 0 0 1px rgba(16, 22, 26, 0.2), inset 0 1px 2px rgba(16, 22, 26, 0.2)',
        background: props.theme.colorMap.danger,
        color: props.theme.colorMap.dangerFg,
      },
      '&.up-intent-danger input:not(:disabled):active:checked ~ .up-control-indicator' : {
        boxShadow: 'inset 0 0 0 1px rgba(16, 22, 26, 0.4), inset 0 1px 2px rgba(16, 22, 26, 0.2)',
        background: props.theme.colorMap.danger, 
        color: props.theme.colorMap.dangerFg,
      },
      '&:hover ~ .up-control-indicator ~ *' : {
        color: props.theme.colorMap.primaryFg,
      },
      '&.up-intent-success:hover  ~ .up-control-indicator ~ *' : {
        color: props.theme.colorMap.successFg,
      },
      '&.up-intent-danger:hover ~ .up-control-indicator ~ *' : {
        color: props.theme.colorMap.successFg,
      },
      '& input:not(:disabled):active ~ .up-control-indicator' : {
        boxShadow: 'inset 0 0 0 1px rgba(16, 22, 26, 0.2), inset 0 1px 2px rgba(16, 22, 26, 0.2)',
        background: props.theme.colorMap.primary,
        color: props.theme.colorMap.successFg,
      },
      '& input:not(:disabled):active:checked ~ .up-control-indicator,& input:not(:disabled):active:indeterminate ~ .up-control-indicator' : {
        boxShadow: 'inset 0 0 0 1px rgba(16, 22, 26, 0.4), inset 0 1px 2px rgba(16, 22, 26, 0.2)',
        background: props.theme.colorMap.primary, 
        color: props.theme.colorMap.primaryFg,
      },
      '& input:focus ~ .up-control-indicator' : {
        outline: 'rgba(19, 124, 189, 0.5) auto 2px',
        outlineOffset: '2px',
        '-moz-outline-radius': '6px', 
      },
      '& input:disabled ~ .up-control-indicator' : {
        boxShadow: 'none',
        background: 'rgba(206, 217, 224, 0.5)',
        cursor: 'notAllowed', 
      },
      '& input:disabled:checked ~ .up-control-indicator' : {
        boxShadow: 'none',
        background: 'rgba(19, 124, 189, 0.5)', 
      },
      '& input[type="checkbox"]:checked ~ .up-control-indicator::before' : {
        content: '""', 
      },
      '& input[type="checkbox"]:indeterminate ~ .up-control-indicator::before' : {
        content: '""', 
      },
    }
  }
}
