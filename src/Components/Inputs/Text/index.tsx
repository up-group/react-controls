import UpText from './UpText'

export type WidthSize = 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | 'fill';

export interface CommonPros {
    width?: WidthSize;
    defaultValue?: string;
    placeholder?: string;
    disabled?: boolean;
    onChange?: (data: any) => void; 
}

export interface UpTextProps extends CommonPros {
    value?:string;
}

export interface UpTextStyledProps extends CommonPros {
    value: string;
    hasError?: boolean;
    className?: string;
    dataFor?:string; // For tooltip
}

export default UpText ;