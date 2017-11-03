import * as React from 'react'
import defaultTheme from '../../../Common/theming'
import  UpTooltip, {Tooltip} from '../../Display/Tooltip'
import { ButtonGroupStyled } from './styles'
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

export default class UpButtonGroup extends React.Component<UpButtonGroupProps, undefined> {

  constructor(props) {
    super(props) ;
  }

  public static defaultProps: UpButtonGroupProps = {
    gutter:10,
    align:'h',
    theme:defaultTheme
  };

  public render() {
    const {children, ...others} = this.props ;
    return (
        <ButtonGroupStyled {...others}>
            {children}
        </ButtonGroupStyled>
    ) ;
  }
}