export interface UpStepValues {
  success: boolean;
  value: string;
  unit: string;
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
}

export interface UpTyleType {
  success: boolean;
}
