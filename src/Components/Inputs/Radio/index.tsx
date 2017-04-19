import UpRadio from './UpRadio'

export default UpRadio ;

export type Position = 'left' | 'right' ;

export interface Option {
    value:any;
    text?:string;
    iconName?:string;
    onChange?:(e:any) => void;
    name?:string;
    checked:boolean;
}

export interface UpRadioStyledProps extends Option {
    className?:string;
}

export interface UpRadioProps {
    options: Array<Option>;
    position?:Position;
    name:string;
    value:any;
}