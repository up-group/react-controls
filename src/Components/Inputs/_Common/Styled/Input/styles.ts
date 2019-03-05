import { NestedCSSProperties } from 'typestyle/lib/types';
import { StyledProps } from './types';
import { style } from 'typestyle';

import defaultTheme from '../../../../../Common/theming'

import * as classnames from 'classnames'
import { WithThemeProps } from '../../../../../Common/theming/withTheme';
import { UpInputProps } from 'Components/Inputs/Input/types';

export const HeightLarge = (props) : NestedCSSProperties => {
  return {
    height: '40px',
    lineHeight: '40px',
    fontSize: '16px',
    padding: props.theme.inputBorderLess ? '6px 0' : '0 15px',
  }
}

export const defaultStyles = (props: WithThemeProps) : NestedCSSProperties => { 
  let styles : NestedCSSProperties = {
    outline: 'none',
    position: 'relative',
    borderWidth: props.theme.inputBorderLess ? '0 0 1px 0' : '1px',
    borderRadius: props.theme.inputBorderLess ? 0 : '3px',
    borderStyle: 'solid',
    boxShadow:  props.theme.inputBorderLess ? 'inherit' : '0 0 0 0 rgba(19, 124, 189, 0), 0 0 0 0 rgba(19, 124, 189, 0), inset 0 0 0 1px rgba(16, 22, 26, 0.15), inset 0 1px 1px rgba(16, 22, 26, 0.2)',
    background: 'transparent',
    padding: props.theme.inputBorderLess ? '6px 0px' : '0px 10px',
    height: props.theme.inputBorderLess ? 'inherit' : '36px',
    lineHeight: props.theme.inputBorderLess ? 'inherit' : '30px',
    verticalAlign: 'middle',
    fontSize: '14px',
    fontWeight: 400,
    transition: props.theme.inputBorderLess ? 'none' : 'box-shadow 100ms cubic-bezier(0.4, 1, 0.75, 0.9)',
    '-webkit-appearance': 'none',
      '-moz-appearance': 'none',
            appearance: 'none',
  };
  const themeStyles = props.theme.styles.get('input') || {} ;
  return { ...styles, ...themeStyles } ;
};

const sizeMap = {
  xsmall: "40px",
  small: "100px",
  medium: "150px",
  large: "250px",
  xlarge: "350px",
  xxlarge: "500px",
  fill: "100%",
};

export const errorStyles = (props : StyledProps) => {
  if(!props.hasError || !props.showError) {
    return null;
  }
  return style({
      $nest : {
          '& .up-input-group .up-input' : {
            color: props.theme ? props.theme.colorMap.danger : defaultTheme.colorMap.danger,
            borderColor: props.theme ? props.theme.colorMap.danger : defaultTheme.colorMap.danger,
          },
          '& .up-input-group svg': {
            fill: props.theme ? props.theme.colorMap.danger : defaultTheme.colorMap.danger,
          },
          '& .up-input-group svg path' : {
            fill: props.theme ? props.theme.colorMap.danger : defaultTheme.colorMap.danger,
          },
          '& .up-input-group svg polygon' : {
            fill: props.theme ? props.theme.colorMap.danger : defaultTheme.colorMap.danger,
          }
      }
  }) ;
};

