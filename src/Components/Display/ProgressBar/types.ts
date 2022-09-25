export interface UpStepValues {
  success: boolean;
  value: string | number;
}

interface UpValues {
  step: string;
  success: boolean;
  isFirstStep: boolean;
}

export interface UpProgressBarTypes {
  step: Array<UpStepValues>;
  visible: boolean;
  unit: string;
  maxValue: number;
  value: number;
  type: string;
}

export interface UpTyleType {
  success: boolean;
}

export interface UpPercentTyleType {
  success: boolean;
  size: number;
}
