import {BaseControlProps} from '../_Common/BaseControl/BaseControl' 

// Exports
export type Position = 'left' | 'right' ;
export type DisplayMode = 'horizontal' | 'vertical' | 'button' ; 

export interface Option {
    value:any;
    text?:string;
    iconName?:string;
    name?:string;
    checked?:boolean;
}

export interface UpRadioStyledProps extends Option {
    className?:string;
    onChange?:(e:any) => void;
}

export interface UpRadioState {
    options?: Array<Option>;
    value?:any;
}

export interface UpRadioProps extends BaseControlProps<any> {
    options: Array<Option>;
    position?:Position;
    name:string;
    value?:any;
    displayMode?: DisplayMode,
    onChange?: (arg: any, event: any, error: boolean) => void;
}
