import * as React from 'react';
import {Props as StyleProps} from '../Input/';

import { InputBaseComponent } from '../_Common/BaseControl/BaseControl';
import { NumericInput } from '@blueprintjs/core'
import { CommonProps } from '../Input/';

import {FilterProps} from '../../../Common/utils/types'

export interface StyledProps extends CommonProps{
   color?: string;
   backgroundColor?: string;
   borderColor?: string;
   isNullable?: boolean;
   hasError?: boolean;
   onChange?: (data: any) => void;
   className?:string;
}

export interface Props extends CommonProps{
   max?: number,
   min?: number,
   isNullable?: boolean;
}

export default class UpInteger extends InputBaseComponent<Props, number> {
   public static defaultProps: Props = {
   };
    
   public static defaultStyledProps: StyledProps = {
       color: "",
       backgroundColor: "",
       borderColor: "",
       isNullable: false,
       className:"",
       disabled: false,
       placeholder: "",
       height: "normal",
       width: "medium",
       readOnly: false
   };

   constructor(p, c) {
       super(p, c);
   }

   onChange(event: any) {
       return event.target.value;
   }

   renderControl() {
       const styledProps= FilterProps(this.props, UpInteger.defaultStyledProps) ;
        
       return (
           <NumericInput
               {...styledProps}
               onChange={this.handleChangeEvent}>
           </NumericInput>
       );
   }
}
