import { CommonInputTextWithIconProps } from '../../BaseControl/BaseInput'
import { IconName } from '../../../../../Common/theming/icons';

// Exports
export type InputType = 'text' | 'email' | 'number' | 'integer' | 'phone' | 'search';
export type InputIconPosition = 'left' | 'right' | 'none';

export interface StyledProps extends CommonInputTextWithIconProps<string> {
    color?: string;
    backgroundColor?: string;
    borderColor?: string;
    type?: InputType;
    iconName?: IconName;
    iconPosition?: InputIconPosition;
    hasError?: boolean;
    focused?: boolean;
    onChange?: (data: any) => void;
    className?: string; // Used for styled components
}
