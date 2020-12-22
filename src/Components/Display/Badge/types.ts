import { IntentType } from '../../../Common/theming/types';

export type WidthSize = 'auto' | 'small' | 'medium' | 'large' | 'xlarge';

export type Align = 'left' | 'right';

export interface UpBadgeProps {
    text: string;
    color?: string;
    background?: string;
    rounded?: boolean;
    intent?: IntentType;
    className?: string;
    onClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
    onMouseLeave?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
    onMouseEnter?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
};