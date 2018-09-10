// Impprts
import UpText from './UpText'

// Exports
export type WidthSize = 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | 'fill';

export interface CommonPros {
    width?: WidthSize;
    defaultValue?: string;
    placeholder?: string;
    disabled?: boolean;
    showError?: boolean;
    enableRTE?:boolean;
    configRTE?:any;
    onChange?: (data: any) => void; 
}

export interface UpTextProps extends CommonPros {
    value?:string;
}

export interface UpTextStyledProps extends CommonPros {
    value: string;
    hasError?: boolean;
    isRequired?: boolean;
    showError?: boolean;
    className?: string;
    dataFor?:string; // For tooltip
}

export default UpText ;