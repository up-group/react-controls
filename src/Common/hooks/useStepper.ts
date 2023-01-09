import React, { useState } from 'react';

export interface UseStepperParams {
  steps: React.ReactNode[];
  defaultStep?: number;
  displayedItemsCount?: number;
  onChange?: (newStep: number) => void;
  withNavigation?: boolean;
}

export interface UseStepperUtils {
  hasPreviousStep: boolean;
  hasNextStep: boolean;
  stepBack: () => void;
  stepForward: () => void;
}

export type UseStepper = [React.ReactNode[], UseStepperUtils];

export const useStepper = ({
  steps,
  defaultStep = 0,
  displayedItemsCount = 1,
  withNavigation = true,
  onChange,
}: UseStepperParams): UseStepper => {
  const [currentStep, setCurrentStep] = useState(defaultStep);
  const hasEnoughItems = steps.length > displayedItemsCount;
  const hasPreviousStep = withNavigation && hasEnoughItems && currentStep > 0;
  const hasNextStep = withNavigation && hasEnoughItems && currentStep < steps.length - 1;
  const displayedItems = steps.slice(currentStep, currentStep + displayedItemsCount);

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
