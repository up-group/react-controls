import { CommonProps } from '../Input';

export interface UpNumberProps extends CommonProps<number | string> {
    max?: number;
    min?: number;
    stepSize?: number;
    decimalPlace?: number;
    value?: number | string;
    hideButtons?: boolean;
    className?: string;
    seperatorForDecimalNumbers?: 'comma' | 'point';
};

export interface UpNumberStyledProps extends UpNumberProps {
    dataFor?: string; // For tooltip
    handleNumericChange?: (valueAsNumber: number, valueAsString: string) => void;
};