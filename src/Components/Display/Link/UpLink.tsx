import React from 'react';
import { getStyles } from './styles';
import UpDefaultTheme, { withTheme } from '../../../Common/theming';
import { UpLinkProps } from './types';

export const MethodTypePush = 'push';

const UpLink: React.FunctionComponent<UpLinkProps> = props => {
  const { children, href, onClick, target, dataFor, label } = props;

  let tooltipProps = {};
  if (dataFor) {
    tooltipProps = {
      'data-tip': 'tooltip',
      'data-for': dataFor,
    };
  }

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    onClick(e);
  };

  return (
    <a className={getStyles(props)} href={href} target={target} onClick={handleClick} {...tooltipProps}>
      {label || children}
    </a>
  );
};

UpLink.defaultProps = {
  method: MethodTypePush,
  onClick: (e: React.MouseEvent<HTMLAnchorElement>) => {},
  theme: UpDefaultTheme,
};

export { UpLink };
export default withTheme<UpLinkProps>(UpLink);
