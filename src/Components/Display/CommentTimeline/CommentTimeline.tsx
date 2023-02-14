import React, { useState } from 'react';
import classnames from 'classnames';
import moment from 'moment/moment';
import { usePager, useTheme } from '../../../Common/hooks';
import {
  getCommentsWrapperStyles,
  getContentWrapperStyles,
  getControlsWrapperStyle,
  getItemsWrapperStyle,
  getWrapperStyles,
} from './CommentTimeline.style';
import { AddCommentButton } from '../../Inputs/AddCommentButton';
import { Comment, CommentData } from '../../Inputs/Comment';
import { CommentArrow } from '../CommentArrow';

export interface Props {
  author: string;
  dateFormat: string;
  comments: CommentData[];
  onSubmit: (text: string) => void;
  onChange?: (text: string) => void;
  onCancel?: () => void;
  addCommentLabel?: string;
  itemsPerPage?: number;
}

export const CommentTimeline: React.VFC<Props> = ({
  addCommentLabel,
  comments,
  author,
  dateFormat,
  onSubmit,
  onChange,
  onCancel,
  itemsPerPage = 4,
}) => {
  const theme = useTheme();
  const [isCommenting, setIsCommenting] = useState(false);
  const [date, setDate] = useState(null);

  const handlePageChange = (): void => {
    if (isCommenting) {
      setIsCommenting(false);
    }
  };

  const [displayedItems, { hasPreviousPage, hasNextPage, previousPage, nextPage }] = usePager<CommentData>({
    itemsPerPage,
    items: comments,
    onChange: handlePageChange,
  });

  const wrapperStyles = getWrapperStyles(theme);
  const controlsWrapperStyle = getControlsWrapperStyle(theme);
  const commentsWrapperStyles = getCommentsWrapperStyles(theme);
  const contentWrapperStyles = getContentWrapperStyles(theme, isCommenting || (comments && comments.length > 0));
  const itemsWrapperStyle = getItemsWrapperStyle(theme);

  const handleAddNewCommentClick = (): void => {
    if (!isCommenting) {
      setDate(moment(new Date()).format(dateFormat));
      setIsCommenting(true);
    }
  };

  const handleChangeCommentText = (text: string): void => {
    onChange?.(text);
  };

  const handleCancelNewComment = (): void => {
    setIsCommenting(false);
    onCancel?.();
  };

  const handleSubmitNewComment = (comment: string): void => {
    setIsCommenting(false);
    onSubmit?.(comment);
  };

  return (
    <div className={classnames(wrapperStyles)}>
      {(hasPreviousPage || hasNextPage) && (
        <div className={controlsWrapperStyle}>
          <div>{hasPreviousPage && <CommentArrow direction="left" onClick={previousPage} />}</div>
          <div>{hasNextPage && <CommentArrow direction="right" onClick={nextPage} />}</div>
        </div>
      )}
      <div className={contentWrapperStyles}>
        <AddCommentButton disabled={isCommenting} onClick={handleAddNewCommentClick} label={addCommentLabel} />
        <div className={itemsWrapperStyle}>
          <div className={classnames(commentsWrapperStyles)}>
            {isCommenting && (
              <Comment
                author={author}
                date={date}
                mode="edition"
                onSubmit={handleSubmitNewComment}
                onCancel={handleCancelNewComment}
                onChange={handleChangeCommentText}
              />
            )}
            {displayedItems.map(({ id, text, author, date }) => (
              <Comment text={text} author={author} date={date} key={id} mode="locked" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
