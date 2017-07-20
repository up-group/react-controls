import * as React from 'react';
import {style} from 'typestyle';

const BadgeStyle = style({
  borderRadius:'4px',
  padding:'6px;',
  color: 'white',
  fontWeight : 700
}) ;

export type WidthSize = 'auto' | 'small' | 'medium' | 'large' | 'xlarge' ;
export type Align = 'left' | 'right'  ;

export interface UpBadgeProps {
  text:string;
  color:string;
};

export default class UpBadge extends React.Component<UpBadgeProps, {}> {
  
  public static defaultProps: UpBadgeProps = {
    text:'',
    color:'#FFF'
  }

  constructor(props) {
    super(props) ;
  }
  
  componentWillUnmount() {
  }

  componentDidMount() {
  }

  render() {
      const {children, text, color, ...others} = this.props ; 
      return (
        <span className={BadgeStyle} style={{background:color}}>
          {text}
          {children}
        </span>
      ) ;
  }
}