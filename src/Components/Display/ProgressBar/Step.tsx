import { UpStepValues } from './types';
import { stepStyle } from './style';

const Step = (props: UpStepValues): React.ReactElement => {
  const { value, valueToDisplay, success, unit = '' } = props;

  if (valueToDisplay) {
    return <div className={stepStyle(success)}>{valueToDisplay}</div>;
  }
  return (
    <div className={stepStyle(success)}>
      {value}
      {unit}
    </div>
  );
};

export default Step;
