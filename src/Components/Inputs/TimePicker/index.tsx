import UpTimePicker from './UpTimePicker'

export default UpTimePicker ;


export interface UpTimeProps {
    hasError: boolean;
    className?:string;
    onChange: (value: string) => void;
}

export interface UpTimeState {
    hour?: number;
    minute?: number;
}
