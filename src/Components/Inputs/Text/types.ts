import { WithThemeProps } from "../../../Common/theming/withTheme";

// Exports
export type WidthSize = 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | 'fill';

export interface UpTextProps extends WithThemeProps {
    width?: WidthSize;
    defaultValue?: string;
    placeholder?: string;
    disabled?: boolean;
    showError?: boolean;
    value?: string;
    hasError?: boolean;
    isRequired?: boolean;
    name?: string;
    className?: string;
    dataFor?:string; // For tooltip
    tabIndex?:number;
    onChange?: (event: React.ChangeEvent<any>, data: string) => void;
}
