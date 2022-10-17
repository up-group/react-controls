import { UpStepValues } from './types';
import { stepStyle } from './style';

const Step = (props: UpStepValues): React.ReactElement => {
  const { value, firstValueToDisplay, secondValueToDisplay, success, unit = '' } = props;

  if (firstValueToDisplay) {
    return <div className={stepStyle(success)}>{firstValueToDisplay}</div>;
  }
  if (secondValueToDisplay) {
    return <div className={stepStyle(success)}>{secondValueToDisplay}</div>;
  }
  return (
    <div className={stepStyle(success)}>
      {value}
      {unit}
    </div>
  );
};

export default Step;
