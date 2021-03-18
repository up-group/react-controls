import { WithThemeProps } from '../../../Common/theming/withTheme';

export interface UpFormGroupProps extends WithThemeProps {
    /** To add title */
    title: string;
    /** To add a seperator to the title*/
    withTitleSeparator?: boolean;
};