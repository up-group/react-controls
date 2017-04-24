import * as React from 'react';
import {UpInputProps} from '../Input/';

import { InputBaseComponent } from '../_Common/BaseControl/BaseControl';
import { NumericInput } from '@blueprintjs/core'
import { CommonProps } from '../Input/';

import {FilterProps} from '../../../Common/utils/types'

export interface UpNumberStyledProps extends CommonProps{
   color?: string;
   backgroundColor?: string;
   borderColor?: string;
   isNullable?: boolean;
   hasError?: boolean;
   onChange?: (data: any) => void;
   className?:string;
}

export interface UpNumberProps extends CommonProps{
   max?: number,
   min?: number,
   isNullable?: boolean;
}

export default class UpNumber extends InputBaseComponent<UpNumberProps, number> {
   public static defaultProps: UpNumberProps = {
   };
    
   public static defaultStyledProps: UpNumberStyledProps = {
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
       // var pattern = /^[0-9]*$/
       // var patternErrorMessage = "Doit être un nombre entier";
       // this._validationManager.addControl(new TypeStringControl(pattern, patternErrorMessage));
       // this._validationManager.addControl(new TypeNumberControl(true, this.props.min, this.props.max));
   }

   onChange(event: any) {
       return event.target.value;
   }

   renderControl() {
       const styledProps= FilterProps(this.props, UpNumber.defaultStyledProps) ;
        
       return (
           <NumericInput
               {...styledProps}
               onChange={this.handleChangeEvent}>
           </NumericInput>
       );
   }
}
