// Imports
import * as classnames from 'classnames'

import { UpSelectStyledProps } from './types';
import { sizeMap } from '../_Common/Styled';

var getWidth = (props : UpSelectStyledProps) => {
  let width = "100%" ;  
  switch(props.width) {
      case 'auto':
        width = 'auto';
      case 'full':
        width = '100%' ;
      case 'xsmall' :
        width = sizeMap[props.width] ? sizeMap[props.width] : "5em" ;
      case 'small':
        width = sizeMap[props.width]? sizeMap[props.width] : "8em";
      case 'normal':
        width = sizeMap[props.width]? sizeMap[props.width] : "23em" ;
      case 'large':
        width = sizeMap[props.width]? sizeMap[props.width] : "30em" ;
      default:
        width =sizeMap[props.width]? sizeMap[props.width] : "100%" ;
    }

    return  {
      width:'100%',
      $nest : {
        '.Select' : { width }
      }
    }
}

var getHeight = (props: UpSelectStyledProps) => {
    return {
      $nest : {
        '.Select-input' : { height: '32px' },
        '.Select-control' : { height: '32px' },
      }
    }
}

// Exports
export const getStyles = (props: UpSelectStyledProps) => (
  classnames(getWidth(props), getHeight(props))
)
