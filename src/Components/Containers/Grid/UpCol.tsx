import * as React from 'react';
import * as classNames from 'classnames';
import * as assign from 'object-assign';

import {UpColProps, ColSize} from './'

export default class UpCol extends React.Component<UpColProps, any> {
  
  render() {
    const props = this.props;
    const { span, order, offset, xs, sm, md, lg, xl, push, pull, className, children, prefixCls = 'up-col', ...others } = props;
    let sizeClassObj = {};
    ['xs', 'sm', 'md', 'lg', 'xl'].forEach(size => {
      let sizeProps: ColSize = {};
      if (typeof props[size] === 'number') {
        sizeProps.span = props[size];
      } else if (typeof props[size] === 'object') {
        sizeProps = props[size] || {};
      }

      sizeClassObj = assign({}, sizeClassObj, {
        [`${prefixCls}-${size}-${sizeProps.span}`]: sizeProps.span !== undefined,
        [`${prefixCls}-${size}-order-${sizeProps.order}`]: sizeProps.order || sizeProps.order === 0,
        [`${prefixCls}-${size}-offset-${sizeProps.offset}`]: sizeProps.offset || sizeProps.offset === 0,
        [`${prefixCls}-${size}-push-${sizeProps.push}`]: sizeProps.push || sizeProps.push === 0,
        [`${prefixCls}-${size}-pull-${sizeProps.pull}`]: sizeProps.pull || sizeProps.pull === 0,
      });
    });
    
    const classes = classNames({
      [`${prefixCls}-${span}`]: span !== undefined,
      [`${prefixCls}-order-${order}`]: order,
      [`${prefixCls}-offset-${offset}`]: offset,
      [`${prefixCls}-push-${push}`]: push,
      [`${prefixCls}-pull-${pull}`]: pull,
    }, className, sizeClassObj);

    return <div {...others} className={classes}>{children}</div>;
  }
}