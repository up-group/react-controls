// Imports
import remStringFromPX from '../../../Common/utils'
import { NestedCSSProperties } from 'typestyle/lib/types';

import * as classnames from 'classnames';
import { style, keyframes } from 'typestyle';
import { WithThemeProps } from '../../../Common/theming/withTheme';
import { UpButtonProps, fontSizeMap, buttonSizeMap, UpButtonStyledProps } from '.';
import { calc } from 'csx';

const DEFAULT_MIN_SIZE = "30px"
const DEFAULT_BORDER_RADIUS = "4px"

const shadow = (props: UpButtonProps): NestedCSSProperties => {
  return {
    boxShadow: 'inset 0 0 0 1px rgba(16, 22, 26, 0.2), inset 0 -1px 0 rgba(16, 22, 26, 0.1)',
  };
}

export type Position = 'left' | 'right' | 'none'

const positions = (props: UpButtonProps): NestedCSSProperties => {
  const positions: NestedCSSProperties = {};
  if (props.width != 'icon') {
    if (props.iconPosition === 'left') {
      positions.position = 'absolute';
      positions.top = '6px';
      positions.left = '6px';
    } else if (props.iconPosition === 'right') {
      positions.position = 'absolute';
      positions.top = '6px';
      positions.right = '6px';
    }
  }
  return positions;
}


const base = (props: UpButtonProps & WithThemeProps): NestedCSSProperties => {
  return {
    $nest: {
      '&.up-btn': {
        textAlign: 'center',
        fontSize: remStringFromPX(fontSizeMap[props.fontSize]),
        borderColor: props.borderColor || props.theme.colorMap[`${props.intent}Border`],
        borderWidth: '1px',
        borderStyle: 'solid',
        paddingLeft: props.width === 'icon' ? '0px' : (props.iconName != null || props.actionType != null) &&  props.iconPosition === 'left' ? '32px' : '6px',
        paddingRight: props.width === 'icon' ? '0px' : (props.iconName != null || props.actionType != null) && props.iconPosition === 'right' ? '32px' : '6px',
        textDecoration: 'none',
        display: 'inline-block',
        verticalAlign: 'middle',
        position: 'relative',
      },
      '&.up-btn .up-icon-wrapper': {
        ...positions(props),
      },
      '&.up-btn svg': {
        margin: '0px',
        display: 'inline-block',
      },
      '&.up-btn span': {
        display: 'inline-block',
        paddingTop: '8px',
        paddingBottom: '3px',
        height: props.theme.minButtonSize || DEFAULT_MIN_SIZE,
        paddingLeft: props.width == "auto" ? "8px" : "inherit",
        paddingRight: props.width == "auto" ? "8px" : "inherit",
        color: props.isProcessing ? props.theme.colorMap.disabledBg : 'inherit',
      },
      '&.up-btn:focus': {
        outline: 'transparent auto 0px',
        outlineOffset: '0px',
      },
      '&.up-btn .up-loading-indicator-wrapper': {
        position: 'absolute',
        top: '0',
        left: '0',
        width: '100%',
        height: calc('100%'),
        display: 'flex',
        alignContent: 'center',
        justifyItems: 'center',
      },
      '&.up-btn .up-loading-indicator-wrapper > div': {
        width: '100%',
        height: calc('100%'),
      }
    }
  }
};

const disabled = (props: UpButtonProps & WithThemeProps): NestedCSSProperties => {
  return {
    background: props.theme.colorMap.disabledBg,
    color: props.theme.colorMap.disabledFg,
    $nest: {
      '&.up-btn': {
        cursor: 'not-allowed',
      },
    }
  }
};

const toggle = (props: UpButtonProps & WithThemeProps): NestedCSSProperties => {
  return {
    color: props.color || props.theme.colorMap[`${props.intent}HoverFg`] || 'black',
    backgroundColor: props.color || props.theme.colorMap[`${props.intent}Active`] || 'white',
    boxShadow: 'inset 5px 5px 5px rgba(16, 22, 26, 0.2)',
    $nest: {
      '&.up-btn svg, &.up-btn svg path, &.up-btn svg polygon': {
        fill: props.backgroundColor || props.theme.colorMap[`${props.intent}HoverFg`],
      },
    },
  };
};

