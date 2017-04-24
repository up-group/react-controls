import * as React from 'react';
import { UpInputProps } from '../Input/';

import { InputBaseComponent } from '../_Common/BaseControl/BaseControl';
import { NumericInput } from '@blueprintjs/core'
import { CommonProps } from '../Input/';

import {FilterProps} from '../../../Common/utils/types'

export interface UpIntegerStyledProps extends CommonProps{
   color?: string;
   backgroundColor?: string;
   borderColor?: string;
   isNullable?: boolean;
   hasError?: boolean;
   onChange?: (data: any) => void;
   className?:string;
}

export interface UpIntegerProps extends CommonProps{
   max?: number,
   min?: number,
   isNullable?: boolean;
}

export default class UpInteger extends InputBaseComponent<UpIntegerProps, number> {
   public static defaultProps: UpIntegerProps = {
   };
    
   public static defaultStyledProps: UpIntegerStyledProps = {
       color: "",
       backgroundColor: "",
       borderColor: "",
       isNullable: false,
       className:"",
       disabled: false,
       placeholder: "",
       height: "normal",
       width: "medium",
       readonly: false
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
