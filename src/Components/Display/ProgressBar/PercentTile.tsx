import { UpPercentTyleType } from './types';
import { percentTyleStyle } from './style';

const PercentTile = (props: UpPercentTyleType): React.ReactElement => {
  const { success, size } = props;

  return <div className={percentTyleStyle(size, success)} />;
};

export default PercentTile;
