import { IllustrationName } from '../../../Common/theming/illustrations';

export interface UpEntityViewProps {
    title: string;
    icon?: IllustrationName;
    informations: { key: string; value: string; }[];
};

export interface UpEntityViewState { };