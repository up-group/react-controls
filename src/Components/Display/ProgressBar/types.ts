export interface UpStepValues {
  success: boolean;
  unit: string;
  value: string;
}

interface UpValues {
  step: string;
  success: boolean;
}
export interface UpProgressBarTypes {
  values: Array<UpValues>;
  visible: boolean;
  unit: string;
}

export interface UpTyleType {
  success: boolean;
}
