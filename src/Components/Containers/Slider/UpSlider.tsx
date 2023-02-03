import React from 'react';
import { useStepper } from '../../../Common/hooks';
import { getWrapperStyle, getContentStyle, getControlWrapperStyle, getContentItemStyle } from './UpSlider.style';
import { StepperControl } from '../../Display/StepperControl';

export interface Props {
  steps: React.ReactNode[];
  displayedItemsCount?: number;
  onChange?: (currentStep: number) => void;
}

export const UpSlider: React.FC<Props> = ({ steps, onChange, displayedItemsCount = 2 }) => {
  const [displayedItems, { hasNextStep, hasPreviousStep, stepForward, stepBack }] = useStepper({
    items: steps,
    onChange,
    itemsPerPage: displayedItemsCount,
  });

  const wrapperStyle = getWrapperStyle();
  const contentStyle = getContentStyle();
  const contentItemStyle = getContentItemStyle();
  const previousControlWrapperStyle = getControlWrapperStyle(hasPreviousStep);
  const nextControlWrapperStyle = getControlWrapperStyle(hasNextStep);

  return (
    <div className={wrapperStyle}>
      <div className={previousControlWrapperStyle}>
        <StepperControl direction="left" onClick={stepBack} />
      </div>

      <div className={contentStyle}>
        {displayedItems.map((item, i) => (
          <div className={contentItemStyle} key={i}>
            {item}
          </div>
        ))}
      </div>

      <div className={nextControlWrapperStyle}>
        <StepperControl direction="right" onClick={stepForward} />
      </div>
    </div>
  );
};
