import { CommonInputTextProps } from '../_Common/BaseControl/BaseInput';
import { Validation } from '../Input/types';

export interface UpPhoneProps extends CommonInputTextProps<string> {
    validation?: Array<Validation>;
};