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
  const [hasReachedLimit, setHasReachedLimit] = useState(false);
  const inputRef = useRef(null);

  const wrapperStyles = getWrapperStyles(theme, hasReachedLimit);
  const actionsStyles = getActionsStyles();
  const actionIconStyles = getActionsIconStyles();
  const inputStyles = getInputStyles(theme);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>): void => {
    if (event.target.value?.length < COMMENT_MAX_LENGTH_LIMIT) {
      if (hasReachedLimit) {
        setHasReachedLimit(false);
      }
      setText(event.target.value);
      onChange?.(event.target.value);
    } else {
      setHasReachedLimit(true);
    }
  };

  const handleCancel = (): void => {
    setText('');
    onCancel();
  };

  const handleSubmit = (): void => {
    setText('');
    onSubmit?.(text);
  };

  return (
    <div className={classnames(wrapperStyles)}>
      <textarea
        className={inputStyles}
        onChange={handleChange}
        ref={inputRef}
        maxLength={COMMENT_MAX_LENGTH_LIMIT}
        value={text}
      />
      <div className={actionsStyles}>
        <UpSvgIcon
          width={28}
          height={28}
          iconName={'comment-cancel'}
          className={actionIconStyles}
          onClick={handleCancel}
        />
        <UpSvgIcon
          width={28}
          height={28}
          iconName={'comment-validate'}
          className={actionIconStyles}
          onClick={handleSubmit}
        />
      </div>
    </div>
  );
};
