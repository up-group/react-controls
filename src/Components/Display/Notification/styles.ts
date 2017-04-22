// Imports
import styled, {css} from '../../../Common/theming/themedComponents';
import * as Color from 'color'
import {UpGrid, UpGridProps} from '../../Containers/Grid'
import {UpNotificationStyledProps} from './'
import {ThemeInterface} from '../../../Common/theming/types'

const colors = (props: UpNotificationStyledProps) => css`
  position:relative;
  background-color: ${Color(props.theme.colorMap[`${props.status}Light`]).lighten(0.8).hsl().string() || props.theme.colorMap.offwhite};
  p {
    color: ${props.theme.colorMap.black3};
    font-weight: 500;
    text-align:left;
  }
`;

const NotificationStyled = styled.div`
  ${(props: UpNotificationStyledProps) => colors(props)}
  width:98%;
  margin:1%;
  border-radius:4px;
  svg {
    margin:10px;
    display:inline-block;
  }
`;

export default NotificationStyled