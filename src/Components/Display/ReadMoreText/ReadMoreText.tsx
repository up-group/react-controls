import React, { useState } from 'react';
import classnames from 'classnames';
import { getActionsStyles, getTextStyles, getWrapperStyles } from './ReadMoreText.style';
import { useTheme } from '../../../Common/hooks';
import { CommentArrow } from '../CommentArrow';

export interface Props {
  text: string;
  max: number;
}

export const ReadMoreText: React.FC<Props> = ({ text, max }) => {
  const theme = useTheme();
  const [isMoreTextDisplayed, setIsMoreTextDisplayed] = useState(false);

  const wrapperStyles = getWrapperStyles();
  const textStyles = getTextStyles(theme);
  const actionsStyles = getActionsStyles();

  const handleArrowClick = (): void => {
    setIsMoreTextDisplayed(!isMoreTextDisplayed);
  };

  const hasMoreTextToDisplay = text && text.length > max;
  const textToFirstDisplay = text.slice(0, max);
  const moreText = text.slice(max);

  return (
    <div className={classnames(wrapperStyles)}>
      <p className={textStyles}>
        {textToFirstDisplay} {hasMoreTextToDisplay && isMoreTextDisplayed && moreText}
      </p>
      <div className={actionsStyles}>
        {hasMoreTextToDisplay && (
          <CommentArrow direction={isMoreTextDisplayed ? 'up' : 'down'} onClick={handleArrowClick} />
        )}
      </div>
    </div>
  );
};
