import * as React from 'react';
import StepperImageLeft from '../../../Common/theming/icons/stepper-previous.svg';
import StepperImageRight from '../../../Common/theming/icons/stepper-next.svg';
import { getWrapperStyle } from './StepperControl.style';

type StepperDirection = 'right' | 'left';

export interface Props {
  direction: StepperDirection;
  onClick: () => void;
}

export const StepperControl: React.VFC<Props> = ({ direction, onClick }) => {
  const wrapperStyle = getWrapperStyle();

  return (
    <div className={wrapperStyle} onClick={onClick} data-testid={`stepper-control-${direction}`}>
      {direction === 'left' && <span dangerouslySetInnerHTML={{ __html: StepperImageLeft }} />}
      {direction === 'right' && <span dangerouslySetInnerHTML={{ __html: StepperImageRight }} />}
    </div>
  );
};
