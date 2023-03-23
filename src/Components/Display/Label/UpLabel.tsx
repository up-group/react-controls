import React from 'react';
import { UpLabelProps } from './types';
import { getStyles } from './styles';
import { RequiredMark } from '../../Inputs/Input/UpInput';

const UpLabel: React.FC<UpLabelProps> = props => {
  const {
    inline,
    children,
    text = '',
    disabled = false,
    required = false,
    textAlign = 'left',
    color = '#7f8fa4',
    ...others
  } = props;

  // Fix double focus with the blueprint datepicker.
  const onFocus = e => {
    e.preventDefault();
    return false;
  };

  const onClick = e => {
    e.preventDefault();
    return false;
  };
  // End Fix

  return (
    <label className={getStyles(props)} onFocus={onFocus} onClick={onClick} {...others}>
      {text && (
        <span className="up-label-text">
          {text}
          {required && (
            <RequiredMark
              markStyle={{
                position: 'absolute',
                top: '4px',
                marginLeft: '4px',
              }}
            />
          )}
        </span>
      )}
      {children}
    </label>
  );
};

export default UpLabel;
