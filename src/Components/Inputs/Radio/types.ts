import { IconName } from '../../../Common/theming/icons';
import { ReactNode } from 'react';
import { BaseControlProps } from '../_Common/BaseControl/BaseControl';
import { IntentType } from '../../../Common/theming/types';

export type Position = 'left' | 'right';
export type AlignMode = 'horizontal' | 'vertical';
export type DisplayMode = 'normal' | 'button' | 'large';

export interface IOption {
  value: any;
  text?: string | { [key: string]: any };
  iconName?: IconName;
  name?: string;
  checked?: boolean;
  intent?: IntentType;
  toggledElement?: Array<ReactNode> | ReactNode;
  readonly?: boolean;
  additionalData?: { [key: string]: any };
}

export interface UpRadioStyledProps extends IOption {
  className?: string;
  gutter?: number;
  tabIndex?: number;
  onChange?: (e: any) => void;
}

export interface UpRadioState {
  options?: Array<IOption>;
  value?: any;
}

export interface UpRadioProps extends BaseControlProps<any> {
  options: Array<IOption>;
  position?: Position;
  name: string;
  value?: any;
  alignMode?: AlignMode;
  displayMode?: DisplayMode;
  gutter?: number;
  onChange?: (arg: any, event: any, error?: string) => void;
  flexWrap?: boolean;
  additionalData?: { [key: string]: any };
  nbItemsPerRow?: number;
}

export type RadioGroupProps = {
  className?: string;
  gutter?: number;
  flexWrap?: boolean;
  readonly?: boolean;
  nbItemsPerRow?: number;
};
