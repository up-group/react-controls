// Impprts
import UpText from './UpText'
import { ThemedProps } from '../../../Common/theming/types'

// Exports
export type WidthSize = 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | 'fill';

export interface CommonPros extends ThemedProps {
    width?: WidthSize;
    defaultValue?: string;
    placeholder?: string;
    disabled?: boolean;
    showError?: boolean;
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