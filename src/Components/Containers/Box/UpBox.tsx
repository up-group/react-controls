// Import React
import * as React from 'react'
// Import the types defintion
import {BoxSize, BoxSizeObject, Size, SizeObject, Full} from './types'
// Import the type style
import {style} from 'typestyle'
// Import classnames 
import * as cn from 'classnames' ;

export interface UpBoxProps {
    alignItems?: 'flex-start' | 'center' | 'flex-end' | 'baseline' | 'stretch';
    flexDirection?: 'row' | 'column';
    justifyContent?: 'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around';
    flexWrap?: boolean;
    reverse?: boolean;
    boxSize?: BoxSize | BoxSizeObject;
    pad?: Size | SizeObject;
    children?: any;
    margin?: Size | SizeObject;
    color?: string;
    backgroundColor?: string;
    backgroundImage?: string;
    full?: Full;
    selectable?: boolean;
    style?: {};
    className?: string;
  };
  
import {
    calculateFlexWrap,
    calculateFullStyle,
    sizeToString,
    boxSizeToStyle,
  } from './styleUtils';
  
  const FullSize = style({
    flexGrow:1,
    flexShrink:0,
    flexBasis:"100%",
    width:"100%"
  });

  export default class UpBox extends React.Component<UpBoxProps> {
      
    getBoxStyles = () => {

        var BoxStyles = style({
            display: 'flex',
            backgroundColor: this.props.backgroundColor || 'transparent',
            color: this.props.color || 'black',
            justifyContent: this.props.justifyContent || 'flex-start',
            alignItems: this.props.alignItems || 'flex-start',
            padding: sizeToString(this.props.pad),
            margin: sizeToString(this.props.margin),
            cursor: this.props.selectable ? 'pointer' : 'inherit'
        });

        return BoxStyles ;
    }

    getSize = () => {

        var Sizes = style({
            flexShrink:1,
            flexDirection: this.props.flexDirection || 'column',
            flexWrap: calculateFlexWrap(this.props.flexWrap, this.props.reverse),
            width: boxSizeToStyle(this.props.boxSize).width,
            height: boxSizeToStyle(this.props.boxSize).height,
            flexBasis: "auto",
            minHeight: calculateFullStyle(this.props.full, 'vh'),
            minWidth: calculateFullStyle(this.props.full, 'vw')
        });

        return (this.props.full) ? FullSize : Sizes ;
    }

    render() {
        var {children, style, ...others} = this.props ;
        
        return (
            <div style={style || ""} className={cn(this.getBoxStyles(), this.getSize())}>
              {children || null}
            </div>
          );
    }
}