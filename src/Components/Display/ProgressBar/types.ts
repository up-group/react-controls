export interface UpStepValues {
  success: boolean;
  unit: string;
  value: string;
  step: string;
}
export interface UpProgressBarTypes {
  values: Array<UpStepValues>;
  visible: boolean;
  unit: string;
}

export interface UpTyleType {
  success: boolean;
}
