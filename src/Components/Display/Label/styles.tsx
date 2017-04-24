import * as React from 'react'

import styled, {css} from '../../../Common/theming/themedComponents';
import { UpLabelStyledProps } from './';
import { ThemeInterface } from "../../../Common/theming/types";

export const sizeMap = {
  auto: "40px",
  small: "100px",
  medium: "150px",
  large: "250px",
  xlarge: "350px"
};

const inline = css`
  line-height: 30px;
  >div,
  .up-input,
  .up-input-group,
  .up-select  {
      display: inline-block;
      vertical-align: top; 
  }
  .up-input-group .up-input {
    margin-left: 0; 
  }
`

const base = (props: UpLabelStyledProps) => css`
  display: block;
  margin: 0 0 8px;
  .up-label-text {
    text-align: ${props.textAlign};
    width: ${sizeMap[props.width]};
    margin-right:8px;
    display: inline-block;
  }
  .up-input,
  .up-select {
    display: block;
    text-transform: none; 
  }
  .up-select select {
    width: 100%;
    vertical-align: top;
    font-weight: 400; 
  }
  .pt-button-group.pt-vertical {
    margin-top:1px;
  }
`

export const LabelStyled = styled.label`
  ${(props: UpLabelStyledProps) => base(props)}
  ${(props: UpLabelStyledProps) => props.inline ? inline:css`` }
`;