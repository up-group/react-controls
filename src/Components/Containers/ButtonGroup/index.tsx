import UpButtonGroup from './UpButtonGroup'

import {ThemedProps, IntentType} from '../../../Common/theming/types' 

export type Alignement = 'h' | 'v'
export type AddOnMode = 'none' | 'left' | 'right'

export interface UpButtonGroupProps extends ThemedProps {
  gutter?:number;
  align?:Alignement;
  isAddOn?:AddOnMode;
}
export interface UpButtonGroupStyledProps extends UpButtonGroupProps {
};

export default UpButtonGroup