import { NestedCSSProperties } from "typestyle/lib/types";
import { UpLabelStyledProps } from "./types";
import { style } from "typestyle";
import * as classnames from 'classnames';

export const sizeMap = {
 auto: "40px",
 small: "100px",
 medium: "150px",
 large: "250px",
 xlarge: "350px"
};

const inline : NestedCSSProperties = { 
  $nest :{
    '.up-label-text' : {
      lineHeight: '30px',
    },
    '>div,.up-input,.up-input-group,.up-select' :  {
      display: 'inline-block',
      verticalAlign: 'top', 
    },
    '.up-input-group .up-input' : {
      marginLeft: 0, 
    }
  }
}

const base = (props: UpLabelStyledProps) : NestedCSSProperties => (
  {
    display: 'block',
    margin: '0 0 8px',
    $nest : {
      '.up-label-text' : {
        textAlign: props.textAlign,
        width: sizeMap[props.width],
        marginRight:'8px',
        display: 'inline-block',
      },
      '.up-input, .up-select' : {
        display: 'block',
        textTransform: 'none',
      },
      '.up-select select' : {
        width: '100%',
        verticalAlign: 'top',
        fontWeight: 400, 
      },
      '.pt-button-group.pt-vertical' : {
        marginTop:'0px',
      }
    }
  }
)

export const getStyles =  (props: UpLabelStyledProps) : string => (
  classnames(style(base(props)), props.inline ? style(inline) : null)
);
