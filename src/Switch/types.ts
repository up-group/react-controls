export interface UpSwitchProps {
    // hasError: boolean;
    onChange: (value?: boolean) => void;
    isNuallble: boolean;
    default?: boolean;
}

export interface UpSwitchState {
    value?: boolean;
}
