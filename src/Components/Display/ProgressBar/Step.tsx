import { UpStepValues } from './types';
import { stepStyle } from './style';

const Step = (props: UpStepValues): React.ReactElement => {
  const { value, success } = props;

  return <div className={stepStyle(success)}>{value}</div>;
};

export default Step;
