import * as React from 'react';
import { getStyles } from './styles';
import { UpButtonGroupProps } from './types';

const UpButtonGroup: React.FunctionComponent<UpButtonGroupProps> = props => {
  const { children, align, gutter, isAddOn, ...others } = props;

  return (
    <div {...others} className={getStyles(props)}>
      {children}
    </div>
  );
};

UpButtonGroup.defaultProps = {
  gutter: 17,
  align: 'h',
};

export default UpButtonGroup;
