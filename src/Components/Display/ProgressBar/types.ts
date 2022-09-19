export interface UpStepValues {
  success: boolean;
  value: string;
  unit: string;
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
