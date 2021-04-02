import { IntentType } from '../../../Common/theming/types';

export type WidthSize = 'auto' | 'small' | 'medium' | 'large' | 'xlarge';

export type Align = 'left' | 'right';

export interface UpBadgeProps {
    /** Text content*/
    text: string;
    /** To set color*/
    color?: string;
    /** To set background*/
    background?: string;
    /** If provided, the badge takes the shape of a circle*/
    rounded?: boolean;
    /** To apply color and background according to intent (without providing background and color properties) */
    intent?: IntentType;
    /** To pass customized class*/
    className?: string;
    /** OnClick callback*/
    onClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
    /** onMouseLeave callback*/
    onMouseLeave?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
    /** onMouseEnter callback*/
    onMouseEnter?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
};