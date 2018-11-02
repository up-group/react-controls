// Imports
import { UpNotificationProps } from './UpNotification';
import { NestedCSSProperties } from 'typestyle/lib/types';
import * as classnames from 'classnames';
import { style } from 'typestyle';
import { WithThemeProps } from '../../../Common/theming/withTheme';

export const colors = (props: UpNotificationProps & WithThemeProps ) : NestedCSSProperties => {
  return { 
      position: 'relative',
      backgroundColor: props.theme.colorMap[`${props.status}Dark`] || props.theme.colorMap.black3,
      color: props.theme.colorMap.offwhite,
      $nest : {
              p : {
                  fontWeight: 500,
                  textAlign:'left',
              },
          }
  }
};

export const icon  = (props : UpNotificationProps & WithThemeProps) : NestedCSSProperties => {
  return {
      $nest : {
          '.up-notification svg, .up-notification svg path, .up-notification svg polygon' : {
              fill: props.theme.colorMap.offwhite,
              margin: '10px',
              display: 'inline-block',
          }
      }
  }
};

export const getStyles  = (props: UpNotificationProps) : string => (
  classnames(style(colors(props)), style(icon(props)), style({
    width:'98%',
    margin:'1%',
    padding:'8px',
    borderRadius:'4px',
  }))
);
