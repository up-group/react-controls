import React from 'react';
import { getStyles } from './styles';
import classnames from 'classnames';
import withTheme from '../../../Common/theming/withTheme';
import { UpLigneProps } from './types';

const UpLigne: React.FunctionComponent<UpLigneProps> = props => {
  const { dataFor, className, children, theme, ...others } = props;
  let tooltipProps = {};

  if (dataFor) {
    tooltipProps = {
      'data-tip': 'tooltip',
      'data-for': dataFor,
    };
  }

  return (
    <span className={classnames(className, getStyles(props))} {...tooltipProps} {...others}>
      {children}
    </span>
  );
};

export { UpLigne };
export default withTheme<UpLigneProps>(UpLigne);
