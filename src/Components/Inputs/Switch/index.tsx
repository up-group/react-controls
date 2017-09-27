import UpSwitch from './UpSwitch'

export default UpSwitch;

export interface UpSwitchProps {
    // hasError: boolean;
    onChange: (value?: boolean) => void;
    isNullable: boolean;
    default?: boolean;

    displayFalse?: string;
    displayTrue?: string;
    displayNull?: string;
}

export interface UpSwitchState {
    value?: boolean;
}
