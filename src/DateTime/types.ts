
import {StyledComponentProps} from '../utils/types'

export interface UpDateTimeProps extends StyledComponentProps {
    onChange: (value?: Date) => void;
    hasError : boolean;
}