export const inputStyles = (props: UpInputProps & WithThemeProps) : NestedCSSProperties => {
  
  return {
    marginTop: props.floatingLabel ? '14px' : '0px',
    $nest : {
      '& .up-input' : {
        ...defaultStyles(props),
      },
      '& .up-input-group label': {
        fontSize: '14px',
        position: 'absolute',
        top: '-10px',
        left: '0px',
        color: '#979797',
        transformOrigin: 'top left',
        transform: 'translate(0, 16px) scale(1)',
        transition: 'all .1s ease-in-out',
        cursor: 'text',
      },
      '& .up-input::-moz-placeholder,& .up-input:-ms-input-placeholder,& .up-input::placeholder,& .up-input::-webkit-input-placeholder' : {
        opacity: 0.5,
        color: '#4e5b59', 
      },
      '& .up-input:focus,& .up-input:hover' : {
        borderColor : props.theme.colorMap.primary,
        boxShadow: props.theme.inputBorderLess ? 'inherit' : '0 0 0 1px #137cbd, 0 0 0 3px rgba(19, 124, 189, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.2)', 
      },
      '& .up-input-group:hover svg,& .up-input-group:hover svg path,& .up-input-group:hover svg polygon' : {
        fill: props.theme.colorMap.primary,
      },
      '.up-input.up-round' : {
        borderRadius: '30px',
        '-moz-box-sizing': 'border-box',
        boxSizing: 'border-box',
        paddingLeft: '10px', 
      },
      '.up-input[readonly]' : {
        boxShadow: 'inset 0 0 0 1px rgba(16, 22, 26, 0.15)', 
      },
      '.up-input:disabled, .up-input.up-disabled' : {
        boxShadow: 'none',
        background: 'rgba(206, 217, 224, 0.5)',
        cursor: 'not-allowed',
        color: 'rgba(92, 112, 128, 0.5)',
        resize: 'none', 
      },
      '.up-dark .up-input' : {
        boxShadow: '0 0 0 0 rgba(19, 124, 189, 0), 0 0 0 0 rgba(19, 124, 189, 0), 0 0 0 0 rgba(19, 124, 189, 0), inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4)',
        background: 'rgba(16, 22, 26, 0.3)',
        color: '#f5f8fa', 
      },
      '.up-dark .up-input::-webkit-input-placeholder' : {
          color: 'rgba(191, 204, 214, 0.5)', 
      },
      '.up-dark .up-input::-moz-placeholder' : {
        color: 'rgba(191, 204, 214, 0.5)', 
      },
      '.up-dark .up-input:-ms-input-placeholder' : {
        color: 'rgba(191, 204, 214, 0.5)', 
      },
      '.up-dark .up-input::placeholder' : {
        color: 'rgba(191, 204, 214, 0.5)', 
      },
      '& .up-dark .up-input:focus' : {
        boxShadow: props.theme.inputBorderLess ? 'inherit' :'0 0 0 1px #137cbd, 0 0 0 1px #137cbd, 0 0 0 3px rgba(19, 124, 189, 0.3), inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4)',
      },
      '& .up-dark .up-input[readonly]' : {
        boxShadow: props.theme.inputBorderLess ? 'inherit' : 'inset 0 0 0 1px rgba(16, 22, 26, 0.4)',
      },
      '.up-dark .up-input:disabled, .up-dark .up-input.up-disabled' : {
        boxShadow: 'none',
        background: 'rgba(57, 75, 89, 0.5)',
        color: 'rgba(191, 204, 214, 0.5)',
      },
      '& .up-input.up-intent-primary' : {
        boxShadow: props.theme.inputBorderLess ? 'inherit' : '0 0 0 0 rgba(19, 124, 189, 0), 0 0 0 0 rgba(19, 124, 189, 0), inset 0 0 0 1px #137cbd, inset 0 0 0 1px rgba(16, 22, 26, 0.15), inset 0 1px 1px rgba(16, 22, 26, 0.2)', 
      },
      '& .up-input.up-intent-primary:focus' : {
        boxShadow: props.theme.inputBorderLess ? 'inherit' : '0 0 0 1px #137cbd, 0 0 0 3px rgba(19, 124, 189, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.2)', 
      },
      '& .up-input.up-intent-primary[readonly]' : {
        boxShadow: props.theme.inputBorderLess ? 'inherit' : 'inset 0 0 0 1px #137cbd', 
      },
      '.up-input.up-intent-primary:disabled, .up-input.up-intent-primary.up-disabled' : {
        boxShadow: 'none', 
      },
      '& .up-dark .up-input.up-intent-primary' : {
        boxShadow: props.theme.inputBorderLess ? 'inherit' : '0 0 0 0 rgba(19, 124, 189, 0), 0 0 0 0 rgba(19, 124, 189, 0), 0 0 0 0 rgba(19, 124, 189, 0), inset 0 0 0 1px #137cbd, inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4)',
      },
      '& .up-dark .up-input.up-intent-primary:focus' : {
        boxShadow: props.theme.inputBorderLess ? 'inherit' : '0 0 0 1px #137cbd, 0 0 0 1px #137cbd, 0 0 0 3px rgba(19, 124, 189, 0.3), inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4)', 
      },
      '& .up-dark .up-input.up-intent-primary[readonly]' : {
        boxShadow: props.theme.inputBorderLess ? 'inherit' : 'inset 0 0 0 1px #137cbd', 
      },
      '.up-dark .up-input.up-intent-primary:disabled, .up-dark .up-input.up-intent-primary.up-disabled' : {
        boxShadow: 'none', 
      },
      '& .up-input.up-intent-success' : {
        boxShadow: props.theme.inputBorderLess ? 'inherit' : '0 0 0 0 rgba(15, 153, 96, 0), 0 0 0 0 rgba(15, 153, 96, 0), inset 0 0 0 1px #0f9960, inset 0 0 0 1px rgba(16, 22, 26, 0.15), inset 0 1px 1px rgba(16, 22, 26, 0.2)',
      },
      '& .up-input.up-intent-success:focus' : {
        boxShadow: props.theme.inputBorderLess ? 'inherit' : '0 0 0 1px #0f9960, 0 0 0 3px rgba(15, 153, 96, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.2)', 
      },
      '& .up-input.up-intent-success[readonly]' : {
        boxShadow: props.theme.inputBorderLess ? 'inherit' : 'inset 0 0 0 1px #0f9960', 
      },
      '.up-input.up-intent-success:disabled, .up-input.up-intent-success.up-disabled' : {
        boxShadow: 'none', 
      },
      '& .up-dark .up-input.up-intent-success' : {
        boxShadow: props.theme.inputBorderLess ? 'inherit' : '0 0 0 0 rgba(15, 153, 96, 0), 0 0 0 0 rgba(15, 153, 96, 0), 0 0 0 0 rgba(15, 153, 96, 0), inset 0 0 0 1px #0f9960, inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4)',
      },
      '& .up-dark .up-input.up-intent-success:focus' : {
        boxShadow: props.theme.inputBorderLess ? 'inherit' : '0 0 0 1px #0f9960, 0 0 0 1px #0f9960, 0 0 0 3px rgba(15, 153, 96, 0.3), inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4)', 
      },
      '& .up-dark .up-input.up-intent-success[readonly]' : {
        boxShadow: props.theme.inputBorderLess ? 'inherit' : 'inset 0 0 0 1px #0f9960',
      },
      '.up-dark .up-input.up-intent-success:disabled, .up-dark .up-input.up-intent-success.up-disabled' : {
        boxShadow: 'none',
      },
      '& .up-input.up-intent-warning' : {
        boxShadow: props.theme.inputBorderLess ? 'inherit' : '0 0 0 0 rgba(217, 130, 43, 0), 0 0 0 0 rgba(217, 130, 43, 0), inset 0 0 0 1px #d9822b, inset 0 0 0 1px rgba(16, 22, 26, 0.15), inset 0 1px 1px rgba(16, 22, 26, 0.2)', 
      },
      '& .up-input.up-intent-warning:focus' : {
        boxShadow: props.theme.inputBorderLess ? 'inherit' : '0 0 0 1px #d9822b, 0 0 0 3px rgba(217, 130, 43, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.2)',
      },
      '& .up-input.up-intent-warning[readonly]' : {
        boxShadow: props.theme.inputBorderLess ? 'inherit' : 'inset 0 0 0 1px #d9822b', 
      },
      '.up-input.up-intent-warning:disabled, .up-input.up-intent-warning.up-disabled' : {
        boxShadow: 'none', 
      },
      '& .up-dark .up-input.up-intent-warning' : {
        boxShadow: props.theme.inputBorderLess ? 'inherit' : '0 0 0 0 rgba(217, 130, 43, 0), 0 0 0 0 rgba(217, 130, 43, 0), 0 0 0 0 rgba(217, 130, 43, 0), inset 0 0 0 1px #d9822b, inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4)',
      },
      '& .up-dark .up-input.up-intent-warning:focus' : {
        boxShadow: props.theme.inputBorderLess ? 'inherit' : '0 0 0 1px #d9822b, 0 0 0 1px #d9822b, 0 0 0 3px rgba(217, 130, 43, 0.3), inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4)',
      },
      '& .up-dark .up-input.up-intent-warning[readonly]' : {
        boxShadow: props.theme.inputBorderLess ? 'inherit' : 'inset 0 0 0 1px #d9822b', 
      },
      '.up-dark .up-input.up-intent-warning:disabled, .up-dark .up-input.up-intent-warning.up-disabled' : {
        boxShadow: 'none', 
      },
      '& .up-input.up-intent-danger' : {
        boxShadow: props.theme.inputBorderLess ? 'inherit' : '0 0 0 0 rgba(219, 55, 55, 0), 0 0 0 0 rgba(219, 55, 55, 0), inset 0 0 0 1px #db3737, inset 0 0 0 1px rgba(16, 22, 26, 0.15), inset 0 1px 1px rgba(16, 22, 26, 0.2)',
      },
      '& .up-input.up-intent-danger:focus' : {
        boxShadow: props.theme.inputBorderLess ? 'inherit' : '0 0 0 1px #db3737, 0 0 0 3px rgba(219, 55, 55, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.2)', 
      },
      '& .up-input.up-intent-danger[readonly]' : {
        boxShadow: props.theme.inputBorderLess ? 'inherit' : 'inset 0 0 0 1px #db3737',
      },
      '.up-input.up-intent-danger:disabled, .up-input.up-intent-danger.up-disabled' : {
        boxShadow: 'none',
      },
      '& .up-dark .up-input.up-intent-danger' : {
        boxShadow: props.theme.inputBorderLess ? 'inherit' : '0 0 0 0 rgba(219, 55, 55, 0), 0 0 0 0 rgba(219, 55, 55, 0), 0 0 0 0 rgba(219, 55, 55, 0), inset 0 0 0 1px #db3737, inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4)',
      },
      '& .up-dark .up-input.up-intent-danger:focus' : {
        boxShadow: props.theme.inputBorderLess ? 'inherit' : '0 0 0 1px #db3737, 0 0 0 1px #db3737, 0 0 0 3px rgba(219, 55, 55, 0.3), inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4)',
      },
      '& .up-dark .up-input.up-intent-danger[readonly]' : {
        boxShadow: props.theme.inputBorderLess ? 'inherit' : 'inset 0 0 0 1px #db3737',
      },
      '.up-dark .up-input.up-intent-danger:disabled, .up-dark .up-input.up-intent-danger.up-disabled' : {
        boxShadow: 'none', 
      },
      '.up-input::-ms-clear' : {
        display: 'none', 
      },
      '.up-input-group' : {
        display: 'block',
        position: 'relative',
      },
      '.up-input-group .up-input' : {
        position: 'relative',
      },
      '.up-input-group .up-input:not(:first-child)' : {
        paddingLeft: '34px',
      },
      '.up-input-group .up-input:not(:last-child)' : {
        paddingRight: '34px',
      },
      '.up-input-group .up-input-action, .up-input-group > .up-button, .up-input-group > .up-icon-wrapper' : {
        position: 'absolute',
        top: 0,
      },
      '.up-input-group .up-input-action:first-child, .up-input-group > .up-button:first-child, .up-input-group > .up-icon-wrapper:first-child' : {
        left: 0,
      },
      '.up-input-group .up-input-action:last-child, .up-input-group > .up-button:last-child, .up-input-group > .up-icon-wrapper:last-child' : {
        right: 0,
      },
      '.up-input-group .up-button' : {
        minWidth: '24px',
        minHeight: '24px',
        lineHeight: '24px',
        margin: '3px',
        paddingTop: 0,
        paddingBottom: 0,
      },
      '& .up-input-group .up-icon-wrapper' : {
        lineHeight: 1,
        fontFamily: '"Icons16", sans-serif',
        fontSize: '16px',
        fontWeight: 400,
        fontStyle: 'normal',
        zIndex: 1,
        margin: props.theme.inputBorderLess ? '6px 0px' : '6px',
        color: '#5c7080',
        
      },
      '.up-input-group .up-spinner' : {
        margin: '3px',
      },
      '.up-input-group .up-tag' : {
        margin: '5px',
      },
      '.up-input-group .up-input:not(:focus) + .up-button.up-minimal:not(:hover):not(:focus), .up-input-group .up-input:not(:focus) + .up-input-action .up-button.up-minimal:not(:hover):not(:focus)' : {
        color: '#5c7080',
      },
      '.up-dark .up-input-group .up-input:not(:focus) + .up-button.up-minimal:not(:hover):not(:focus), .up-dark .up-input-group .up-input:not(:focus) + .up-input-action .up-button.up-minimal:not(:hover):not(:focus)' : {
        color:' #bfccd6', 
      },
      '.up-input-group .up-input:not(:focus) + .up-button.up-minimal:not(:hover):not(:focus) .up-icon-wrapper, .up-input-group .up-input:not(:focus) + .up-button.up-minimal:not(:hover):not(:focus) .up-icon-standard, .up-input-group .up-input:not(:focus) + .up-button.up-minimal:not(:hover):not(:focus) .up-icon-large,.up-input-group .up-input:not(:focus) + .up-input-action .up-button.up-minimal:not(:hover):not(:focus) .up-icon-wrapper,.up-input-group .up-input:not(:focus) + .up-input-action .up-button.up-minimal:not(:hover):not(:focus) .up-icon-standard,.up-input-group .up-input:not(:focus) + .up-input-action .up-button.up-minimal:not(:hover):not(:focus) .up-icon-large' : {
        color: '#5c7080', 
      },
      '.up-input-group .up-input:not(:focus) + .up-button.up-minimal:disabled, .up-input-group .up-input:not(:focus) + .up-input-action .up-button.up-minimal:disabled' : {
        color: 'rgba(92, 112, 128, 0.5) !important', 
      },
      '.up-input-group .up-input:not(:focus) + .up-button.up-minimal:disabled .up-icon-wrapper, .up-input-group .up-input:not(:focus) + .up-button.up-minimal:disabled .up-icon-standard, .up-input-group .up-input:not(:focus) + .up-button.up-minimal:disabled .up-icon-large' : {
        color: 'rgba(92, 112, 128, 0.5) !important', 
      },
      '.up-input-group .up-input:not(:focus) + .up-input-action .up-button.up-minimal:disabled .up-icon-wrapper' : {
        color: 'rgba(92, 112, 128, 0.5) !important',
      },
      '.up-input-group .up-input:not(:focus) + .up-input-action .up-button.up-minimal:disabled .up-icon-standard' : {
        color: 'rgba(92, 112, 128, 0.5) !important',
      },
      '.up-input-group .up-input:not(:focus) + .up-input-action .up-button.up-minimal:disabled .up-icon-large' : {
        color: 'rgba(92, 112, 128, 0.5) !important',
      },
      '.up-input-group.up-disabled' : {
        cursor: 'not-allowed',
      },
      '.up-input-group.up-disabled .up-icon-wrapper' : {
        color: 'rgba(92, 112, 128, 0.5)',
      },
      '.up-input-group.up-large .up-button' : {
        minWidth: '30px',
        minHeight: '30px',
        lineHeight: '30px',
        margin: '5px',
      },
      '.up-input-group.up-large .up-icon-wrapper' : {
        margin: '0 12px',
        lineHeight: '40px', 
      },
      '.up-input-group.up-large .up-input' : {
        height: '40px',
        lineHeight: '40px',
        fontSize: '16px',
      },
      '.up-input-group.up-large .up-input[type="search"], .up-input-group.up-large .up-input.up-round' : {
        padding: '0 15px', 
      },
      '.up-input-group.up-large .up-input:not(:first-child)' : {
        paddingLeft: '40px',
      },
      '.up-input-group.up-large .up-input:not(:last-child)' : {
        paddingRight: '40px',
      },
      '.up-input-group.up-large .up-spinner' : {
        margin: '8px', 
      },
      '.up-input-group.up-round .up-button, .up-input-group.up-round .up-input, .up-input-group.up-round .up-tag' : {
        borderRadius: '30px',
      },
      '.up-dark .up-input-group .up-icon-wrapper' : {
        color: '#bfccd6', 
      },
      '.up-dark .up-input-group.up-disabled .up-icon-wrapper' : {
        color: 'rgba(191, 204, 214, 0.5)', 
      },
      '& .up-input-group.up-intent-primary .up-input' : {
        boxShadow: props.theme.inputBorderLess ? 'inherit' : '0 0 0 0 rgba(19, 124, 189, 0), 0 0 0 0 rgba(19, 124, 189, 0), inset 0 0 0 1px #137cbd, inset 0 0 0 1px rgba(16, 22, 26, 0.15), inset 0 1px 1px rgba(16, 22, 26, 0.2)',
      },
      '& .up-input-group.up-intent-primary .up-input:focus' : {
        boxShadow: props.theme.inputBorderLess ? 'inherit' : '0 0 0 1px #137cbd, 0 0 0 3px rgba(19, 124, 189, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.2)',
      },
      '& .up-input-group.up-intent-primary .up-input[readonly]' : {
        boxShadow: props.theme.inputBorderLess ? 'inherit' : 'inset 0 0 0 1px #137cbd',
      },
      '.up-input-group.up-intent-primary .up-input:disabled, .up-input-group.up-intent-primary .up-input.up-disabled' : {
        boxShadow: 'none',
      },
      '.up-input-group.up-intent-primary .up-icon-wrapper' : {
        color: '#106ba3', 
      },
      '.up-dark .up-input-group.up-intent-primary .up-icon-wrapper' : {
        color: '#48aff0',
      },
      '& .up-input-group.up-intent-success .up-input' : {
        boxShadow: props.theme.inputBorderLess ? 'inherit' : '0 0 0 0 rgba(15, 153, 96, 0), 0 0 0 0 rgba(15, 153, 96, 0), inset 0 0 0 1px #0f9960, inset 0 0 0 1px rgba(16, 22, 26, 0.15), inset 0 1px 1px rgba(16, 22, 26, 0.2)',
      },
      '& .up-input-group.up-intent-success .up-input:focus' : {
        boxShadow: props.theme.inputBorderLess ? 'inherit' : '0 0 0 1px #0f9960, 0 0 0 3px rgba(15, 153, 96, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.2)',
      },
      '& .up-input-group.up-intent-success .up-input[readonly]' : {
        boxShadow: props.theme.inputBorderLess ? 'inherit' : 'inset 0 0 0 1px #0f9960',
      },
      '.up-input-group.up-intent-success .up-input:disabled, .up-input-group.up-intent-success .up-input.up-disabled' : {
        boxShadow: 'none', 
      },
      '.up-input-group.up-intent-success .up-icon-wrapper' : {
        color: '#0d8050',
      },
      '.up-dark .up-input-group.up-intent-success .up-icon-wrapper' : {
        color: '#3dcc91', 
      },
      '& .up-input-group.up-intent-warning .up-input' : {
        boxShadow: props.theme.inputBorderLess ? 'inherit' : '0 0 0 0 rgba(217, 130, 43, 0), 0 0 0 0 rgba(217, 130, 43, 0), inset 0 0 0 1px #d9822b, inset 0 0 0 1px rgba(16, 22, 26, 0.15), inset 0 1px 1px rgba(16, 22, 26, 0.2)', 
      },
      '& .up-input-group.up-intent-warning .up-input:focus' : {
        boxShadow: props.theme.inputBorderLess ? 'inherit' : '0 0 0 1px #d9822b, 0 0 0 3px rgba(217, 130, 43, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.2)', 
      },
      '& .up-input-group.up-intent-warning .up-input[readonly]' : {
        boxShadow: props.theme.inputBorderLess ? 'inherit' : 'inset 0 0 0 1px #d9822b', 
      },
      '.up-input-group.up-intent-warning .up-input:disabled, .up-input-group.up-intent-warning .up-input.up-disabled' : {
        boxShadow: 'none', 
      },
      '.up-input-group.up-intent-warning .up-icon-wrapper' : {
        color: '#bf7326', 
      },
      '.up-dark .up-input-group.up-intent-warning .up-icon-wrapper' : {
        color: '#ffb366', 
      },
      '& .up-input-group.up-intent-danger .up-input' : {
        boxShadow: props.theme.inputBorderLess ? 'inherit' : '0 0 0 0 rgba(219, 55, 55, 0), 0 0 0 0 rgba(219, 55, 55, 0), inset 0 0 0 1px #db3737, inset 0 0 0 1px rgba(16, 22, 26, 0.15), inset 0 1px 1px rgba(16, 22, 26, 0.2)',
      },
      '& .up-input-group.up-intent-danger .up-input:focus' : {
        boxShadow: props.theme.inputBorderLess ? 'inherit' : '0 0 0 1px #db3737, 0 0 0 3px rgba(219, 55, 55, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.2)', 
      },
      '& .up-input-group.up-intent-danger .up-input[readonly]' : {
        boxShadow: props.theme.inputBorderLess ? 'inherit' : 'inset 0 0 0 1px #db3737', 
      },
      '.up-input-group.up-intent-danger .up-input:disabled, .up-input-group.up-intent-danger .up-input.up-disabled' : {
        boxShadow: 'none', 
      },
      '.up-input-group.up-intent-danger .up-icon-wrapper' : {
        color: '#c23030', 
      },
      '.up-dark .up-input-group.up-intent-danger .up-icon-wrapper' : {
        color: '#ff7373', 
      }
    }
  }
};

export const focusStyles = (props: StyledProps) => style({
  $nest : {
    '& .up-input-group.up-input-focused .up-icon-wrapper svg, & .up-input-group.up-input-focused .up-icon-wrapper svg path, & .up-input-group.up-input-focused .up-icon-wrapper svg polygon' : {
      fill: props.theme.colorMap.primary,
    },
    '& .up-input-group.up-input-focused label, & .up-input-group.up-input-valued label' : {
      transform: 'translate(0, 4px) scale(.75)',
      fontSize: '12px',
      color: props.theme.colorMap.primary,
    }
  }
});

export const getStyles = (props: StyledProps) : string => {
  const heightStyle = props.height == "large" ? HeightLarge : {};
  return classnames(
      style(inputStyles(props)),
      errorStyles(props),
      focusStyles(props),
      style({
      $nest : {
        '& .up-input' : {
          width: sizeMap[props.width],
          ...heightStyle,
        }
      }
    }));
} ;
