import { UpStepValues } from './types';
import { stepStyle } from './style';

const Step = (props: UpStepValues): React.ReactElement => {
  const { value, success, unit, valueToDisplay } = props;

  const display = valueToDisplay ? `${valueToDisplay}` : `${value}${unit}`;
  return <div className={stepStyle(success)}>{display}</div>;
};

export default Step;
