import * as React from 'react';
import { BaseButton} from './styles';
import { UpButtonProps } from './';
import  UpTooltip, {Tooltip} from '../../Display/Tooltip' ;

export default class UpButton extends React.Component<UpButtonProps, undefined> {

  constructor(props) {
    super(props) ;
    this.handleClick = this.handleClick.bind(this) ;
  }

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

  private handleClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
    this.props.onClick(e) ;
  }

  public render() {
    const {children, tooltip, onClick, ...rest} = this.props ;
    
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
          <BaseButton onClick={this.handleClick} {...rest}>
            <span>{children}</span>
          </BaseButton>
        </UpTooltip>
      );
    } else {
      return (
        <BaseButton onClick={this.handleClick} {...rest}>
          <span>{children}</span>
        </BaseButton>
      );
    }
  }
}