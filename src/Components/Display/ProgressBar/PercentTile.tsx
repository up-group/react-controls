import { UpPercentTyleType } from './types';
import { percentTyleStyle } from './style';

const PercentTile = (props: UpPercentTyleType): React.ReactElement => {
  const { success, size } = props;

  return <div className={percentTyleStyle(size === 0 ? 300 : size, success)} />;
};

export default PercentTile;
