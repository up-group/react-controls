import * as React from 'react';
import { getWrapperStyle } from './StepperControl.style';
import UpSvgIcon from '../SvgIcon';

type StepperDirection = 'right' | 'left';

export interface Props {
  direction: StepperDirection;
  onClick?: () => void;
}

export const StepperControl: React.VFC<Props> = ({ direction, onClick }) => {
  const wrapperStyle = getWrapperStyle();

  const handleClick = (): void => {
    onClick?.();
  };

  return (
    <div className={wrapperStyle} onClick={handleClick} data-testid={`stepper-control-${direction}`}>
      {direction === 'left' && <UpSvgIcon iconName="stepper-previous" />}
      {direction === 'right' && <UpSvgIcon iconName="stepper-next" />}
    </div>
  );
};
