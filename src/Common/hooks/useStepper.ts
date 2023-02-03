import React, { useState } from 'react';

export interface UseStepperParams<T = React.ReactNode> {
  items: T[];
  defaultStep?: number;
  itemsPerPage?: number;
  onChange?: (newStep: number) => void;
  withNavigation?: boolean;
}

export interface UseStepperUtils {
  hasPreviousStep: boolean;
  hasNextStep: boolean;
  stepBack: () => void;
  stepForward: () => void;
}

export type UseStepper<T = React.ReactNode> = [T[], UseStepperUtils];

export const useStepper = <T>({
  items,
  defaultStep = 0,
  itemsPerPage = 1,
  withNavigation = true,
  onChange,
}: UseStepperParams<T>): UseStepper<T> => {
  const [currentStep, setCurrentStep] = useState(defaultStep);
  const hasEnoughItems = items.length > itemsPerPage;
  const hasPreviousStep = withNavigation && hasEnoughItems && currentStep > 0;
  const hasNextStep = withNavigation && hasEnoughItems && currentStep < items.length - 1;
  const displayedItems = items.slice(currentStep, currentStep + itemsPerPage);

  const stepForward = (): void => {
    if (hasNextStep) {
      const nextStep = currentStep + 1;

      setCurrentStep(nextStep);
      onChange?.(nextStep);
    }
  };

  const stepBack = (): void => {
    if (hasPreviousStep) {
      const nextStep = currentStep - 1;

      setCurrentStep(nextStep);
      onChange?.(nextStep);
    }
  };

  return [
    displayedItems,
    {
      hasPreviousStep,
      hasNextStep,
      stepBack,
      stepForward,
    },
  ];
};
