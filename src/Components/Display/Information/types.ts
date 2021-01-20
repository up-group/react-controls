import { IconName } from '../../../Common/theming/icons';
import { MentorName } from '../../../Common/theming/mentors';
import { Action } from '../../Inputs/Button/types';
import { NestedCSSProperties } from 'typestyle/lib/types';

export type GetterStyle = (props: UpInformationProps) => NestedCSSProperties;

export interface UpInformationCustomStyles {
    informationWrapper?: GetterStyle;
    title?: GetterStyle;
    contentWrapper?: GetterStyle;
    content?: GetterStyle;
    button?: GetterStyle;
};

export interface UpInformationProps {
    iconName?: IconName | MentorName;
    iconSize?: number;
    iconColor?: string;
    title?: string;
    content?: string;
    action?: Action;
    customStyles?: UpInformationCustomStyles
};