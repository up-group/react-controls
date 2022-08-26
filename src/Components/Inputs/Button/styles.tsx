import remStringFromPX from '../../../Common/utils';
import { NestedCSSProperties } from 'typestyle/lib/types';
import classnames from 'classnames';
import { style, keyframes } from 'typestyle';
import { WithThemeProps } from '../../../Common/theming/withTheme';
import { UpButtonProps, fontSizeMap, buttonSizeMap, UpButtonStyledProps } from './types';
import { calc } from 'csx';
import { toRem } from '../../../Common/theming/utils';

const DEFAULT_MIN_SIZE = toRem(30);
const DEFAULT_BORDER_RADIUS = '4px';

const shadow = (props: UpButtonProps): NestedCSSProperties => {
  return {
    boxShadow: 'inset 0 0 0 1px rgba(16, 22, 26, 0.2), inset 0 -1px 0 rgba(16, 22, 26, 0.1)',
  };
};

export type Position = 'left' | 'right' | 'none';

const positions = (props: UpButtonProps): NestedCSSProperties => {
  const positions: NestedCSSProperties = {};
  const offsetInPx = `${(props.theme.minButtonSize - 22) / 2}px`;
  if (props.width != 'icon') {
    if (props.iconPosition === 'left') {
      positions.position = 'absolute';
      positions.top = offsetInPx;
      positions.left = offsetInPx;
    } else if (props.iconPosition === 'right') {
      positions.position = 'absolute';
      positions.top = offsetInPx;
      positions.right = offsetInPx;
    }
  }
  return positions;
};

const base = (props: UpButtonProps & WithThemeProps): NestedCSSProperties => {
  return {
    $nest: {
      '&.up-btn': {
        textAlign: 'center',
        flex: 1,
        fontSize: remStringFromPX(fontSizeMap[props.fontSize]),
        borderColor: props.borderColor || props.theme.colorMap[`${props.intent}Border`],
        borderWidth: '1px',
        borderStyle: 'solid',
        paddingBottom: 0,
        paddingTop: 0,
        paddingLeft:
          props.width === 'icon'
            ? 0
            : (props.iconName != null || props.actionType != null) && props.iconPosition === 'left'
            ? toRem(32)
            : toRem(6),
        paddingRight:
          props.width === 'icon'
            ? 0
            : (props.iconName != null || props.actionType != null) && props.iconPosition === 'right'
            ? toRem(32)
            : toRem(6),
        textDecoration: 'none',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        position: 'relative',
        minWidth: props.dropDown && props.width != 'icon' ? toRem(44) : 'inherit',
      },
      '&.up-btn.up-btn-drop-down': {
        paddingLeft: 0,
        paddingRight: 0,
        display: 'flex',
        flexDirection: 'row-reverse',
      },
      '&.up-btn.up-btn-drop-down .up-btn-label': {
        paddingRight: 0,
        paddingLeft: 0,
        marginRight: toRem(28),
        marginLeft: toRem(28),
      },
      '&.up-btn.up-btn-drop-down .up-icon-wrapper': {
        position: 'unset',
        marginRight: toRem(14),
      },
      '&.up-btn .up-icon-wrapper': {
        ...positions(props),
      },
      '&.up-btn svg': {
        margin: 0,
        display: 'inline-block',
      },
      '&.up-btn .up-btn-label': {
        display: 'inline-block',
        paddingTop: 0,
        paddingLeft: props.width == 'auto' ? toRem(8) : 0,
        paddingRight: props.width == 'auto' ? toRem(8) : 0,
        color: props.isProcessing ? props.theme.colorMap.disabledBg : 'inherit',
        width: '100%',
        textAlign: 'center',
        textTransform: 'uppercase',
        fontWeight: 700,
        fontSize: toRem(14),
      },
      '&.up-btn:focus': {
        outline: 'transparent auto 0px',
        outlineOffset: 0,
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
      },
    },
  };
};

const disabled = (props: UpButtonProps & WithThemeProps): NestedCSSProperties => {
  return {
    $nest: {
      '&.up-btn[disabled]': {
        cursor: 'not-allowed',
        background: props.theme.colorMap.disabledBg,
        color: props.theme.colorMap.disabledFg,
        borderColor: props.theme.colorMap.disabledBg,
      },
      '&.up-btn[disabled] svg, &.up-btn[disabled] svg path, &.up-btn[disabled] svg polygon': {
        fill: props.theme.colorMap.disabledFg,
      },
    },
  };
};

