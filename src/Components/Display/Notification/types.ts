import { IntentType } from '../../../Common/theming/types';

export type NotificationDisplayMode = 'inline' | 'modal' | 'text';

export interface CommonProps {
    /** To customize UpNotification appearance */
    intent?: IntentType;
    /** If provided, UpNotification can be hidden or closed */
    dismissable?: boolean;
    /** UpNotification title */
    title?: string;
    /** To choose the way to display UpNotification, eg : in modal, with transparent background ... */
    displayMode?: NotificationDisplayMode;
    /** UpNotification content, e.g : message ... */
    children?: any;
};

export interface UpNotificationProps extends CommonProps {
    /** UpNotification message */
    message?: JSX.Element | string;
    /** To apply customized style, e.g : changing title color */
    className?: string;
    /** To change icon size */
    iconSize?: string | number;
    /** To hide up Notification after a certain time(in seconds). 
        Important : It is necessary to pass turthy dismissable property to work
    */
    durationBeforeClosing?: number;
    /** ??? */
    durationOfAnimation?: number;
    /** CallBack to call when UpNotification is closing */
    onCloseClick?: () => void;
};