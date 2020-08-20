import { IntentType } from '../../../Common/theming/types';
import { IconName } from '../../../Common/theming/icons';

export interface UpPanelProps {
    title?: string | JSX.Element;
    footer?: string | JSX.Element;
    /** possible case : primary | secondary | danger | warning | success | info | default | error | light */
    type?: IntentType;
    message?: string;
    iconName?: IconName | null;
    iconSize?: number;
};