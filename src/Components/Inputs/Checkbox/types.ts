import { WithThemeProps } from '../../../Common/theming/withTheme';

export interface Option {
    name: string;
    value?: any;
    text?: string;
    iconName?: string;
    onOptionChange?: (event: React.ChangeEvent<any>, value: boolean) => void;
    checked?: boolean;
    disabled?: boolean;
    readonly?: boolean;
};

export interface UpCheckboxStyledProps extends WithThemeProps {
    className?: string;
    tabIndex?: number;
    onChange?: (event: React.ChangeEvent<any>, value: Option) => void;
    readonly?: boolean;
};

export interface UpCheckboxProps {
    /** you can pass name, value, text, iconNmae, onOptionChange, checked, disabled, readonly*/
    options: Array<Option>;
    tabIndex?: number;
    styles?: React.CSSProperties;
};

export interface UpCheckboxState {
    options: Array<Option>;
};