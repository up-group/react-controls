// Import React
import * as React from 'react'
// Import the types defintion
import {BoxSize, BoxSizeObject, Size, SizeObject, Full} from './types'
// Import the type style
import {style} from 'typestyle'
// Import classnames
import classnames from 'classnames' ;

import {
    calculateFlexWrap,
    calculateFullStyle,
    sizeToString,
    boxSizeToStyle,
  } from './styleUtils';

import withTheme, { WithThemeProps } from '../../../Common/theming/withTheme';
import defaultTheme from '../../../Common/theming';

export interface UpBoxProps {
    /** Direction of the items flow */
    flexDirection?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
    /** Alignment of the items flow inside the box on the main axe */
    alignContent?: 'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around' ;
    /** Alignment of the items flow inside the box on the main axe */
    justifyContent?: 'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around';
    /** Define the align-self property of all children */
    alignItems?: 'flex-start' | 'center' | 'flex-end' | 'baseline' | 'stretch';
    flexWrap?: boolean;
    /** Apply the reverse alignment order  */
    reverse?: boolean;
    /** Define a specific size both horizontally and vertically  */
    boxSize?: BoxSize | BoxSizeObject;
    /** Define a specific padding for the box  */
    pad?: Size | SizeObject;
    /** Define a specific margin for the box  */
    margin?: Size | SizeObject;
    /** Define the font color inside the box  */
    color?: string;
    backgroundColor?: string;
    /** Specify a background image */
    backgroundImage?: string;
    /** Make the box using the full width and heigth of the parent container */
    full?: Full;
    /** Does the box selectable */
    selectable?: boolean;
    /** Specify a specific style for the box */
    style?: React.CSSProperties;
    /** Specify a specific className for the box */
    className?: string;
    /** Add click handler on the Box */
    onClick?: (event : React.MouseEvent<any>) => void;
  };

  const FullSize = style({
    flexGrow:1,
    flexShrink:0,
    flexBasis:"100%",
    width:"100%"
  });

  class UpBox extends React.Component<UpBoxProps & WithThemeProps> {

    static defaultProps : Partial<UpBoxProps & WithThemeProps> = {
        style : {},
        theme:defaultTheme,
        onClick: (e) => {},
    }

    getBoxStyles = () => {
        const BoxStyles = style({
            display: 'flex',
            backgroundColor: this.props.backgroundColor || 'transparent',
            color: this.props.color || 'black',
            alignContent: this.props.alignContent || 'flex-start',
            justifyContent: this.props.justifyContent || 'flex-start',
            alignItems: this.props.alignItems || 'flex-start',
            padding: sizeToString(this.props.pad),
            margin: sizeToString(this.props.margin),
            cursor: this.props.selectable ? 'pointer' : 'inherit'
        });

        return BoxStyles ;
    }

    getSize = () => {
        const Sizes = style({
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
        const { children, style, onClick, ...others } = this.props ;

        return (
            <div onClick={onClick} style={style || {}} className={classnames(this.getBoxStyles(), this.getSize(), this.props.className)}>
              {children || null}
            </div>
        );
    }
}

export default withTheme<UpBoxProps>(UpBox);
