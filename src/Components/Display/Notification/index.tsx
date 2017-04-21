// Imports
import * as React from 'react';
import Paragraph from '../Paragraph';
import Box from '../../Containers/Box';
import {IntentType} from '../../../Common/theming/types';
import iconMap from '../../../Common/theming/iconMap';
import colorMap from '../../../Common/theming/colorMap';
import SvgIcon from '../SvgIcon'
import styled, {css} from '../../../Common/theming/themedComponents';

// Exports
export interface Props extends React.HTMLProps<Notification> {
  message: JSX.Element | string;
  status?: IntentType;
  theme?:any;
  dismissable?:boolean;
}

export default function Notification({
  message,
  status,
  theme,
  ...others,
}: Props): JSX.Element {
   const defaultIconSize = 40 ;
   const icon = <SvgIcon iconName={iconMap[status]}
          width={theme ? theme.notificationIconSize  ||  defaultIconSize : defaultIconSize}
          height={theme ? theme.notificationIconSize ||  defaultIconSize : defaultIconSize}
          color={colorMap[`${status}Dark`] || "black"} /> ;

var BoxStyled = styled(Box)`
  ${(props:Props) => colors(props.status)}
  border-radius:4px;
  svg {
    margin:10px;
    display:inline-block;
  }
`;

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




const colors = (status: IntentType) => css`
  position:relative;
  background-color: ${colorMap[`${status}Light`] || colorMap.offwhite};
  p {
    color: ${colorMap[`${status}Dark`] || colorMap.black3};
  }
`;


