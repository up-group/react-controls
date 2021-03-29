import { IntentType } from '../../../Common/theming/types';

export type Placement = 'top' | 'right' | 'bottom' | 'left';

export type Effect = 'float' | 'solid';

export interface Tooltip {
    /** Tooltip content */
    content: JSX.Element | string;
    /** To specify Tooltip placement */
    place?: Placement;
    /** To specify Tooltip appearance */
    type?: IntentType;
    /** To specify behaviour of tooltip */
    effect?: Effect;
    /** To Display Tooltip text on multiple lines, support \<br>, \<br /> */
    multiline?: boolean;
    /** To allow HTML in the tooltip */
    html?: boolean;
    /** Tooltip Title */
    title?: JSX.Element | string;
    /** Delay hiding the tooltip */
    delayHide?: number;
    /** Delay showing the tooltip */
    delayShow?: number;
    /** To remove the ability for an element’s tooltip to be shown */
    disable?: boolean;
};

export interface UpTooltipProps extends Tooltip {
    /** To give a unique identifier, otherwise it will be generated automatically */
    id?: string;
};