import React from 'react';
import classnames from 'classnames';
import { UpBadgeProps } from './types';
import withTheme, { WithThemeProps } from '../../../Common/theming/withTheme';
import defaultTheme from '../../../Common/theming';
import { getStyle } from './styles';

const UpBadge: React.FunctionComponent<UpBadgeProps & WithThemeProps> = props => {
  const { text, className, onClick, onMouseEnter, onMouseLeave, children } = props;

  return (
    <div
      className={classnames(getStyle(props), 'up-badge', className)}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {text}
      {children}
    </div>
  );
};

UpBadge.defaultProps = {
  text: '',
  color: '#FFF',
  background: '#000',
  theme: defaultTheme,
  rounded: false,
  intent: null,
};

export { UpBadge };
export default withTheme<UpBadgeProps>(UpBadge);
