export interface UpDateTimeProps {
    hasError: boolean;
    onChange: (value?: Date) => void;
    isNuallble: boolean;
    default?: Date;
    className?: string;
}

export interface UpDateTimeState {
    value?: Date;
}
