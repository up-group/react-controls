import { IntentType } from '../../../Common/theming/types';

export type NotificationDisplayMode = 'inline' | 'modal' | 'text';

// Exports
export interface CommonProps {
    intent?: IntentType;
    dismissable?: boolean;
    title?: string;
    displayMode?: NotificationDisplayMode;
    children?: any;
};

export interface UpNotificationProps extends CommonProps {
    message?: JSX.Element | string;
    className?: string;
    iconSize?: string;
    durationBeforeClosing?: number;
    durationOfAnimation?: number;
    onCloseClick?: () => void;
};