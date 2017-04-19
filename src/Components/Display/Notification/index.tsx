import * as React from 'react';
import BoxStyled from './styles';
import Paragraph from '../Paragraph';
import Box from '../../Containers/Box';
import { Status } from './types';
import iconMap from '../../../Common/theming/iconMap';
import colorMap from '../../../Common/theming/colorMap';
import SvgIcon from '../SvgIcon'

export interface Props extends React.HTMLProps<Notification> {
  message: JSX.Element | string;
  status?: Status;
  theme?:any;
}

export default function Notification({
  message,
  status,
  theme,
  ...rest,
}: Props): JSX.Element {
   const defaultIconSize = 40 ;
   const icon = <SvgIcon iconName={iconMap[status]}
          width={theme ? theme.notificationIconSize  ||  defaultIconSize : defaultIconSize}
          height={theme ? theme.notificationIconSize ||  defaultIconSize : defaultIconSize}
          color={colorMap[`${status}Fg`] || "black"} /> ;

  return (<BoxStyled status={status} flexDirection="row" message="" boxSize={{ horizontal: 'full' }} pad="small" 
    justifyContent="flex-start"
    alignItems="stretch" selectable>
      <Box boxSize={{ horizontal: "xsmall" }} justifyContent="center"  alignItems="center">
        {icon}
      </Box>
      <Box boxSize={{ horizontal: "large" }} justifyContent="flex-start" alignItems="flex-start">
        <Paragraph paragraphSize="large">
          {message}
        </Paragraph>
      </Box>
    </BoxStyled>);
};
