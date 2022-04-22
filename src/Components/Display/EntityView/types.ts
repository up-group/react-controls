import { WithThemeProps } from '../../../Common/theming';
import { IllustrationName } from '../../../Common/theming/illustrations';

export interface UpEntityViewProps extends WithThemeProps {
  /** To add title*/
  title: string;
  /** TO add illustration icon */
  icon?: IllustrationName;
  /** UpEntityViews Informations */
  informations: { key: string; value: string }[];
}

export interface UpEntityViewState {}
