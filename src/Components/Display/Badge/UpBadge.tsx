import * as React from 'react';
import * as classnames from 'classnames';

import {style} from 'typestyle';
import {IntentType} from '../../../Common/theming/types'
import withTheme, { WithThemeProps } from '../../../Common/theming/withTheme';
import defaultTheme from '../../../Common/theming';

export type WidthSize = 'auto' | 'small' | 'medium' | 'large' | 'xlarge' ;
export type Align = 'left' | 'right'  ;

export interface UpBadgeProps {
  text:string;
  color?:string;
  background?:string;
  rounded?:boolean;
  intent?: IntentType;
  className?:string;
};
 
const UpBadge : React.FunctionComponent<UpBadgeProps & WithThemeProps> = function({
  text = '',
  color = '#FFF',
  background = "black",
  rounded = false,
  theme = defaultTheme,
  intent,
  className,
  children})  {

    var fontColor = color ;
    var backgroundColor = background ;

    if(intent !== null) {
        fontColor = theme.colorMap[`${intent}Fg`] ;
        backgroundColor = theme.colorMap[`${intent}`] ;
    }

    const BadgeStyle = style({
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: (rounded===true)? '18px':'6px',
      padding:'0',
      fontWeight : 700,
      color: fontColor,
      width:(rounded===true)? '32px':'auto',
      height:(rounded===true)? '32px':'auto',
      backgroundColor:backgroundColor
    }) ;

    return (
      <div className={classnames(BadgeStyle, 'up-badge', className)}>
        {text}
        {children}
      </div>
    ) ;
}

export default withTheme<UpBadgeProps>(UpBadge)
