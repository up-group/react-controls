import { IconName } from '../../../Common/theming/icons';

export interface UpBulleProps {
    /** To set Background effects for UpBulle */
    backgroundImage: string;
    /** To provide content */
    message: string;
    /** To add illustration icon */
    icon: IconName;
    /** To add illustration number */
    value: number;
    /** To add className for customization style*/
    className?: string;
};