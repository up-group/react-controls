// Imports
import styled from '../../../Common/theming/themedComponents';
import {sizeMap} from '../_Common/Styled' 
import 'react-select/dist/react-select.css'
import { ThemeInterface } from "../../../Common/theming/types";
import {UpSelectStyledProps} from './'

var getWidth = function(props) {
    switch(props.width) {
      case 'normal':
      return `.Select { width: auto }` ;
      case 'full':
      return `.Select { width: 100% }` ;
      case 'xsmall' :
      return `.Select { width: 5em }` ;
      case 'small':
      return `.Select { width: 8em }` ;
      case 'normal':
      return `.Select { width: 23em }` ;
      case 'large':
      return `.Select { width: 30em }` ;
      default:
      return `.Select { width: 23em }` ;
    }
}

// Exports
const WrapperSelect = styled.div`
  width:100%;
  ${(props: UpSelectStyledProps) => getWidth(props)}
`;

export default WrapperSelect ;
