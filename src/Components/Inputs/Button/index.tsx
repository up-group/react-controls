// Imports
import UpButton from './UpButton'
import { ThemedProps, IntentType } from '../../../Common/theming/types'
import { Tooltip } from '../../Display/Tooltip'

export const fontSizeMap = {
    xsmall: 10,
    small: 12,
    medium: 16,
    large: 20,
    xlarge: 24
};

export const buttonSizeMap = {
    normal: '150px',
    icon: '32px',
    auto: 'auto'
};

export type FontSize = 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge';
export type ButtonWidth = 'normal' | 'icon' | 'auto';
export type ButtonHeight = 'xsmall' | 'small' | 'normal' | 'large';
export type ActionType = 'add' | 'asterisk' | 'calendar' | 'caret-down' | 'caret-right' | 'caret-up' | 'close' | 'comment' | 'confirm' | 'cross' | 'delete' | 'download' | 'edit' | 'email' | 'error-sign' | 'export' | 'filter' | 'filter-list' | 'help' | 'import' | 'info-sign' | 'link' | 'minus' | 'mobile-phone' | 'none' | 'ok-sign' | 'phone' | 'plus' | 'refresh' | 'save' | 'search' | 'sort-asc' | 'sort-desc' | 'stop' | 'tick' | 'unlock' | 'upload' | 'user' | 'warning-sign' | 'zoom-in' | 'zoom-out';



export interface CommonProps extends ThemedProps {
    color?: string; // Ovverride the defaut intent styling
    backgroundColor?: string; // Ovverride the defaut intent styling
    borderColor?: string; // Ovverride the defaut intent styling
    fontSize?: FontSize;
    disabled?: boolean;
    shadow?: boolean;
    rounded?: boolean;
    rotate?: boolean;
    actionType?: ActionType;
    iconName?: any;
    iconSize?: number;
    intent?: IntentType;
    width?: ButtonWidth;
    height?: ButtonHeight;
    tooltip?: string | Tooltip;
}

// This is so that the onClick handler is accepted without type interferance
export interface UpButtonProps extends CommonProps {
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export interface UpButtonStyledProps extends UpButtonProps {
    className?: string; // Needed by styled components to set the created className to a complex element
    dataFor?: string; // Use for tooltip
}

export default UpButton 
