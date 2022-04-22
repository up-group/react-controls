import React from 'react';
import { getStyles } from './styles';
import classnames from 'classnames';
import { UpParagraphProps } from './types';

const UpParagraph: React.FunctionComponent<UpParagraphProps> = props => {
  const { children, className } = props;

  return <p className={classnames(getStyles(props), className)}>{children}</p>;
};

UpParagraph.defaultProps = {
  textAlign: 'left',
  margin: 'small',
  paragraphSize: 'small',
  color: '#000',
};

export default UpParagraph;
