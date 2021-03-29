import { IconName } from '../../../Common/theming/icons';

export interface UpBulleProps {
    /** To set Background Bulle*/
    backgroundImage: string;
    /** Message content*/
    message: string;
    /** To add illustration icon*/
    icon: IconName;
    /** To add illustration number*/
    value: number;
    /** To add customized className*/
    className?: string;
};