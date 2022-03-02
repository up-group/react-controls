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
}

export interface UpInformationProps {
  /** To specify icon name*/
  iconName?: IconName | MentorName;
  /** To change size icon*/
  iconSize?: number;
  /** To change icon color*/
  iconColor?: string;
  /** UpInformation title*/
  title?: string;
  /** UpInformation content*/
  content?: string;
  /** To customize button. 
        The props that can be passed to the button are tooltip, iconName, intent, actionType, onClick
    */
  action?: Action;
  /** To customize style UpInformation Blocks. 
        The UpInformation style Blocks that can be modified are title, informationWrapper, contentWrapper, content, button 
    */
  customStyles?: UpInformationCustomStyles;
}
