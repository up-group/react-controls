// Imports
import * as React from 'react'
import * as classnames from 'classnames';

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
  intent?: IntentType;
  dismissable?:boolean;
  title?:string;
  displayMode? : NotificationDisplayMode;
}

export interface UpNotificationProps extends CommonProps  {
  message?: JSX.Element | string;
  className?: string;
  iconWidth?:number;
}

class UpNotification extends React.Component<UpNotificationProps & WithThemeProps> {
  
   static defaultProps : UpNotificationProps & WithThemeProps = {
    message:"",
    theme:defaultTheme,
    displayMode:"inline",
    intent:'info',
    iconWidth: 2,
  }

  constructor(props) {
    super(props) ;
  }
  
  render() {
    const {children, message, intent, theme, title, className} = this.props ;
    const defaultIconSize = 60 ;

    const icon = <SvgIcon iconName={iconMap[intent]}
        width={theme && theme.notificationIconSize != null ?  theme.notificationIconSize : defaultIconSize}
        height={theme && theme.notificationIconSize != null ? theme.notificationIconSize : defaultIconSize}
    /> ;
    
    let NotificationRender ;
    
    if(this.props.displayMode=="inline") {
        NotificationRender =  () => (
            <div className={classnames(getStyles(this.props), className)}>
                <UpGrid className={'up-notification'}>
                    {title && 
                        <UpRow>
                            <UpCol span={24}>
                                <UpHeading tag={'h2'} textAlign={'left'}>{title}</UpHeading>
                            </UpCol>
                        </UpRow>
                    }
                    <UpRow>
                        <UpCol span={this.props.iconWidth} xs={8}>
                            {icon}
                        </UpCol>
                        <UpCol span={23 - this.props.iconWidth} style={{paddingTop: '10px'}} xs={16}>
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