const toggle = (props: UpButtonProps & WithThemeProps): NestedCSSProperties => {
  return {
    color: props.color || props.theme.colorMap[`${props.intent}HoverFg`] || 'black',
    backgroundColor: props.color || props.theme.colorMap[`${props.intent}Active`] || 'white',
    boxShadow: 'inset 5px 5px 5px rgba(16, 22, 26, 0.2)',
    $nest: {
      '&.up-btn': {
        backgroundColor: 'white',
        boxShadow: 'unset',
        color: `${props.theme.colorMap[props.intent]}`,
        borderBottom: 'unset',
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        borderTopRightRadius: '4px',
        borderTopLeftRadius: '4px !important',
      },
      '&.up-btn svg': {
        transform: !props.disabled ? 'rotate(180deg)' : 'normal',
      },
      '&.up-btn svg, &.up-btn svg path, &.up-btn svg polygon, &.up-btn svg polyline': {
        fill: `${props.backgroundColor || props.theme.colorMap[`${props.intent}`]} !important`,
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
      '&.up-btn:hover .colored svg, &.up-btn:hover .colored svg path, &.up-btn:hover .colored svg polygon, &.up-btn:hover .colored svg polyline':
        {
          fill:
            props.backgroundColor ||
            props.theme.colorMap[`${props.intent}${props.dropDown === 'none' ? 'HoverFg' : ''}`],
        },
      '&:hover:active': {
        color: props.color || props.theme.colorMap[`${props.intent}HoverFg`] || 'black',
        backgroundColor: props.color || props.theme.colorMap[`${props.intent}HoverActive`] || 'white',
      },
      '&:hover:active .colored svg, &:hover:active .colored svg path, &:hover:active .colored svg polygon, &:hover:active .colored svg polyline':
        {
          fill: props.backgroundColor || props.theme.colorMap[`${props.intent}HoverFg`],
        },
      '&:active': {
        color: props.color || props.theme.colorMap[`${props.intent}HoverFg`] || 'black',
        backgroundColor: props.color || props.theme.colorMap[`${props.intent}Active`] || 'white',
        boxShadow: 'inset 5px 5px 5px rgba(16, 22, 26, 0.2)',
      },
      '&:active .colored svg, &:active .colored svg path, &:active .colored svg polygon, &:active .colored svg polyline':
        {
          fill: props.backgroundColor || props.theme.colorMap[`${props.intent}HoverFg`],
        },
      '&.up-btn .colored svg, &.up-btn .colored svg path, &.up-btn .colored svg polygon, &.up-btn .colored svg polyline':
        {
          fill: props.color || props.theme.colorMap[`${props.intent}Fg`] || 'white',
          //background: 'unset !important'
        },
      '&.up-btn': {
        cursor: 'pointer',
      },
    },
  };
};

const large = (props: UpButtonProps & WithThemeProps): NestedCSSProperties => {
  return {
    fontSize: toRem(18),
    lineHeight: '1.3',
    borderRadius: props.theme.borderRadius || DEFAULT_BORDER_RADIUS,
    $nest: {
      '&.up-btn svg': {
        margin: 0,
        width: toRem(20),
        height: toRem(20),
      },
    },
  };
};
const normal = (props: UpButtonProps & WithThemeProps): NestedCSSProperties => {
  return {
    fontSize: remStringFromPX(fontSizeMap[props.fontSize]),
    height: props.theme.minButtonSize || DEFAULT_MIN_SIZE,
    width: props.dropDown != 'none' ? 'auto' : buttonSizeMap[props.width] || 'inherit',
    borderRadius: props.theme.borderRadius || DEFAULT_BORDER_RADIUS,
    $nest: {
      '&.up-btn svg': {
        margin: 0,
        width: toRem(20),
        height: toRem(20),
      },
    },
  };
};

const small = (props: UpButtonProps): NestedCSSProperties => {
  return {
    padding: `${toRem(3)} ${toRem(8)}`,
    fontSize: toRem(12),
    lineHeight: '1.5',
    borderRadius: '3px',
    $nest: {
      '&.up-btn svg': {
        margin: 0,
        width: props.iconSize ? props.iconSize : toRem(16),
        height: props.iconSize ? props.iconSize : toRem(16),
      },
    },
  };
};

const xsmall = (props: UpButtonProps): NestedCSSProperties => {
  return {
    padding: `${toRem(1)} ${toRem(4)}`,
    fontSize: toRem(12),
    lineHeight: '1.5',
    borderRadius: '3px',
    $nest: {
      '&.up-btn svg': {
        margin: 0,
        width: props.iconSize ? props.iconSize : toRem(12),
        height: props.iconSize ? props.iconSize : toRem(12),
      },
    },
  };
};

const defaultIcon = (props: UpButtonProps): NestedCSSProperties => {
  let styles = {};
  if (props.width === 'icon') {
    styles = {
      $nest: {
        '&.up-btn .up-icon-wrapper': {
          display: 'flex',
          width: 'auto',
          height: 'auto',
          justifyContent: 'center', // Main Axe
          alignItems: 'center', // Secondary axe
        },
      },
    };
  }
  return styles;
};

const icon = (props: UpButtonProps): NestedCSSProperties => {
  const styles = {
    padding: 0,
    height: toRem(24),
    width: toRem(24),
    minWidth: 'initial',
    minHeight: 'initial',
    borderRadius: '3px',
    fontSize: toRem(12),
    lineHeight: '1.5',
    $nest: {
      '&.up-btn svg': {
        margin: '0px !important',
        width: props.iconSize ? props.iconSize : toRem(15),
        height: props.iconSize ? props.iconSize : toRem(15),
        padding: toRem(3),
      },
    },
  };
  return styles;
};

const iconXSmall = (props: UpButtonProps): NestedCSSProperties => {
  const styles = {
    padding: `${toRem(1)} ${toRem(2)}`,
    minWidth: 'initial',
    minHeight: 'initial',
    borderRadius: '3px',
    fontSize: toRem(10),
    width: toRem(16),
    height: toRem(16),
    lineHeight: '1',
    $nest: {
      '&.up-btn svg': {
        margin: '3px',
        width: props.iconSize ? props.iconSize : toRem(12),
        height: props.iconSize ? props.iconSize : toRem(12),
      },
    },
  };
  return styles;
};

const iconSmall = (props: UpButtonProps): NestedCSSProperties => {
  const styles = {
    padding: `${toRem(3)} ${toRem(4)}`,
    minWidth: 'initial',
    minHeight: 'initial',
    borderRadius: '3px',
    fontSize: toRem(12),
    lineHeight: '1.5',
    $nest: {
      '&.up-btn svg': {
        margin: toRem(3),
        width: toRem(16),
        height: toRem(16),
      },
    },
  };
  return styles;
};

export const iconNormal = (props: UpButtonProps): NestedCSSProperties => {
  const styles = {
    padding: `${toRem(4)} ${toRem(5)}`,
    borderRadius: '3px',
    minWidth: 'initial',
    minHeight: 'initial',
    fontSize: toRem(12),
    lineHeight: 1.5,
    $nest: {
      '&.up-btn svg': {
        margin: toRem(3),
        width: toRem(20),
        height: toRem(20),
      },
    },
  };
  return styles;
};

export const iconLarge = (props: UpButtonProps): NestedCSSProperties => {
  return {
    $nest: {
      '&.up-btn': {
        padding: toRem(8),
        borderRadius: '3px',
        minWidth: 'initial',
        minHeight: 'initial',
        fontSize: toRem(14),
        lineHeight: 1.5,
      },
      '&.up-btn svg': {
        margin: toRem(3),
        width: toRem(20),
        height: toRem(20),
      },
    },
  };
};

export const getWidth = (props: UpButtonProps): NestedCSSProperties => {
  return props.width != 'icon' ? normal(props) : {};
};

export const getHeight = (props: UpButtonProps): NestedCSSProperties => {
  if (props.width == 'icon') {
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
};

export const rounded = (props: UpButtonProps): NestedCSSProperties => {
  if (props.width === 'icon') {
    return {
      height: toRem(32),
      width: toRem(32),
      borderRadius: toRem(16),
      $nest: {
        div: {
          margin: 0,
          height: toRem(32),
          width: toRem(32),
        },
        '&.up-btn svg': {
          margin: `${toRem(4)} !important`,
          width: toRem(24),
          height: toRem(24),
        },
      },
    };
  } else {
    return {
      $nest: {
        '&.up-btn': {
          borderRadius: toRem(22),
        },
      },
    };
  }
};

export const borderless = (props: UpButtonProps): NestedCSSProperties => {
  return {
    $nest: {
      '&.up-btn': {
        border: 'unset !important',
        backgroundColor: 'transparent',
      },
      '&.up-btn svg, &.up-btn svg path, &.up-btn svg polygon, &.up-btn svg polyline': {
        fill: ` ${props.theme.colorMap[props.intent]} !important`,
      },
      '&.up-btn:hover .colored svg, &.up-btn:hover .colored svg path, &.up-btn:hover .colored svg polygon, &.up-btn:hover .colored svg polyline':
        {
          fill: '#C47400 !important',
        },
      '&:hover:active': {
        color: 'unset',
        backgroundColor: 'unset',
      },
      '&:active': {
        boxShadow: 'unset',
      },
    },
  };
};

export const rotatingAnimation = keyframes({
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
  },
});

export const rotate = (props: UpButtonProps): NestedCSSProperties => {
  return {
    $nest: {
      '& .up-rotating': {
        '-webkit-animation': `${rotatingAnimation} 2s linear infinite`,
        '-ms-animation': `${rotatingAnimation} 2s linear infinite`,
        animation: `${rotatingAnimation} 2s linear infinite`,
      },
    },
  };
};

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
    props.isToggled ? style(toggle(props)) : null,
    props.borderless && props.width === 'icon' ? style(borderless(props)) : null
  );
};

export const getWrapperStyles = (props: UpButtonStyledProps): string => {
  return style({
    display: 'inline-block',
    position: 'relative',
    width: props.dropDown != 'none' ? 'auto' : buttonSizeMap[props.width] || 'inherit',
    $nest: {
      '& .up-btn-missing-border': {
        width: '100%',
        borderBottom: `1px solid ${props.theme.colorMap[props.intent]}`,
      },
    },
  });
};
