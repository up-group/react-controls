// Imports
import UpButton from './UpButton'
import { IntentType } from '../../../Common/theming/types'
import { Tooltip } from '../../Display/Tooltip'
import { IconName } from '../../../Common/theming/icons';
import { WithThemeProps } from '../../../Common/theming/withTheme';

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

export interface CommonProps extends WithThemeProps {
    /** Surcharge la couleur définit par le type d'intent */
    color?: string;
    /** Surcharge la couleur du fond définit par le type d'intent */
    backgroundColor?: string; 
    /** Surcharge la couleur du bord définit par le type d'intent */
    borderColor?: string;
    /** Définit la taille de la police */
    fontSize?: FontSize;
    /** Etat de désactivation du bouton */
    disabled?: boolean;
    /** Afficher une ombre */
    shadow?: boolean;
    /** Afficher en arrondi */
    rounded?: boolean;
    /** Activer la rotation de l'icône */
    rotate?: boolean;
    /** Définir le type de l'action */
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