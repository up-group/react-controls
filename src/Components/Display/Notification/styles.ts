// Imports
import { UpNotificationProps } from './UpNotification';
import { NestedCSSProperties } from 'typestyle/lib/types';
import * as classnames from 'classnames';
import { style, keyframes } from 'typestyle';
import { WithThemeProps } from '../../../Common/theming/withTheme';
import { MutableRefObject } from 'react';
import { animateFromLeft, animateFromRight } from '../../../Common/theming/animations';

export const colors = (
  props: UpNotificationProps & WithThemeProps
): NestedCSSProperties => {
  return {
    position: 'relative',
    backgroundColor:
      props.displayMode === 'text'
        ? 'transparent'
        : props.theme.colorMap[`${props.intent}`] ||
          props.theme.colorMap.white3,
    color:
      props.theme.colorMap[`${props.intent}Dark`] ||
      props.theme.colorMap.darkGray5,
    borderRadius:
      props.displayMode === 'text' ? 0 : props.theme.borderRadius,
    $nest: {
      '& p, & span, & div, & em, & strong': {
        fontWeight: 400,
        textAlign: 'left',
        color:
          props.displayMode === 'text'
            ? props.theme.colorMap[`${props.intent}`]
            : props.theme.colorMap.white1 ||
              props.theme.colorMap.darkGray5
      }
    }
  };
};

export const icon = (
  props: UpNotificationProps & WithThemeProps
): NestedCSSProperties => {
  const iconWithBorderStyle: NestedCSSProperties = {
    display: 'flex',
    marginLeft: '25px',
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: '25px',
    minHeight: '25px',
    border: '1px solid white',
    borderRadius: '360px'
  };
  const iconContainerStyle: NestedCSSProperties =
    props.intent === 'success' ||
    props.intent === 'error' ||
    props.intent === 'danger'
      ? { marginLeft: '25px' }
      : iconWithBorderStyle;
  return {
    $nest: {
      '& .up-notification .up-notification-icon-container': {
        ...iconContainerStyle
      },
      '& .up-notification .colored svg, & .up-notification .colored svg path, & .up-notification .colored svg polygon, & .up-notification .colored svg polyline': {
        fill:
          props.displayMode === 'text'
            ? props.theme.colorMap[`${props.intent}`]
            : props.intent !== 'success' &&
              props.theme.colorMap.white1,
        //margin: "10px",
        display: 'inline-block',
        background: 'unset !important'
      },
      '& .up-notification .cancel-icon': {
        position: 'absolute',
        top: '10px',
        right: '10px',
        cursor: 'pointer'
      },
      '& .up-notification .cancel-icon svg path': {
        fill: props.theme.colorMap.white1
      }
    }
  };
};

export const text = props => {
  return {
    $nest: {
      '& .up-notification .up-notification-message': {
        marginLeft: '25px'
      }
    }
  };
};

export const progressBar = (props): NestedCSSProperties => {
  const progress = keyframes({
    from: {
      width: '0%'
    },
    to: {
      width: '100%'
    }
  });
  return {
    $nest: {
      '& .up-notification-progress-bar-container': {
        position: 'absolute',
        backgroundColor: props.theme.colorMap.grey1,
        width: '100%',
        borderBottomRightRadius: '4px',
        borderBottomLeftRadius: '4px',
        bottom: '0px',
        right: '0px'
      },
      '& .up-notification-progress-bar': {
        width: '100%',
        height: '4px',
        animationPlayState: 'running',
        animation: `${progress} ${props.duration}s`,
        backgroundColor: props.theme.colorMap.gray6,
        borderBottomRightRadius: '4px',
        borderBottomLeftRadius: '4px'
      },
      '&.up-notification-container:hover .up-notification-progress-bar': {
        animationPlayState: 'paused'
      }
    }
  };
};

export const getStyles = (
  props: UpNotificationProps,
  notificationIsClosing: boolean
): string => {
   
  const animation = !notificationIsClosing
    ? { ...animateFromRight(1, 'ease', 'fadeIn') }
    : { ...animateFromLeft(1, 'ease', 'fadeOut') };
  return classnames(
    style(colors(props)),
    style(icon(props)),
    style(text(props)),
    style(progressBar(props)),
    style({
      width: '100%',
      padding: '8px',
      borderRadius: '4px',
      boxSizing: 'border-box',
      minHeight: '100px',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      ...animation,
    })
  );
};
