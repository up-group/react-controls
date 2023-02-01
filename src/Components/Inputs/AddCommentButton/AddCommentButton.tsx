import React from 'react';
import { useTheme } from '../../../Common/hooks';
import { getButtonStyles, getLabelStyles, getPlusIconStyles, getWrapperStyles } from './AddCommentButton.style';
import CommentPlusIcon from '../../../Common/theming/icons/comment-plus.svg';

export interface Props {
  label?: string;
  disabled?: boolean;
  onClick: () => void;
}

export const AddCommentButton: React.VFC<Props> = ({ disabled = false, label = 'Ajouter un commentaire', onClick }) => {
  const theme = useTheme();
  const wrapperStyles = getWrapperStyles();
  const buttonStyles = getButtonStyles(theme);
  const plusIconStyles = getPlusIconStyles();
  const labelStyles = getLabelStyles();

  const handleClick = (): void => {
    if (!disabled) {
      onClick();
    }
  };

  return (
    <div className={wrapperStyles}>
      <button className={buttonStyles} onClick={handleClick}>
        <span className={plusIconStyles} dangerouslySetInnerHTML={{ __html: CommentPlusIcon }} />
        <label className={labelStyles}>{label}</label>
      </button>
    </div>
  );
};
