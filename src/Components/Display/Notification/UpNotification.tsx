// Imports
import * as React from 'react';
import Paragraph from '../Paragraph';
import {UpGrid, UpRow, UpCol} from '../../Containers/Grid';
import iconMap from '../../../Common/theming/iconMap';
import colorMap from '../../../Common/theming/colorMap';
import SvgIcon from '../SvgIcon'
import {UpNotificationProps} from './'
import NotificationStyled from './styles';


export default class UpNotification extends React.Component<UpNotificationProps, {}> {
  
  public static defaultProps : UpNotificationProps = {
    message:""
  }

  constructor(props) {
    super(props) ;
  }
  
  componentWillUnmount() {
  }

  componentDidMount() {
  }

  render() {
    const {children, message, status, theme, ...others} = this.props ;

    const defaultIconSize = 60 ;

    const icon = <SvgIcon iconName={iconMap[status]}
            width={theme && theme.notificationIconSize > 0 ?  theme.notificationIconSize : defaultIconSize}
            height={theme && theme.notificationIconSize > 0  ? theme.notificationIconSize : defaultIconSize}
            color={theme ? theme.colorMap[`${status}Dark`] : "black"} /> ;

    return (
        <NotificationStyled status={status} {...others}>
            <UpGrid>
                <UpRow>
                <UpCol span={2}>
                    {icon}
                </UpCol>
                <UpCol span={21}>
                    {message && 
                        <Paragraph>
                        {message}
                        </Paragraph>
                    }
                    {children}
                </UpCol>
                <UpCol span={1}>
                
                </UpCol>
                </UpRow>
            </UpGrid>
        </NotificationStyled>
    );
  }
};
