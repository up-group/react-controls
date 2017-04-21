import * as React from 'react'
import { UpButtonGroupProps } from './'
import  UpTooltip, {Tooltip} from '../../Display/Tooltip'
import { ButtonGroupStyled } from './styles'

export default class UpButtonGroup extends React.Component<UpButtonGroupProps, undefined> {

  constructor(props) {
    super(props) ;
  }

  public static defaultProps: UpButtonGroupProps = {
    gutter:10,
    align:'h'
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