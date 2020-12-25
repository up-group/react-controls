import { IntentType } from '../../../Common/theming/types';

export type Placement = 'top' | 'right' | 'bottom' | 'left';

export type Effect = 'float' | 'solid';

export interface Tooltip {
    content: JSX.Element | string;
    place?: Placement;
    type?: IntentType;
    effect?: Effect;
    multiline?: boolean;
    html?: boolean;
    title?: JSX.Element | string;
    delayHide?: number;
    delayShow?: number;
    disable?: boolean;
};

export interface UpTooltipProps extends Tooltip {
    id?: string;
};