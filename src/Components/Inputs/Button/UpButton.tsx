import * as React from 'react';
import { BaseButton} from './styles';
import { UpButtonProps } from './';
import  UpTooltip from '../../Display/Tooltip' ;

export default class UpButton extends React.Component<UpButtonProps, undefined> {
  public static defaultProps: UpButtonProps = {
    color: '',
    backgroundColor: '',
    borderColor: '',
    fontSize: 'large',
    disabled:false,
    shadow:true,
    iconName:false,
    iconSize:12,
    type:'default',
    size: 'normal',
    tooltip:null,
    onClick:(e:React.MouseEvent<HTMLButtonElement>) => {}
  };
  public render() {
    const {children, tooltip, ...rest} = this.props ;
    if(tooltip) {
      return (
        <UpTooltip {...tooltip}>
          <BaseButton {...rest}>
            <span>{children}</span>
          </BaseButton>
        </UpTooltip>
      );
    } else {
      return (
        <BaseButton {...rest}>
          <span>{children}</span>
        </BaseButton>
      );
    }
  }
}
