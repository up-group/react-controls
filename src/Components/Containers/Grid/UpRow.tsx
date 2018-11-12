import * as React from 'react';
import * as classNames from 'classnames';
import * as assign from 'object-assign';

import {UpRowProps} from './types'

export default class UpRow extends React.Component<UpRowProps, any> {
  static defaultProps = {
    gutter: 0,
    type:'flex'
  };

  render() {
    const { type, justify, align, className, gutter, style, children,
      prefixCls = 'up-row', ...others } = this.props;
    
    const classes = classNames({
      [prefixCls]: type=='float',
      [`${prefixCls}-flex`]: type=='flex',
      [`${prefixCls}-flex-${justify}`]: type=='flex' && justify,
      [`${prefixCls}-flex-${align}`]: type=='flex' && align,
    }, className);
    
    const rowStyle = (gutter as number) > 0 ? assign({}, {
      marginLeft: (gutter as number) / -2,
      marginRight: (gutter as number) / -2,
    }, style) : style;

    const cols = React.Children.map(children, (col: React.ReactElement<any>) => {
      if (!col) {
        return null;
      }
      if (col.props && (gutter as number) > 0) {
        return React.cloneElement(col, {
          style: assign({}, {
            paddingLeft: (gutter as number) / 2,
            paddingRight: (gutter as number) / 2,
          }, col.props.style),
        });
      }
      return col;
    });
    return <div {...others} className={classes} style={rowStyle}>{cols}</div>;
  }
}