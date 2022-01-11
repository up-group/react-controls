import { WithThemeProps } from '../../../Common/theming/withTheme';

export interface UpFormGroupProps extends WithThemeProps {
  /** To provide title */
  title: string;
  /** To add seperator to the title */
  withTitleSeparator?: boolean;
}
