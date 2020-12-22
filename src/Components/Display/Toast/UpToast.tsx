import * as React from 'react';
import { style } from 'typestyle';
import * as classnames from 'classnames';
import UpHeading from '../Heading';
import { WithThemeProps } from '../../../Common/theming/types';
import { setTimeOutWithPause } from '../../../Common/utils/helpers';
import defaultTheme, { withTheme } from '../../../Common/theming';
import UpNotification from '../Notification';
import UpSvgIcon from '../SvgIcon';
import { setTimeout, clearTimeout } from 'timers';
import { UpToastProps } from './types';
import { convertDurationFromMsToSecond, getIntentStyle, buttonStyle, toastTitleStyle, wrapperToastStyle } from './styles';

const UpToast = (props: UpToastProps & WithThemeProps) => {

    let manualClosingTimeout;
    let autoClosingTimeout;
    const { message, children, intent, title, duration, theme, autoDismissable } = props;

    const [isVisible, setIsVisible] = React.useState(true);
    const [isUnmounting, setIsUnmounting] = React.useState(false);

    React.useEffect(() => {
        if (duration && autoDismissable) {
            setIsUnmounting(false);
            setIsVisible(true)
            //start the timer
            autoClosingTimeout = new setTimeOutWithPause(() => {
                handleClose();
            }, duration);
        }
        return () => {
            autoClosingTimeout && autoClosingTimeout.clearTimeout();
            manualClosingTimeout && clearTimeout(manualClosingTimeout);
        };
    }, [duration, autoDismissable]);

    const handleClose = () => {
        setIsUnmounting(true);
        manualClosingTimeout = setTimeout(() => {
            if (props.onClose) {
                props.onClose();
            }
            setIsUnmounting(false);
            setIsVisible(false);
        }, 1000);
    }

    const onMouseOver = () => {
        if (autoClosingTimeout) autoClosingTimeout.pause()
    };

    const onMouseLeave = () => {
        if (autoClosingTimeout) autoClosingTimeout.resume();
    };

    if (!isVisible) {
        return null;
    }

    return (
        <div
            className={classnames(wrapperToastStyle(isUnmounting), getIntentStyle(intent, theme))}
            onMouseEnter={onMouseOver}
            onMouseLeave={onMouseLeave}>
            {title &&
                <>
                    <UpHeading
                        tag={'h4'}
                        margin={'none'}
                        className={classnames(toastTitleStyle, 'up-toast-title')}>
                        {title}
                    </UpHeading>
                    <div
                        className={classnames(buttonStyle, 'up-toast-close')}
                        onClick={handleClose}>
                        <UpSvgIcon
                            width={'15px'}
                            height={'15px'}
                            iconName={'close'}
                        />
                    </div>
                </>
            }
            <div className={'up-toast-body'}>
                {(message != null || children != null) && (
                    <UpNotification
                        iconSize={'32px'}
                        className={'up-toast-message'}
                        message={message}
                        intent={intent}
                        onCloseClick={!title && handleClose}
                        durationBeforeClosing={props.autoDismissable && convertDurationFromMsToSecond(duration)}
                    >
                        {children}
                    </UpNotification>
                )}
            </div>
        </div>
    );
};

UpToast.defaultProps = {
    intent: 'default',
    duration: 3000,
    autoDismissable: true,
    theme: defaultTheme
};

export { UpToast };
export default withTheme<UpToastProps>(UpToast);
