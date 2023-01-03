import React, { useState } from 'react';
import { useTheme } from '../../../Common/hooks/useTheme';
import {
  getWrapperStyles,
  getTitleStyles,
  getContentStyles,
  getStatusIndicatorStyles,
  getHeaderStyles,
} from './Collapsable.style';

interface Props {
  title: string;
  defaultOpened?: boolean;
  statusIndicator?: boolean;
  onClick?: (isOpened: boolean) => void;
  withBorders?: boolean;
}

const Collapsable: React.FC<Props> = ({
  title,
  defaultOpened = false,
  statusIndicator = true,
  onClick,
  withBorders = true,
  children,
}) => {
  const theme = useTheme();
  const [isOpened, setIsOpened] = useState(defaultOpened);

  const handleClick = (e: React.MouseEvent): void => {
    e.preventDefault();
    setIsOpened(!isOpened);
    onClick?.(isOpened);
  };

  const wrapperStyles = getWrapperStyles(theme, withBorders);
  const headerStyles = getHeaderStyles(theme);
  const titleStyles = getTitleStyles(theme);
  const statusIndicatorStyles = getStatusIndicatorStyles(theme, isOpened);
  const contentStyles = getContentStyles();

  return (
    <div className={wrapperStyles}>
      <div className={headerStyles} onClick={handleClick}>
        {title && <h2 className={titleStyles}>{title}</h2>}
        {statusIndicator && <div className={statusIndicatorStyles}>{`>`}</div>}
      </div>
      {isOpened && <div className={contentStyles}>{children}</div>}
    </div>
  );
};

export { Collapsable, Props };
