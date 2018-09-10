//// Imports
//import styled, {css} from '../../../Common/theming/themedComponents';
//import { LinkProps } from './';
//import { ThemeInterface } from "../../../Common/theming/types";


//const plainStyle = (plain: boolean) => {
//  if (plain) {
//    return css`
//      cursor: pointer;
//      line-height: inherit;
//      text-decoration: inherit;
//    `;
//  }
//  return css`
//    text-decoration: underline;
//    line-height: inherit;
//    cursor: pointer;
//  `;
//};

//const colorStyle = (color: string) => {
//  if (color) {
//    return css`
//      color: ${color};
//    `;
//  }
//  return null;
//};

//export default styled.a`
//  font-size: 1.1875rem;
//  line-height: 24px;
//  font-weight: 400;
//  ${(props: LinkProps) => colorStyle(props.color)}
//  ${(props: LinkProps) => plainStyle(props.plain || false)}
//`;