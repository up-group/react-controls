import React, { useState } from 'react';
import classnames from 'classnames';
import moment from 'moment/moment';
import { useStepper, useTheme } from '../../../Common/hooks';
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
}

export const CommentTimeline: React.VFC<Props> = ({
  addCommentLabel,
  comments,
  author,
  dateFormat,
  onSubmit,
  onChange,
  onCancel,
}) => {
  const theme = useTheme();
  const [isCommenting, setIsCommenting] = useState(false);
  const [date, setDate] = useState(null);

  const [displayedItems, { hasNextStep, hasPreviousStep, stepForward, stepBack }] = useStepper<CommentData>({
    steps: comments,
    displayedItemsCount: 3,
  });

  const wrapperStyles = getWrapperStyles(theme);
  const controlsWrapperStyle = getControlsWrapperStyle(theme);
  const commentsWrapperStyles = getCommentsWrapperStyles(theme);
  const contentWrapperStyles = getContentWrapperStyles(theme);
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
      {(hasNextStep || hasPreviousStep) && (
        <div className={controlsWrapperStyle}>
          <div>{hasPreviousStep && <CommentArrow direction="left" onClick={stepBack} />}</div>
          <div>{hasNextStep && <CommentArrow direction="right" onClick={stepForward} />}</div>
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
