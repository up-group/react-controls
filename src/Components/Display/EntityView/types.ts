import { IllustrationName } from '../../../Common/theming/illustrations';

export interface UpEntityViewProps {
    /** To add title*/
    title: string;
    /** TO add illustration icon */
    icon?: IllustrationName;
    /** UpEntityViews Informations */
    informations: { key: string; value: string; }[];
};

export interface UpEntityViewState { };