const active = (props: UpButtonProps & WithThemeProps): NestedCSSProperties => {
  return {
    color: props.color || props.theme.colorMap[`${props.intent}Fg`] || 'black',
    backgroundColor: props.backgroundColor || props.theme.colorMap[props.intent],
    borderColor: props.borderColor || props.theme.colorMap[`${props.intent}Border`],
    borderWidth: '1px',
    borderStyle: 'solid',
    $nest: {
      '&:hover': {
        color: props.color || props.theme.colorMap[`${props.intent}HoverFg`] || 'black',
        backgroundColor: props.color || props.theme.colorMap[`${props.intent}Hover`] || 'white',
      },
      '&.up-btn:hover svg, &.up-btn:hover svg path, &.up-btn:hover svg polygon': {
        fill: props.backgroundColor || props.theme.colorMap[`${props.intent}HoverFg`],
      },
      '&:hover:active': {
        color: props.color || props.theme.colorMap[`${props.intent}HoverFg`] || 'black',
        backgroundColor: props.color || props.theme.colorMap[`${props.intent}HoverActive`] || 'white',
      },
      '&:hover:active svg, &:hover:active svg path, &:hover:active svg polygon': {
        fill: props.backgroundColor || props.theme.colorMap[`${props.intent}HoverFg`],
      },
      '&:active': {
        color: props.color || props.theme.colorMap[`${props.intent}HoverFg`] || 'black',
        backgroundColor: props.color || props.theme.colorMap[`${props.intent}Active`] || 'white',
        boxShadow: 'inset 5px 5px 5px rgba(16, 22, 26, 0.2)',
      },
      '&:active svg, &:active svg path, &:active svg polygon': {
        fill: props.backgroundColor || props.theme.colorMap[`${props.intent}HoverFg`],
      },
      '&.up-btn svg, &.up-btn svg path, &.up-btn svg polygon': {
        fill: props.color || props.theme.colorMap[`${props.intent}Fg`] || 'white',
      },
      '&.up-btn': {
        cursor: 'pointer',
      },
    }
  }
};

const large = (props: UpButtonProps & WithThemeProps): NestedCSSProperties => {
  return {
    fontSize: '18px',
    lineHeight: '1.3',
    borderRadius: props.theme.borderRadius || DEFAULT_BORDER_RADIUS,
    $nest: {
      '&.up-btn svg': {
        margin: '0px',
        width: '32px',
        height: '32px',
      }
    }
  }
};
const normal = (props: UpButtonProps & WithThemeProps): NestedCSSProperties => {
  return {
    fontSize: '14px',
    lineHeight: '1.2',
    height: '34px',
    width: props.dropDown != 'none' ? "auto" : buttonSizeMap[props.width] || 'inherit',
    borderRadius: props.theme.borderRadius || DEFAULT_BORDER_RADIUS,
    $nest: {
      '&.up-btn svg': {
        margin: '0px',
        width: '20px',
        height: '20px',
      }
    }
  }
};

const small = (props: UpButtonProps): NestedCSSProperties => {
  return {
    padding: '3px 8px',
    fontSize: '12px',
    lineHeight: '1.5',
    borderRadius: '3px',
    $nest: {
      '&.up-btn svg': {
        margin: '0px',
        width: props.iconSize ? props.iconSize : '16px',
        height: props.iconSize ? props.iconSize : '16px',
      }
    }
  }
};

const xsmall = (props: UpButtonProps): NestedCSSProperties => {
  return {
    padding: '1px 4px',
    fontSize: '12px',
    lineHeight: '1.5',
    borderRadius: '3px',
    $nest: {
      '&.up-btn svg': {
        margin: '0px',
        width: props.iconSize ? props.iconSize : '12px',
        height: props.iconSize ? props.iconSize : '12px',
      }
    }
  }
};

const defaultIcon = (props: UpButtonProps): NestedCSSProperties => {
  let styles = {};
  if (props.width === 'icon') {
    styles = {
      $nest : {
        '&.up-btn .up-icon-wrapper' : {
          display: 'flex',
          width: 'auto',
          height: 'auto',
          justifyContent: 'center', // Main Axe
          alignItems: 'center', // Secondary axe
        }
      }
    }
  }
  return styles ;
}

const icon = (props: UpButtonProps): NestedCSSProperties => {
  const styles = {
    padding: '0px',
    height: '24px',
    width: '24px',
    minWidth: 'initial',
    minHeight: 'initial',
    borderRadius: '3px',
    fontSize: '12px',
    lineHeight: '1.5',
    $nest: {
      '&.up-btn svg': {
        margin: '0px !important',
        width: props.iconSize ? props.iconSize : '15px',
        height: props.iconSize ? props.iconSize : '15px',
        border: '0px',
        padding: '3px',
      }
    }
  }
  return styles ;
}

