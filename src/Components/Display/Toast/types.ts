import { IntentType } from 'theming/types';

export interface UpToastProps {
    message?: JSX.Element | string;
    children?: JSX.Element;
    onClose?: () => void;
    intent?: IntentType;
    autoDismissable?: boolean;
    duration?: number;
    title?: JSX.Element | string;
};

export interface UpToastState {
    isVisible: boolean;
    isUnmounting: boolean;
};