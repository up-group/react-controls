
import {StyledComponentProps} from '../utils/types'

export interface UpDateTimeProps extends StyledComponentProps {
    hasError: boolean;
    onChange: (value?: Date) => void;
    isNuallble: boolean;
    default?: Date;
    className?: string;
}

export interface UpDateTimeState {
    value?: Date;
}