const iconXSmall = (props: UpButtonProps): NestedCSSProperties => {
  const styles = {
    padding: '1px 2px',
    minWidth: 'initial',
    minHeight: 'initial',
    borderRadius: '3px',
    fontSize: '10px',
    width: '16px',
    height: '16px',
    lineHeight: '1',
    $nest: {
      '&.up-btn svg': {
        margin: '3px',
        width: props.iconSize ? props.iconSize : '12px',
        height: props.iconSize ? props.iconSize : '12px',
      }
    }
  }
  return styles;
}

const iconSmall = (props: UpButtonProps): NestedCSSProperties => {
  const styles = {
    padding: '3px 4px',
    minWidth: 'initial',
    minHeight: 'initial',
    borderRadius: '3px',
    fontSize: '12px',
    lineHeight: '1.5',
    $nest: {
      '&.up-btn svg': {
        margin: '3px',
        width: '16px',
        height: '16px',
      }
    }
  }
  return styles;
}

const iconNormal = (props: UpButtonProps): NestedCSSProperties => {
  const styles = {
    padding: '4px 5px',
    borderRadius: '3px',
    minWidth: 'initial',
    minHeight: 'initial',
    fontSize: '12px',
    lineHeight: 1.5,
    $nest: {
      '&.up-btn svg': {
        margin: '3px',
        width: '20px',
        height: '20px',
      }
    }
  }
  return styles;
};

const iconLarge = (props: UpButtonProps): NestedCSSProperties => {
  return {
    padding: '6px 8px',
    borderRadius: '3px',
    minWidth: 'initial',
    minHeight: 'initial',
    fontSize: '14px',
    lineHeight: 1.5,
    $nest: {
      '&.up-btn svg': {
        margin: '3px',
        width: '32px',
        height: '32px',
      }
    }
  }
};

const getWidth = (props: UpButtonProps): NestedCSSProperties => {
  return props.width != "icon" ? normal(props) : {};
}

const getHeight = (props: UpButtonProps): NestedCSSProperties => {
  if (props.width == "icon") {
    switch (props.height) {
      case 'xsmall':
        return iconXSmall(props);
      case 'small':
        return iconSmall(props);
      case 'large':
        return iconLarge(props);
      default:
        return icon(props);
    }
  } else {
    switch (props.height) {
      case 'xsmall':
        return xsmall(props);
      case 'small':
        return small(props);
      case 'large':
        return large(props);
      default:
        return normal(props);
    }
  }
}

const rounded = (props: UpButtonProps): NestedCSSProperties => {
  if(props.width === 'icon') {
    return {
      height: '32px',
      width: '32px',
      borderRadius: '16px',
      $nest: {
        div: {
          margin: '0px',
          height: '32px',
          width: '32px',
        },
        '&.up-btn svg': {
          margin: '4px !important',
          width: '24px',
          height: '24px',
        }
      }
    }
  } else {
    return {
      $nest: {
        '&.up-btn' : {
          borderRadius: '17px',
        }
      }
    }
  }
};

const rotatingAnimation = keyframes({
  from: {
    '-ms-transform': 'rotate(0deg)',
    '-moz-transform': 'rotate(0deg)',
    '-webkit-transform': 'rotate(0deg)',
    transform: 'rotate(0deg)',
  },
  to: {
    '-ms-transform': 'rotate(360deg)',
    '-moz-transform': 'rotate(360deg)',
    '-webkit-transform': 'rotate(360deg)',
    transform: 'rotate(360deg)',
  }
});

const rotate = (props: UpButtonProps): NestedCSSProperties => {
  return {
    $nest: {
      '& .up-rotating': {
        '-webkit-animation': `${rotatingAnimation} 2s linear infinite`,
        '-ms-animation': `${rotatingAnimation} 2s linear infinite`,
        animation: `${rotatingAnimation} 2s linear infinite`,
      }
    }
  }
}

export const getStyles = (props: UpButtonStyledProps): string => {
  return classnames(
    style(base(props)),
    style(defaultIcon(props)),
    style(getWidth(props)),
    style(getHeight(props)),
    props.shadow ? style(shadow(props)) : null,
    props.rounded ? style(rounded(props)) : null,
    props.disabled ? style(disabled(props)) : style(active(props)),
    props.rotate ? style(rotate(props)) : null,
    props.isToggled ? style(toggle(props)) : null);
}
