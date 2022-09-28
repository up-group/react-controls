import { UpStepValues } from './types';
import { stepStyle } from './style';

const Step = (props: UpStepValues): React.ReactElement => {
  const { value, success, unit = '' } = props;

  return (
    <div className={stepStyle(success)}>
      {value}
      {unit}
    </div>
  );
};

export default Step;
