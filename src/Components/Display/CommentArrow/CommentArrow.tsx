import * as React from 'react';
import { useTheme } from '../../../Common/hooks';
import UpSvgIcon from '../../Display/SvgIcon';
import { getWrapperStyles } from './CommentArrow.style';

export type CommentArrowDirection = 'right' | 'left' | 'up' | 'down';

export interface Props {
  direction: CommentArrowDirection;
  onClick: () => void;
}

export const CommentArrow: React.VFC<Props> = ({ direction, onClick }) => {
  const theme = useTheme();
  const wrapperStyle = getWrapperStyles(theme);

  return (
    <div className={wrapperStyle} onClick={onClick} data-testid={`comment-arrow-${direction}`}>
      {direction === 'left' && <UpSvgIcon width={32} iconName={'comment-arrow-left'} />}
      {direction === 'right' && <UpSvgIcon width={32} iconName={'comment-arrow-right'} />}
      {direction === 'up' && <UpSvgIcon width={17} iconName={'comment-arrow-up'} />}
      {direction === 'down' && <UpSvgIcon width={17} iconName={'comment-arrow-down'} />}
    </div>
  );
};
