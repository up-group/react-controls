import * as React from 'react';
import * as classNames from 'classnames';
import * as assign from 'object-assign';

import {UpRowProps} from './types'
import { UpGridConsumer } from './UpGridContext';
import { j } from 'Components/Display/Icons/materialinear';

const UpRow : React.FunctionComponent<UpRowProps> = ({ gutter = 0, type = "flex", prefixCls = 'up-row', ...rest}) => {
  const { justify, align, className, style, children, ...others } = rest;
  
  const getRowStyle = React.useCallback((gutter, style) => {
    return  (gutter as number) > 0 ? assign({}, {
      marginLeft: (gutter as number) / -2,
      marginRight: (gutter as number) / -2,
    }, style) : style;
  }, [gutter, style]) ;
  
  const getClasses = React.useCallback((type, align, justify) => {
    return classNames({
      [prefixCls]: type=='float',
      [`${prefixCls}-flex`]: type=='flex',
      [`${prefixCls}-flex-${justify}`]: type=='flex' && justify,
      [`${prefixCls}-flex-${align}`]: type=='flex' && align,
    }, className);
  }, [type,align, justify]);

  return <UpGridConsumer>
      {(value) => {
        return <div {...others} className={getClasses(type || value.type, align, justify)} style={getRowStyle(gutter || value.gutter, style)}>{children}</div>
      }}
      </UpGridConsumer>
}

export default UpRow ;