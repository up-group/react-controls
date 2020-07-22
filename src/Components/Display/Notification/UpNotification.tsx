// Imports
import * as React from 'react';
import * as classnames from 'classnames';

//import Paragraph from '../Paragraph'
import { UpGrid, UpRow, UpCol } from '../../Containers/Grid';
import UpModal from '../../Containers/Modal/UpModal';
import UpHeading from '../../Display/Heading';
import iconMap from '../../../Common/theming/iconMap';
import SvgIcon from '../SvgIcon';
import defaultTheme from '../../../Common/theming';

import { IntentType } from '../../../Common/theming/types';
import { getStyles } from './styles';
import withTheme, {
  WithThemeProps
} from '../../../Common/theming/withTheme';
import UpBox from '../../Containers/Box';

export type NotificationDisplayMode = 'inline' | 'modal' | 'text';

// Exports
export interface CommonProps {
  intent?: IntentType;
  dismissable?: boolean;
  title?: string;
  displayMode?: NotificationDisplayMode;
  children?: any;
}

export interface UpNotificationProps extends CommonProps {
  message?: JSX.Element | string;
  className?: string;
  iconSize?: string;
  durationBeforeClosing?: number;
  durationOfAnimation?: number;
  onCloseClick?: ()=> void;
}

const UpNotification = (
  props: UpNotificationProps & WithThemeProps
) => {
  const {
    children,
    message,
    intent,
    theme,
    title,
    className,
    durationBeforeClosing,
    onCloseClick
  } = props;
 
  
  let icon = null;
  let cancelIcon = null;
  const iconSize =
    props.iconSize ||
    (theme && theme.notificationIconSize != null
      ? theme.notificationIconSize
      : 60);

  if (intent && iconMap[intent]) {
    icon = (
      <SvgIcon
        iconName={iconMap[intent]}
        width={iconSize}
        height={iconSize}
      />
    );
  }
  if (onCloseClick) {
    cancelIcon = (
      <SvgIcon
        iconName={iconMap['error']}
        width={'10px'}
        height={'10px'}
      />
    );
  }

  const handleIconClick = () => {
    if(onCloseClick) onCloseClick()
  }

  const NotificationRender = () => (
    <div className={'up-notification'} style={{overflow: 'hidden'}}>
      <div
        className={classnames(
          getStyles(props),
          className,
          'up-notification-container'
        )}>
        <UpGrid className={'up-notification'}>
          {props.displayMode !== 'modal' && title && (
            <UpRow>
              <UpCol span={24}>
                <UpHeading tag={'h2'} textAlign={'left'}>
                  {title}
                </UpHeading>
              </UpCol>
            </UpRow>
          )}
          <UpRow>
            <UpBox
              flexDirection={'row'}
              alignContent={'flex-start'}
              justifyContent={'center'}
              alignItems={'center'}>
              <div className="up-notification-icon-container">
                {icon}
              </div>
              {(message || children) && (
                <div className="up-notification-message">
                  {message || children}
                </div>
              )}
            </UpBox>
          </UpRow>
          <div
            className="cancel-icon"
            onClick={handleIconClick}>
            {cancelIcon}
          </div>
        </UpGrid>
        {durationBeforeClosing && (
          <div className="up-notification-progress-bar-container">
            <div className="up-notification-progress-bar" />
          </div>
        )}
      </div>
    </div>
  );

  if (props.displayMode == 'modal') {
    return (
      <UpModal header={title} showModal={true}>
        <NotificationRender />
      </UpModal>
    );
  }

  return <NotificationRender />;
};
UpNotification.defaultProps = {
  message: '',
  theme: defaultTheme,
  displayMode: 'inline',
  intent: 'info',
  iconSize: '15px'
} as UpNotificationProps & WithThemeProps;
export default withTheme<UpNotificationProps>(UpNotification);
