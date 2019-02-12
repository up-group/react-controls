import * as React from 'react'
import { NestedCSSProperties } from 'typestyle/lib/types';
import { style } from 'typestyle';
import * as classnames from 'classnames';

export type Alignement = 'h' | 'v'
export type AddOnMode = 'none' | 'left' | 'right'

export interface UpButtonGroupProps {
  gutter?:number;
  align?:Alignement;
  isAddOn?:AddOnMode;
}

const noGutterStyle = (props:UpButtonGroupProps) : NestedCSSProperties => {
  if(props.gutter !== 0) {
    return {} ;
  }
  switch(props.isAddOn) {
    case "none": {
        return {
          $nest : {
            '& .up-btn-wrapper:first-child:not(:last-child):not(.up-dropdown-toggle) .up-btn' : {
              borderTopRightRadius: 0,
              borderBottomRightRadius: 0,
            },
            '& .up-btn-wrapper:last-child:not(:first-child):not(.up-dropdown-toggle) .up-btn' : {
              borderTopLeftRadius: 0,
              borderBottomLeftRadius: 0,
            },
           '& .up-btn-wrapper:not(:last-child):not(:first-child) .up-btn' : {
              borderRadius: 0,
            }
        }
      }
    }
    case "right": {
      return {
        $nest : {
          '& .up-btn-wrapper:first-child .up-btn' : {
            borderTopLeftRadius: 0,
            borderBottomLeftRadius: 0,
          },
          '& .up-btn-wrapper:first-child:not(:last-child):not(.up-dropdown-toggle) .up-btn' : {
            borderTopRightRadius: 0,
            borderBottomRightRadius: 0,
          },
          '& .up-btn-wrapper:last-child:not(:first-child):not(.up-dropdown-toggle) .up-btn' : {
            borderTopLeftRadius: 0,
            borderBottomLeftRadius: 0,
          },
          '& .up-btn-wrapper:not(:last-child):not(:first-child) .up-btn' : {
            borderRadius: 0,
          }
        }
      };
    }
    case "left": {
      return {
        $nest : {
          '& .up-btn-wrapper:last-child .up-btn' : {
            borderTopRightRadius: 0,
            borderBottomRightRadius: 0,
          },
          '& .up-btn-wrapper:first-child:not(:last-child):not(.up-dropdown-toggle) .up-btn' : {
            borderTopRightRadius: 0,
            borderBottomRightRadius: 0,
          },
          '& .up-btn-wrapper:last-child:not(:first-child):not(.up-dropdown-toggle) .up-btn' : {
            borderTopLeftRadius: 0,
            borderBottomLeftRadius: 0,
          },
          '& .up-btn-wrapper:not(:last-child):not(:first-child) .up-btn' : {
            borderRadius: 0
          },
        }
      };
  }
} 
};

const setGutter = (props:UpButtonGroupProps) : NestedCSSProperties => {
  if(props.align==='v') {
    return {
      $nest : {
        '& .up-btn-wrapper' : {
          marginBottom: `${props.gutter}px`,
        },
      },
    };
  } else {
    return {
      $nest : {
        '& .up-btn-wrapper' : {
          marginRight: `${props.gutter}px`,
        },
      },
    };
  }
}

const setAlignment = (props:UpButtonGroupProps) : NestedCSSProperties => {
  if(props.align==='v') {
    return {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'center',
    };
  } else {
    return {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
    };
  }
}

export const getStyles =  (props: UpButtonGroupProps) => {
  return classnames(style(setGutter(props)), style(setAlignment(props)), style(noGutterStyle(props))) ; 
};

export default class UpButtonGroup extends React.Component<UpButtonGroupProps, undefined> {

  constructor(props) {
    super(props) ;
  }

  public static defaultProps: UpButtonGroupProps = {
    gutter:17,
    align:'h',
  };

  public render() {
    const { children, align, gutter, isAddOn, ...others} = this.props ;
    return (
        <div {...others} className={getStyles(this.props)}>
            {children}
        </div>
    ) ;
  }
}