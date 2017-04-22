// Imports
import * as React from 'react'
import styled, {css} from '../../../Common/theming/themedComponents';
import { UpFormGroupStyledProps } from './';
import { ThemeInterface } from "../../../Common/theming/types";

const base = (props: UpFormGroupStyledProps) => css`
  border: none;
  legend {
    border-bottom : 1px solid ${props.theme.colorMap.darkGray5};
    color:${props.theme.colorMap.darkGray5};
    font-weight:700;
    font-size: 16px;
    width:98%
  }
`;

export const FormGroupStyled = styled.fieldset`
  ${(props: UpFormGroupStyledProps) => base(props)}
`;

export const FormGroupTitle = styled.legend`
`;