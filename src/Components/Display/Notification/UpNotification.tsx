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
import UpBox from '../../Containers/Box';

export type NotificationDisplayMode = 'inline' | 'modal' | 'text' ;

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
  iconSize?: string;
}

class UpNotification extends React.Component<UpNotificationProps & WithThemeProps> {
  
   static defaultProps : UpNotificationProps & WithThemeProps = {
    message:"",
    theme:defaultTheme,
    displayMode:"inline",
    intent:'info',
    iconSize: "48px",
  }

  constructor(props) {
    super(props) ;
  }
  
  render() {
    const {children, message, intent, theme, title, className} = this.props ;

    let icon = null ;
    
    const iconSize = this.props.iconSize || theme && theme.notificationIconSize != null ? theme.notificationIconSize : 60;
    
    if (intent && iconMap[intent]) {
        icon = <SvgIcon iconName={iconMap[intent]}
            width={iconSize}
            height={iconSize}   
        /> ;
    }
    
    let NotificationRender ;
    
    NotificationRender =  () => (
        <div className={classnames(getStyles(this.props), className)}>
            <UpGrid className={'up-notification'}>
                {this.props.displayMode !== "modal" && title && 
                    <UpRow>
                        <UpCol span={24}>
                            <UpHeading tag={'h2'} textAlign={'left'}>{title}</UpHeading>
                        </UpCol>
                    </UpRow>
                }
                <UpRow>
                    <UpBox flexDirection={'row'} justifyContent={'flex-start'} alignItems={'center'}>
                        {icon}
                        <div style={{ alignSelf: 'auto'}}>
                            {message && 
                                <p>{message}</p>
                            }
                            {children}
                        </div>
                    </UpBox>
                </UpRow>
            </UpGrid>
        </div>);

    if(this.props.displayMode=="modal") {
        return <UpModal header={title} showModal={true}>
                <NotificationRender />
            </UpModal>;
    }

    return (
        <NotificationRender />
    );
  }
};

export default withTheme<UpNotificationProps>(UpNotification)