import * as React from 'react';

import { getWrapperStyle } from './StepperControl.style';
import StepperLeftControl from '../../../Common/theming/icons/stepper-control-left.svg';
import StepperRightControl from '../../../Common/theming/icons/stepper-control-right.svg';

export interface Props {
  direction: 'right' | 'left';
  onClick: () => void;
}

export const StepperControl: React.VFC<Props> = ({ direction, onClick }) => {
  const wrapperStyle = getWrapperStyle();

  return (
    <div className={wrapperStyle} onClick={onClick} data-testid={`stepper-control-${direction}`}>
      {direction === 'left' && <span dangerouslySetInnerHTML={{ __html: StepperLeftControl }} />}
      {direction === 'right' && <span dangerouslySetInnerHTML={{ __html: StepperRightControl }} />}
    </div>
  );
};
