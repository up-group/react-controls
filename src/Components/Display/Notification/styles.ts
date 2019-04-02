// Imports
import { UpNotificationProps } from './UpNotification';
import { NestedCSSProperties } from 'typestyle/lib/types';
import * as classnames from 'classnames';
import { style } from 'typestyle';
import { WithThemeProps } from '../../../Common/theming/withTheme';

export const colors = (props: UpNotificationProps & WithThemeProps ) : NestedCSSProperties => {
  return { 
      position: 'relative',
      backgroundColor: props.displayMode === 'text' ? 'transparent' : props.theme.colorMap[`${props.intent}Light`] || props.theme.colorMap.white3,
      color: props.theme.colorMap[`${props.intent}Dark`] ||  props.theme.colorMap.darkGray5,
      border: props.displayMode === 'text' ? 0 : `1px solid ${props.theme.colorMap[`${props.intent}Dark`] ||  props.theme.colorMap.darkGray5}`,
      borderRadius: props.displayMode === 'text' ? 0 : props.theme.borderRadius,
      $nest : {
            '& p, & span, & div, & em, & strong' : {
                fontWeight: 500,
                textAlign:'left',
                color: props.theme.colorMap[`${props.intent}Dark`] ||  props.theme.colorMap.darkGray5,
            },
        }
  }
};

export const icon  = (props : UpNotificationProps & WithThemeProps) : NestedCSSProperties => {
  return {
      $nest : {
          '& .up-notification svg, & .up-notification svg path, & .up-notification svg polygon' : {
              fill: props.theme ? props.theme.colorMap[`${props.intent}Dark`] : props.theme.colorMap.offwhite,
              margin: '10px',
              display: 'inline-block',
          },
      }
  }
};

export const getStyles  = (props: UpNotificationProps) : string => (
  classnames(style(colors(props)), style(icon(props)), style({
    width:'100%',
    padding:'8px',
    borderRadius:'4px',
    boxSizing:'border-box',
  }))
);
