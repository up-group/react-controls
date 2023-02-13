import React from 'react';
import classnames from 'classnames';
import { useTheme } from '../../../Common/hooks';
import {
  getAuthorWrapperStyles,
  getDateWrapperStyles,
  getInfoWrapperStyles,
  getWrapperStyles,
  getPlusIconStyles,
  getContentWrapperStyles,
} from './Comment.style';
import { CommentTextEdition } from './CommentEdition';
import { CommentTextLocked } from './CommentLocked';
import UpSvgIcon from '../../Display/SvgIcon';

export type CommentMode = 'edition' | 'locked';

export interface CommentData {
  id: string;
  author: string;
  date: string;
  text: string;
}

export interface Props {
  author: string;
  date: string;
  text?: string;
  mode?: CommentMode;
  onCancel?: () => void;
  onChange?: (text) => void;
  onSubmit?: (text) => void;
}

export const Comment: React.VFC<Props> = ({ author, date, text, mode = 'locked', onSubmit, onCancel, onChange }) => {
  const theme = useTheme();

  const wrapperStyles = getWrapperStyles(theme);
  const contentWrapperStyles = getContentWrapperStyles();
  const infoWrapperStyles = getInfoWrapperStyles(theme);
  const authorWrapperStyles = getAuthorWrapperStyles(theme);
  const dateWrapperStyles = getDateWrapperStyles(theme);
  const plusIconStyles = getPlusIconStyles();

  const handleChange = (text: string): void => {
    if (mode === 'edition') {
      onChange?.(text);
    }
  };

  const handleCancel = (): void => {
    if (mode === 'edition') {
      onCancel();
    }
  };

  const handleSubmit = (text: string): void => {
    if (mode === 'edition') {
      onSubmit?.(text);
    }
  };

  return (
    <div className={classnames(wrapperStyles)}>
      <div className={plusIconStyles}>
        <UpSvgIcon width={30} height={30} iconName={'comment-plus'} />
      </div>
      <div className={contentWrapperStyles}>
        <div className={infoWrapperStyles}>
          <p className={classnames(authorWrapperStyles)}>{author}</p>
          <p className={classnames(dateWrapperStyles)}>{date}</p>
        </div>

        {mode === 'locked' && text && <CommentTextLocked text={text} />}
        {mode === 'edition' && (
          <CommentTextEdition onSubmit={handleSubmit} onCancel={handleCancel} onChange={handleChange} />
        )}
      </div>
    </div>
  );
};
