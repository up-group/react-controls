// Imports
import * as React from 'react'
import Paragraph from '../Paragraph'
import {UpGrid, UpRow, UpCol} from '../../Containers/Grid'
import UpModal from '../../Containers/Modal/UpModal'
import UpPanel from '../../Containers/Panel'
import UpHeading from '../../Display/Heading'

import iconMap from '../../../Common/theming/iconMap'
import SvgIcon from '../SvgIcon'
import {UpNotificationProps} from './'
import NotificationStyled from './styles'
import defaultTheme from '../../../Common/theming'

export default class UpNotification extends React.Component<UpNotificationProps, {}> {
  
  public static defaultProps : UpNotificationProps = {
    message:"",
    theme:defaultTheme,
    displayMode:"inline"
  }

  constructor(props) {
    super(props) ;
  }
  
  render() {
    const {children, message, status, theme, title, ...others} = this.props ;

    const defaultIconSize = 60 ;

    const icon = <SvgIcon iconName={iconMap[status]}
            width={theme && theme.notificationIconSize > 0 ?  theme.notificationIconSize : defaultIconSize}
            height={theme && theme.notificationIconSize > 0  ? theme.notificationIconSize : defaultIconSize}
            color={theme ? theme.colorMap[`${status}Dark`] : "black"} /> ;
    var NotificationRender ;
    if(this.props.displayMode=="inline") {
        NotificationRender =  () => (<NotificationStyled status={status} {...others}>
            <UpGrid>
                {title && 
                    <UpRow>
                    <UpCol span={24}>
                        <UpHeading tag={'h2'} textAlign={'left'}>{title}</UpHeading>
                    </UpCol>
                    </UpRow>
                }
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
                </UpRow>
            </UpGrid>
        </NotificationStyled>);
    } else if(this.props.displayMode=="modal") {
        NotificationRender = () => (<UpModal header={title} showModal={true}>
            <UpPanel disableAutoIntentIcon={false} type={status}>
                {message}
            </UpPanel>
        </UpModal>);
    }
    return (
        <NotificationRender />
    );
  }
};
