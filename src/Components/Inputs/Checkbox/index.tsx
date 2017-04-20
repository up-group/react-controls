import UpCheckbox from './UpCheckbox'
import { ThemedProps } from '../../../Common/theming/types' 

export type Position = 'left' | 'right' ;

export interface Option {
    name:string;
    value:any;
    text?:string;
    iconName?:string;
    onChange?:(e:any) => void;
    checked:boolean;
}

export interface UpCheckboxStyledProps extends Option, ThemedProps {
    className?:string;
}

export interface UpCheckboxProps {
    options:Array<Option>;
    //position?:Position;
}

export default UpCheckbox ;