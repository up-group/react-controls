import * as React from 'react'
//import  UpTooltip, {Tooltip} from '../../Display/Tooltip'
//import { ButtonGroupStyled } from './styles'

export type Alignement = 'h' | 'v'
export type AddOnMode = 'none' | 'left' | 'right'

export interface UpButtonGroupProps  {
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
  };

  public render() {
    const {children, ...others} = this.props ;
    return (
        <div {...others}>
            {children}
        </div>
    ) ;
  }
}