import { string } from 'yup';

export interface UpStepValues {
  success: boolean;
  value: string | number;
  unit?: string;
  valueToDisplay?: string;
}

interface UpValues {
  step: string;
  success: boolean;
  isFirstStep?: boolean;
}

export interface UpProgressBarTypes {
  values?: Array<UpValues>;
  visible: boolean;
  maxValue?: number;
  value?: number;
  type: string;
  unit?: string;
}

export interface UpTyleType {
  success: boolean;
}

export interface UpPercentTyleType {
  success: boolean;
  size: number;
}
