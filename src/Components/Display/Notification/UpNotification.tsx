import * as React from 'react';
import classnames from 'classnames';
import { UpGrid, UpRow, UpCol } from '../../Containers/Grid';
import UpModal from '../../Containers/Modal/UpModal';
import UpHeading from '../../Display/Heading';
import iconMap from '../../../Common/theming/iconMap';
import SvgIcon from '../SvgIcon';
import defaultTheme from '../../../Common/theming';
import { getStyles } from './styles';
import withTheme, { WithThemeProps } from '../../../Common/theming/withTheme';
import UpBox from '../../Containers/Box';
import { UpNotificationProps } from './types';
import { setTimeOutWithPause } from '../../../Common/utils/helpers';
import { style } from 'typestyle';
import { toRem } from '../../../Common/theming/utils';

const UpNotification = (props: UpNotificationProps & WithThemeProps) => {
  const { children, message, intent, theme, title, className, durationBeforeClosing, dismissable, onCloseClick } =
    props;

  let icon = null;
  let cancelIcon = null;
  let autoClosingTimeout;
  const iconSize = props.iconSize || (theme && theme.notificationIconSize != null ? theme.notificationIconSize : 60);

  const [isVisible, setIsVisible] = React.useState(true);

  React.useEffect(() => {
    if (durationBeforeClosing && dismissable) {
      autoClosingTimeout = new setTimeOutWithPause(() => {
        setIsVisible(false);
      }, durationBeforeClosing * 1000);
    }
    return () => {
      autoClosingTimeout && autoClosingTimeout.clearTimeout();
    };
  }, [durationBeforeClosing, dismissable]);

  if (intent && iconMap[intent]) {
    icon = <SvgIcon iconName={iconMap[intent]} width={iconSize} height={iconSize} />;
  }

  if (onCloseClick || dismissable) {
    cancelIcon = <SvgIcon iconName={iconMap['error']} width={'10px'} height={'10px'} />;
  }

  const handleIconClick = () => {
    setIsVisible(false);
    if (onCloseClick) onCloseClick();
  };

  const NotificationRender = () => (
    <div className={'up-notification'} style={{ overflow: 'hidden' }}>
      <div className={classnames(getStyles(props), className, 'up-notification-container')}>
        <UpGrid className={'up-notification'}>
          {props.displayMode !== 'modal' && title && (
            <UpRow>
              <UpCol span={24}>
                <UpHeading
                  tag={'h2'}
                  textAlign={'left'}
                  className={style({
                    marginLeft: toRem(25),
                  })}
                >
                  {title}
                </UpHeading>
              </UpCol>
            </UpRow>
          )}
          <UpRow>
            <UpBox flexDirection={'row'} alignContent={'flex-start'} justifyContent={'center'} alignItems={'center'}>
              <div className="up-notification-icon-container">{icon}</div>
              {(message || children) && <div className="up-notification-message">{message || children}</div>}
            </UpBox>
          </UpRow>
          <div className="cancel-icon" onClick={handleIconClick}>
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

  if (!isVisible) {
    return null;
  }

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
  iconSize: '15px',
} as UpNotificationProps & WithThemeProps;

export { UpNotification };
export default withTheme<UpNotificationProps>(UpNotification);
