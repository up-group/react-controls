import UpToggle from './UpToggle'
import { ThemedProps } from '../../../Common/theming/types' 

export type Size = 'small' | 'normal' | 'large'

export interface UpToggleStyledProps extends ThemedProps {
    className?:string;
}

export interface UpToggleProps {
    //position?:Position;
    value: any;
    checked?:boolean;
    defaultChecked?:boolean;
    disabled?:boolean;
    onChange?:(event) =>void;
    onFocus?:(event) =>void;
    onBlur?:(event) =>void;
    icons?:any;
    size?:Size;
    className?:string;
}

export default UpToggle ;