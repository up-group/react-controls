import UpCheckbox from './UpCheckbox'

export default UpCheckbox ;

export type Position = 'left' | 'right' ;

export interface Option {
    name:string;
    value:any;
    text?:string;
    iconName?:string;
    onChange?:(e:any) => void;
    checked:boolean;
}

export interface UpCheckboxStyledProps extends Option {
    className?:string;
}

export interface UpCheckboxProps {
    options: Array<Option>;
    position?:Position;
}