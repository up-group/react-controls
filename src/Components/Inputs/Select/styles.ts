//// Imports
//import styled from '../../../Common/theming/themedComponents';
//import {sizeMap} from '../_Common/Styled' 
//import 'react-select/dist/react-select.css'
//import { ThemeInterface } from "../../../Common/theming/types";
//import {UpSelectStyledProps} from './'

//var getWidth = function(props) {
//    switch(props.width) {
//      case 'auto':
//      return `.Select { width: auto }` ;
//      case 'full':
//      return `.Select { width: 100% }` ;
//      case 'xsmall' :
//      return `.Select { width: ${sizeMap[props.width]? sizeMap[props.width] : "5em" };` ;
//      case 'small':
//      return `.Select { width: ${sizeMap[props.width]? sizeMap[props.width] : "8em" };` ;
//      case 'normal':
//      return `.Select { width: ${sizeMap[props.width]? sizeMap[props.width] : "23em" };` ;
//      case 'large':
//      return `.Select { width: ${sizeMap[props.width]? sizeMap[props.width] : "30em" };` ;
//      default:
//      return `.Select { width: ${sizeMap[props.width]? sizeMap[props.width] : "100%" };` ;
//    }
//}

//var getHeight = function(props) {
//    return `.Select-input { height: 32px }
//            .Select-control  { height: 32px }` ;
//}

//// Exports
//const WrapperSelect = styled.div`
//  width:100%;
//  ${(props: UpSelectStyledProps) => getWidth(props)}
//  ${(props: UpSelectStyledProps) => getHeight(props)}
//`;

//export default WrapperSelect ;
