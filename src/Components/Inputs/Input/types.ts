import { Tooltip } from '../../Display/Tooltip'
import { IconName } from '../../../Common/theming/icons';
import { WithThemeProps } from '../../../Common/theming/withTheme';
import { CommonInputTextProps } from '../_Common/BaseControl/BaseInput';
import { InputIconPosition } from '../_Common/Styled/Input/types';

export type WidthSize = 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | 'fill';
export type HeightSize = 'normal' | 'large';
export type InputType = 'text' | 'email' | 'number' | 'integer' | 'phone' | 'search' | 'password';

export interface Validation {
    pattern: RegExp;
    errorMessage: string;
};

export interface UpInputStyledProps extends CommonProps<string> {
    color?: string;
    backgroundColor?: string;
    borderColor?: string;
    type?: InputType;
    showError?: boolean;
    onChange?: (data: any) => void;
    className?: string;
    value: string;
    maxLength?: number;
    focused?: boolean;
    dataFor?: string; // Use for tooltip
    autoFocus?: boolean;
    hasClearOption: boolean;
    onClear?: () => void;
    isLoading?: boolean;
};

export interface CommonProps<VT> extends CommonInputTextProps<VT> {
    disabled?: boolean;
    placeholder?: string;
    height?: HeightSize;
    width?: WidthSize;
    readonly?: boolean;
    tooltip?: string | Tooltip;
    showError?: boolean;
    showSuccess?: boolean;
    iconName?: IconName;
    iconPosition?: InputIconPosition;
    rounded?: boolean;
    autocomplete?: string;
    id?: string;
    autoFocus?: boolean;
};

export interface UpInputProps extends CommonProps<string> {
    type?: InputType;
    hasError?: boolean;
    value?: string;
    validation?: Array<Validation>;
    maxLength?: number;
    hasClearOption?: boolean;
    onClear?: () => void;
    isLoading?: boolean;
    focused?: boolean;
    className?: string;
    showValidationStatus?: boolean;
};
