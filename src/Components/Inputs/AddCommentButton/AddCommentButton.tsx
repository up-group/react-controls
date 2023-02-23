import React from 'react';
import { useTheme } from '../../../Common/hooks';
import { getButtonStyles, getLabelStyles, getPlusIconStyles, getWrapperStyles } from './AddCommentButton.style';
import UpSvgIcon from '../../Display/SvgIcon';

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
        <UpSvgIcon className={plusIconStyles} width={30} height={30} iconName="comment-plus" />
        <label className={labelStyles}>{label}</label>
      </button>
    </div>
  );
};
