import * as React from 'react';
import classnames from 'classnames';
import { useTheme } from '../../../Common/hooks';
import CommentArrowLeft from '../../../Common/theming/icons/comment-arrow-left.svg';
import CommentArrowRight from '../../../Common/theming/icons/comment-arrow-right.svg';
import CommentArrowUp from '../../../Common/theming/icons/comment-arrow-up.svg';
import CommentArrowDown from '../../../Common/theming/icons/comment-arrow-down.svg';

import { getRightAndLeftArrowStyles, getUpAndDownArrowStyles, getWrapperStyles } from './CommentArrow.style';

export type CommentArrowDirection = 'right' | 'left' | 'up' | 'down';

export interface Props {
  direction: CommentArrowDirection;
  onClick: () => void;
}

export const CommentArrow: React.VFC<Props> = ({ direction, onClick }) => {
  const theme = useTheme();
  const wrapperStyle = getWrapperStyles(theme);
  const rightAndLeftArrowStyles = getRightAndLeftArrowStyles();
  const upAndDownArrowStyles = getUpAndDownArrowStyles();

  const finalWrapperStyles = classnames({
    [wrapperStyle]: true,
    [rightAndLeftArrowStyles]: direction === 'right' || direction === 'left',
    [upAndDownArrowStyles]: direction === 'up' || direction === 'down',
  });

  return (
    <div className={finalWrapperStyles} onClick={onClick} data-testid={`comment-arrow-${direction}`}>
      {direction === 'left' && <span dangerouslySetInnerHTML={{ __html: CommentArrowLeft }} />}
      {direction === 'right' && <span dangerouslySetInnerHTML={{ __html: CommentArrowRight }} />}
      {direction === 'up' && <span dangerouslySetInnerHTML={{ __html: CommentArrowUp }} />}
      {direction === 'down' && <span dangerouslySetInnerHTML={{ __html: CommentArrowDown }} />}
    </div>
  );
};
