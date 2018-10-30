import { WithThemeProps } from "../../../Common/theming/withTheme";

// Exports
export type WidthSize = 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | 'fill';

export interface UpTextProps extends WithThemeProps {
    width?: WidthSize;
    defaultValue?: string;
    placeholder?: string;
    disabled?: boolean;
    showError?: boolean;
    onChange?: (data: any) => void;
    value?: string;
    hasError?: boolean;
    isRequired?: boolean;
    className?: string;
    dataFor?:string; // For tooltip
}
