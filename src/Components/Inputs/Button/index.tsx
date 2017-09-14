// Imports
import UpButton from './UpButton'
import { ThemedProps, IntentType } from '../../../Common/theming/types'
import { Tooltip } from '../../Display/Tooltip'
import { IconName } from '../../../Components/Display/SvgIcon/icons'

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
export type ActionType = IconName;
export type IconPosition = 'none' | 'left' | 'right' ;
export type DropDownType = 'none' | 'up' | 'down' | 'element' ;

export interface Action {
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
    iconName?: any;
    tooltip?: string | Tooltip;
    libelle:string;
}

export interface Separator {
    size?:number;
}

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
    iconPosition?: IconPosition;
    intent?: IntentType;
    width?: ButtonWidth;
    height?: ButtonHeight;
    tooltip?: string | Tooltip;
    extraActions?:Array<Action | Separator>;
    dropDown?: DropDownType;
    isProcessing?:boolean;
}

// This is so that the onClick handler is accepted without type interferance
export interface UpButtonProps extends CommonProps {
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export interface UpButtonStyledProps extends UpButtonProps {
    className?: string; // Needed by styled components to set the created className to a complex element
    dataFor?: string; // Use for tooltip
    isToggled?:boolean;
}

export default UpButton 
