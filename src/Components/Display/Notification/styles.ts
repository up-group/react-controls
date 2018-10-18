// Imports
import styled, {css} from '../../../Common/theming/themedComponents';
import {UpNotificationStyledProps} from './'
import {ThemeInterface} from '../../../Common/theming/types'

const colors = (props: UpNotificationStyledProps) => css`
  position:relative;
  background-color: ${props.theme.colorMap[`${props.status}Dark`] || props.theme.colorMap.black3};
  color: ${props.theme.colorMap.offwhite};
  p {
    font-weight: 500;
    text-align:left;
  }
`;

const icon  = (props: UpNotificationStyledProps) => css`
  svg {
    fill: ${props.theme.colorMap.offwhite};;
    margin:10px;
    display:inline-block;
}`

const NotificationStyled = styled.div`
  ${(props: UpNotificationStyledProps) => colors(props)}
  ${(props: UpNotificationStyledProps) => icon(props)}
  width:98%;
  margin:1%;
  padding:8px;
  border-radius:4px;
`;

export default NotificationStyled