import { UpTyleType } from './types';
import { tileStyle } from './style';

const Tile = (props: UpTyleType): React.ReactElement => {
  const { success } = props;

  return <div className={tileStyle(success)} />;
};

export default Tile;
