// Imports
import * as React from 'react'
import * as classnames from 'classnames'
import { BaseButton} from './styles'
import { UpButtonProps, DropDownType, Action, Separator, IconPosition } from './'
import  UpTooltip, {Tooltip} from '../../Display/Tooltip'
import defaultTheme from '../../../Common/theming'
import {isString} from '../../../Common/utils'
import { IconName } from "../../Display/SvgIcon/icons";

import { style } from "typestyle"

export interface UpButtonState {
  isToggled?: boolean;
}

// Exports
export default class UpButton extends React.Component<UpButtonProps, UpButtonState> {

  constructor(props) {
    super(props) ;
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      isToggled : false
    } ;
  }

  public static defaultProps: UpButtonProps = {
    backgroundColor: '',
    borderColor: '',
    fontSize: 'large',
    disabled:false,
    shadow:false,
    iconName:false,
    iconPosition:'none',
    iconSize:20,
    intent:'default',
    width: 'normal',
    height: 'normal',
    tooltip:null,
    dropDown: 'none',
    onClick:(e:React.MouseEvent<HTMLButtonElement>) => {},
    theme:defaultTheme
  };

  private handleClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
      this.props.onClick(e);
      if(this.props.dropDown != 'none') {
        this.setState({isToggled : !this.state.isToggled}) ;
      }
      e.preventDefault();
      e.stopPropagation();
  }

  private collapse = (): void => {
    if(this.props.dropDown != 'none') {
      this.setState({isToggled : false}) ;
    }
  }

  private handleActionClick = (action: Action): void => {
    action.onClick(null);
    this.collapse() ;
  }

  isSeparator(element: Action | Separator): boolean {
      return (element as Separator).size !== undefined ;
  }
  
  public render() {
    const {children, tooltip, onClick, iconName, iconPosition, ...others} = this.props ;
    
          const BtnList = style({
            display: this.state.isToggled ? "block" : "none",
            position: "absolute",
            top:"35px",
            zIndex: 1000,
            listStyle: "none",
            backgroundColor: "#ffffff",
            minWidth: 160,
            margin: 0,
            paddingTop: 10,
            paddingBottom: 10,
            paddingLeft: 0,
            borderRadius: 4,
            boxShadow: "0 6px 12px rgba(0, 0, 0, .175)",
            height: this.state.isToggled ?'auto':'0px',
            transition: this.state.isToggled ? "height 2s ease-in":"height 2s ease-out",
            transform: this.state.isToggled ? "scaleY(1)" : "scaleY(0)",    
            transformOrigin: "top"
          });
    
          const buttonElement = style({
              cursor: "pointer",
              padding: "8px",
              $nest: {
                  '&:hover': { backgroundColor: "#f5f5f5" },
              }
          });
    
          const separatorElement = style({
              height: "1px",
              margin: "9px 0",
              overflow: "hidden",
              backgroundColor: '#e5e5e5'
          });
    
          const buttonWrapper = style({
            display: "inline-block",
            position: "relative"
          });
    
          var icon : boolean | IconName = iconName ;
          if(icon === false && this.props.dropDown != 'none') {
            if(this.props.dropDown == 'up') {
              icon = 'caret-up' ;
            } else if(this.props.dropDown == 'down') {
              icon = 'caret-down' ;
            }
          }
    
          var position : IconPosition = iconPosition ;
          if(position === 'none' && this.props.dropDown != 'none') {
            position = 'right' ;
          } else if(position === 'none' && icon === false) {
            position = 'left' ;
          }
          var _tooltip:Tooltip = null ;
          if(tooltip) {
            if(isString(tooltip)) {
              _tooltip = {
                content : tooltip as string
              }
            } else {
              _tooltip = tooltip as Tooltip ;
            }
          }
    
          return (
            <div className={classnames('up-btn-wrapper', buttonWrapper)}>
              <UpTooltip {..._tooltip}>
                <BaseButton iconName={icon} iconPosition={position} onClick={this.handleClick} isToggled={this.state.isToggled} {...others}>
                  {children != null &&
                    <span>{children}</span>
                  }
                </BaseButton>
              </UpTooltip>
              {this.props.dropDown != 'none' && this.state.isToggled && 
              <ul tabIndex={0} className={BtnList}>
                {
                    this.props.extraActions.map((v, i) => {
                        const isSeparator = this.isSeparator(v) ;
                        if(!isSeparator) {
                          return <li tabIndex={i+1} key={i} className={buttonElement}
                              onMouseDown={this.handleActionClick.bind(this, v)}
                          >{(v as Action).libelle}</li>
                        } else {
                          return <li tabIndex={i+1} role={"separator"} key={i} className={separatorElement}></li>
                        }
                    })
                }
                </ul>
              }
            </div>) ;
  }
}