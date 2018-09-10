//import styled, {keyframes, css} from '../../../Common/theming/themedComponents';
//import { Status, StyledProps } from './types';
//import colorMap from '../../../Common/theming/colorMap';
//import { ThemeInterface } from "../../../Common/theming/types";

//const backgroundColor = (status: Status) => css`
//  background-color: ${colorMap[status] || colorMap.offwhite};
//  color: ${colorMap[`{status}_fg`] || colorMap.black1};
//`;

//const unmount = keyframes`
//  0% { transform: translateX(0%); opacity: 1; }
//  100% { transform: translateX(50%); opacity: 0;}
//`;

//const mount = keyframes`
//  0% { transform: translateX(50%); opacity: 0; }
//  100% { transform: translateX(0%); opacity: 1; }
//`;

//export const Button = styled.button`
//  background-color: transparent;
//  border: 0px;
//  color: #333;
//  cursor: pointer;
//  font-size: 2rem;
//`;

//export default styled.div`
//  position: fixed;
//  background-color: #333; /* Black background color */
//  color: #fff; /* White text color */
//  font-size: 1.3rem;
//  top: 30px; /* 30px from the top */
//  right:30px;
//  z-index: 100;
//  display: flex;
//  -moz-box-shadow: 10px 10px 5px 0px #656565;
//  -webkit-box-shadow: 10px 10px 5px 0px #656565;
//  -o-box-shadow: 10px 10px 5px 0px #656565;
//  box-shadow: 10px 10px 5px 0px #656565;
//  filter:progid:DXImageTransform.Microsoft.Shadow(color=#656565, Direction=134, Strength=5);
//  -moz-border-radius: 4px;
//  -webkit-border-radius: 4px;
//  border-radius: 4px;
//  text-align: center; /* Centered text */ 
//  padding: 10px; /* Padding */
//  min-width: 250px; /* Set a default minimum width */
//  flex-direction: row;
//  ${({ status }: StyledProps) => backgroundColor(status)}
//  animation:${({ isUnmounting }: StyledProps) => isUnmounting ? unmount : mount} 1.5s;
//`;