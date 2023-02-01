import React from 'react';
import classnames from 'classnames';
import { useTheme } from '../../../../Common/hooks';
import { getWrapperStyles } from './CommentTextLocked.style';
import { ReadMoreText } from '../../../Display/ReadMoreText';

const COMMENT_SHOW_MORE_LIMIT = 150;

export interface Props {
  text: string;
}

export const CommentTextLocked: React.VFC<Props> = ({ text }) => {
  const theme = useTheme();

  const wrapperStyles = getWrapperStyles(theme);

  return (
    <div className={classnames(wrapperStyles)}>
      <ReadMoreText text={text} max={COMMENT_SHOW_MORE_LIMIT} />
    </div>
  );
};
