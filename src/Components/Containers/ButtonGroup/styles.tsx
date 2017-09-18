// Imports
import * as React from 'react'
import styled, {css} from '../../../Common/theming/themedComponents';
import { UpButtonGroupStyledProps} from './'
import { ThemeInterface } from "../../../Common/theming/types";

const NoGutterStyle = (props:UpButtonGroupStyledProps) => {
  switch(props.isAddOn) {
    case "none": {
        return css`
          .up-btn-wrapper:first-child:not(:last-child):not(.up-dropdown-toggle) .up-btn {
            border-top-right-radius: 0;
            border-bottom-right-radius: 0;
          }
          .up-btn-wrapper:last-child:not(:first-child):not(.up-dropdown-toggle) .up-btn {
            border-top-left-radius: 0;
            border-bottom-left-radius: 0;
          }
          .up-btn-wrapper:not(:last-child):not(:first-child) .up-btn {
            border-radius: 0;
          }
        `;
    }
    case "right": {
      return css`
        .up-btn-wrapper:first-child .up-btn {
          border-top-left-radius: 0;
          border-bottom-left-radius: 0;
        }
        .up-btn-wrapper:first-child:not(:last-child):not(.up-dropdown-toggle) .up-btn {
          border-top-right-radius: 0;
          border-bottom-right-radius: 0;
        }
        .up-btn-wrapper:last-child:not(:first-child):not(.up-dropdown-toggle) .up-btn {
          border-top-left-radius: 0;
          border-bottom-left-radius: 0;
        }
        .up-btn-wrapper:not(:last-child):not(:first-child) .up-btn {
          border-radius: 0;
        }
      `;
  }
  case "left": {
    return css`
      .up-btn-wrapper:last-child .up-btn {
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
      }
      .up-btn-wrapper:first-child:not(:last-child):not(.up-dropdown-toggle) .up-btn {
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
      }
      .up-btn-wrapper:last-child:not(:first-child):not(.up-dropdown-toggle) .up-btn {
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
      }
      .up-btn-wrapper:not(:last-child):not(:first-child) .up-btn {
        border-radius: 0;
      }
    `;
  }
} 
};

var setGutter = (props:UpButtonGroupStyledProps) => {
  if(props.align==='v') {
    return css`
      button.up-btn {
        margin-bottom: ${props.gutter}px;
      }
      ()
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
  ${(props: UpButtonGroupStyledProps) => (props.gutter==0)?NoGutterStyle:css``}
`;