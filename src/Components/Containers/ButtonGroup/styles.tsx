// Imports
import * as React from 'react'
import styled, {css} from '../../../Common/theming/themedComponents';
import { UpButtonGroupStyledProps} from './'
import { ThemeInterface } from "../../../Common/theming/types";

var setGutter = (props:UpButtonGroupStyledProps) => {
  if(props.align==='v') {
    return css`
      button.up-btn {
        margin-bottom: ${props.gutter}px;
      }
    ` ;
  } else {
    return css`
      button.up-btn {
        margin-right: ${props.gutter}px;
      }
    ` ;
  }
}

var setAlignment = (props:UpButtonGroupStyledProps) => {
  if(props.align==='v') {
    return css`
      button.up-btn, div {
        display:block;
        float:left;
        clear:left;
      }
    ` ;
  } else {
    return css`
      button.up-btn {
        display:inline-block;
        float:left;
      }
    ` ;
  }
}

export const ButtonGroupStyled = styled.div`
  ${(props: UpButtonGroupStyledProps) => setGutter(props)}
  ${(props: UpButtonGroupStyledProps) => setAlignment(props)}
`;