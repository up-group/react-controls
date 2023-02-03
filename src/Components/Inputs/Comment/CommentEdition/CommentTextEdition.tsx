import React, { useEffect, useRef, useState } from 'react';
import classnames from 'classnames';
import { useTheme } from '../../../../Common/hooks';
import { getWrapperStyles, getActionsStyles, getActionsIconStyles, getInputStyles } from './CommentTextEdition.style';
import UpSvgIcon from '../../../Display/SvgIcon';

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
          <UpSvgIcon width={28} iconName={'comment-cancel'} className={actionIconStyles} onClick={handleCancel} />
          <UpSvgIcon width={28} iconName={'comment-validate'} className={actionIconStyles} onClick={handleSubmit} />
        </>
      </div>
    </div>
  );
};
