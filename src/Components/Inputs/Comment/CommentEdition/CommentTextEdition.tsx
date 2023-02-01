import React, { useEffect, useRef, useState } from 'react';
import classnames from 'classnames';
import { useTheme } from '../../../../Common/hooks';
import CommentCancelIcon from '../../../../Common/theming/icons/comment-cancel.svg';
import CommentValidateIcon from '../../../../Common/theming/icons/comment-validate.svg';
import { getWrapperStyles, getActionsStyles, getActionsIconStyles, getInputStyles } from './CommentTextEdition.style';

export interface Props {
  onChange?: (text) => void;
  onCancel: () => void;
  onSubmit: (text) => void;
}

const COMMENT_MAX_LENGTH_LIMIT = 350;

export const CommentTextEdition: React.VFC<Props> = ({ onSubmit, onCancel, onChange }) => {
  const theme = useTheme();
  const [text, setText] = useState('');
  const inputRef = useRef(null);

  const wrapperStyles = getWrapperStyles(theme);
  const actionsStyles = getActionsStyles();
  const actionIconStyles = getActionsIconStyles();
  const inputStyles = getInputStyles(theme);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>): void => {
    setText(event.target.value);
    onChange?.(event.target.value);
  };

  const handleCancel = (): void => {
    setText('');
    onCancel();
  };

  const handleSubmit = (): void => {
    onSubmit?.(text);
    setText('');
  };

  return (
    <div className={classnames(wrapperStyles)}>
      <textarea
        className={inputStyles}
        onChange={handleChange}
        ref={inputRef}
        maxLength={COMMENT_MAX_LENGTH_LIMIT}
        value={text}
      ></textarea>
      <div className={actionsStyles}>
        <>
          <span
            onClick={handleCancel}
            className={actionIconStyles}
            dangerouslySetInnerHTML={{ __html: CommentCancelIcon }}
          />
          <span
            onClick={handleSubmit}
            className={actionIconStyles}
            dangerouslySetInnerHTML={{ __html: CommentValidateIcon }}
          />
        </>
      </div>
    </div>
  );
};
