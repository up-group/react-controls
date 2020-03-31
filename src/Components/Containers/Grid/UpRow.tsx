import * as React from 'react';
import * as classNames from 'classnames';
import * as assign from 'object-assign';

import {UpRowProps} from './types'
import { UpGridConsumer } from './UpGridContext';
import { j } from 'Components/Display/Icons/materialinear';
import { isPropsEqual } from '@fullcalendar/core';

const RowRenderer : React.FunctionComponent<UpRowProps> = (props) => {
  const { prefixCls, justify, align, className, style, children, type, gutter, ...others } = props;
  const getRowStyle = /*React.useCallback(*/() => {
    return  (gutter as number) > 0 ? assign({}, {
      marginLeft: (gutter as number) / -2,
      marginRight: (gutter as number) / -2,
    }, style) : style;
   }/*, [gutter, style]) ;*/
  const getClasses = /*React.useCallback(*/() => {
    return classNames({
      [prefixCls]: type=='float',
      [`${prefixCls}-flex`]: type=='flex',
      [`${prefixCls}-flex-${justify}`]: type=='flex' && justify,
      [`${prefixCls}-flex-${align}`]: type=='flex' && align,
    }, className);
  }/*, [type, align, justify]);*/

  return <div {...others} className={getClasses()} style={getRowStyle()}>{children}</div>
}

const UpRow : React.FunctionComponent<UpRowProps> = ({ gutter = 0, type = "flex", prefixCls = 'up-row', ...rest}) => {
  return <UpGridConsumer>
      {(value) => <RowRenderer gutter={gutter || value.gutter} type={type || value.type} prefixCls={prefixCls} {...rest} />}
      </UpGridConsumer>
}

export default UpRow ;