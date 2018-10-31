// Imports
import * as React from 'react'
//import Paragraph from '../Paragraph'
import {UpGrid, UpRow, UpCol} from '../../Containers/Grid'
import UpModal from '../../Containers/Modal/UpModal'
import UpPanel from '../../Containers/Panel'
import UpHeading from '../../Display/Heading'

import iconMap from '../../../Common/theming/iconMap'
import SvgIcon from '../SvgIcon'
import defaultTheme from '../../../Common/theming'

import { IntentType } from '../../../Common/theming/types';
import { getStyles } from './styles';
import withTheme, { WithThemeProps } from '../../../Common/theming/withTheme';

export type NotificationDisplayMode = 'inline' | 'modal' ;

// Exports
export interface CommonProps  {
  status?: IntentType;
  dismissable?:boolean;
  title?:string;
  displayMode? : NotificationDisplayMode;
}

export interface UpNotificationProps extends CommonProps  {
  message?: JSX.Element | string;
}

class UpNotification extends React.Component<UpNotificationProps & WithThemeProps> {
  
   static defaultProps : UpNotificationProps & WithThemeProps = {
    message:"",
    theme:defaultTheme,
    displayMode:"inline",
    status:'info',
  }

  constructor(props) {
    super(props) ;
  }
  
  render() {
    const {children, message, status, theme, title} = this.props ;
    const defaultIconSize = 60 ;

    const icon = <SvgIcon iconName={iconMap[status]}
            width={theme && theme.notificationIconSize > 0 ?  theme.notificationIconSize : defaultIconSize}
            height={theme && theme.notificationIconSize > 0  ? theme.notificationIconSize : defaultIconSize}
            color={theme ? theme.colorMap[`${status}Dark`] : "black"} /> ;
    
    let NotificationRender ;
    
    if(this.props.displayMode=="inline") {
        NotificationRender =  () => (
            <div className={getStyles(this.props)}>
                <UpGrid className={'up-notification'}>
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
                            <p>
                            {message}
                            </p>
                        }
                        {children}
                    </UpCol>
                    </UpRow>
                </UpGrid>
            </div>);
    } else if(this.props.displayMode=="modal") {
        NotificationRender = () => (<UpModal header={title} showModal={true}>
            <UpPanel disableAutoIntentIcon={false}/* type={status}*/>
                {message}
            </UpPanel>
        </UpModal>);
    }

    return (
        <NotificationRender />
    );
  }
};

export default withTheme<UpNotificationProps>(UpNotification)