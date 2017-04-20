import * as React from 'react';
import { BaseButton} from './styles';
import { UpButtonProps } from './';
import  UpTooltip, {Tooltip} from '../../Display/Tooltip' ;

export default class UpButton extends React.Component<UpButtonProps, undefined> {
  public static defaultProps: UpButtonProps = {
    color: '',
    backgroundColor: '',
    borderColor: '',
    fontSize: 'large',
    disabled:false,
    shadow:false,
    iconName:false,
    iconSize:12,
    type:'default',
    width: 'normal',
    height: 'normal',
    tooltip:null,
    onClick:(e:React.MouseEvent<HTMLButtonElement>) => {}
  };
  public render() {
    const {children, tooltip, ...rest} = this.props ;
    if(tooltip) {
      var _tooltip:Tooltip ;
      if(typeof tooltip === 'string' ||  tooltip instanceof String) {
        _tooltip = {
          content : tooltip as string
        }
      } else {
        _tooltip = tooltip as Tooltip ;
      }
      return (
        <UpTooltip {..._tooltip}>
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
