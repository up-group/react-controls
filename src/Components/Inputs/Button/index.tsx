// Imports
import UpButton from './UpButton'
import { IntentType } from '../../../Common/theming/types'
import { Tooltip } from '../../Display/Tooltip'
import { IconName } from '../../../Common/theming/icons';
import { WithThemeProps } from '../../../Common/theming/withTheme';

export const fontSizeMap = {
    xsmall: 10,
    small: 12,
    medium: 14,
    large: 20,
    xlarge: 24
};

export const buttonSizeMap = {
    normal: '150px',
    icon: '32px',
    auto: 'auto',
    full: '100%',
};

export type FontSize = 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge';
export type ButtonWidth = 'normal' | 'icon' | 'auto' | 'full';
export type ButtonHeight = 'xsmall' | 'small' | 'normal' | 'large';
export type ActionType = IconName;
export type IconPosition = 'none' | 'left' | 'right' ;
export type DropDownType = 'none' | 'up' | 'down' | 'element' ;

export interface Action {
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
    iconName?: any;
    tooltip?: string | Tooltip;
    libelle:string;
    actionType?: ActionType;
    intent?: IntentType;
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
    /** Définir le nom de l'icône à associer au bouton */
    iconName?: IconName;
    /** Définit la taille de l'icône  */
    iconSize?: number;
    /** Définir la position de l'icône */
    iconPosition?: IconPosition;
    /** Définir l'intention du bouton */
    intent?: IntentType;
    width?: ButtonWidth;
    height?: ButtonHeight;
    /** Définir une aide associée au bouton */
    tooltip?: string | Tooltip;
    /** Définir des actions supplémentaires au bouton */
    extraActions?:Array<Action | Separator>;
    /** Définir le type de bouton  */
    dropDown?: DropDownType;
    /** Définir si l'action associée est en cours d'exécution */
    isProcessing?:boolean;
    /** Définir si le bouton est par défaut 'toggled' */
    isToggled?: boolean;
    /** Tye type of the button  */
    type?: 'button' | 'submit' | 'reset';
}
// This is so that the onClick handler is accepted without type interferance
export interface UpButtonProps extends CommonProps {
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void | Promise<any>;
}
export interface UpButtonStyledProps extends UpButtonProps {
    className?: string; // Needed by styled components to set the created className to a complex element
    dataFor?: string; // Use for tooltip
    isToggled?:boolean;
    isProcessing?:boolean;
}

export default UpButton 