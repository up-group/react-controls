import styled, {css} from '../../../Common/theming/themedComponents';

import Props from './types';
import {
  calculateFlexWrap,
  calculateFullStyle,
  sizeToString,
  boxSizeToStyle,
} from './styleUtils';

import { ThemeInterface } from "../../../Common/theming/types";
import { InterpolationFunction, ThemeProps } from "styled-components/typings/styled-components";

export const BoxStyles = css`
  display: flex;
  background-color: ${({ backgroundColor }: Props) => backgroundColor || 'transparent'};
  justify-content: ${({ justifyContent }: Props) => justifyContent || 'flex-start'};
  align-items: ${({ alignItems }: Props) => alignItems || 'flex-start'};
  padding: ${({ pad }: Props) => sizeToString(pad)};
  margin: ${({ margin }: Props) => sizeToString(margin)};
  cursor: ${({ selectable }: Props) => selectable ? 'pointer' : 'inherit'};
`;

const Sizes = css`
  flex-shrink:1;
  flex-direction: ${({ flexDirection }: Props) => flexDirection || 'column'};
  flex-wrap: ${({ flexWrap, reverse }: Props) => calculateFlexWrap(flexWrap, reverse)};
  width: ${({ boxSize }: Props) => boxSizeToStyle(boxSize).width};
  height: ${({ boxSize }: Props) => boxSizeToStyle(boxSize).height};
  flex-basis: auto;
  min-height: ${({ full }: Props) => calculateFullStyle(full, 'vh')};
  min-width: ${({ full }: Props) => calculateFullStyle(full, 'vw')};
`

const FullSize = css`
  flex-grow:1;
  flex-shrink:0;
  flex-basis:100%;
  width:100%;
`

export default styled.div`
  ${BoxStyles}
  ${( props : Props)  => (props.full) ? FullSize : Sizes}
`;
