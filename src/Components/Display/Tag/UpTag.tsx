import React, { useState } from 'react';
import classnames from 'classnames';
import { useTheme } from '../../../Common/hooks/useTheme';
import { getTagStyle } from './UpTag.style';

export interface TagData {
  id: string;
  text: string;
  selected: boolean;
}

export interface Props extends TagData {
  onChange?: (e: React.MouseEvent, data: TagData) => void;
}

export const UpTag: React.VFC<Props> = ({ id, text, selected, onChange }) => {
  const theme = useTheme();

  const handleClick = (e: React.MouseEvent<HTMLSpanElement>): void => {
    onChange?.(e, { id, text, selected: !selected });
  };

  const styles = getTagStyle(theme, selected);
  const className = classnames(styles, `tag-${id}`);

  return (
    <span className={className} onClick={handleClick} data-testid={`tag-${id}`}>
      {text}
    </span>
  );
};
