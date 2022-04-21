import * as React from 'react';
import classnames from 'classnames';
import assign from 'object-assign';
import { UpColProps, ColSize } from './types';
import { UpGridConsumer } from './UpGridContext';

const ColRenderer: React.FunctionComponent<UpColProps & { gutter: number }> = props => {
  const {
    gutter,
    xs,
    sm,
    md,
    lg,
    xl,
    prefixCls,
    span,
    order,
    offset,
    push,
    pull,
    className,
    style,
    children,
    rowSpacing,
    ...others
  } = props;

  const getClasses = /*React.useCallback(*/ () => {
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

    return classnames(
      {
        [`${prefixCls}-${span}`]: span !== undefined,
        [`${prefixCls}-order-${order}`]: order,
        [`${prefixCls}-offset-${offset}`]: offset,
        [`${prefixCls}-push-${push}`]: push,
        [`${prefixCls}-pull-${pull}`]: pull,
      },
      className,
      sizeClassObj
    );
  }; /*, [xs, sm, md, lg, xl, className, pull, push, offset, order, span])*/

  const getStyle = /*React.useCallback(*/ () => {
    if ((gutter as number) > 0 || (rowSpacing as number) > 0) {
      return {
        paddingLeft: (gutter as number) / 2,
        paddingRight: (gutter as number) / 2,
        marginBottom: rowSpacing,
        ...style,
      };
    }
    return style;
  }; /*, [gutter, style])*/

  return (
    <div style={getStyle()} {...others} className={getClasses()}>
      {children}
    </div>
  );
};

const UpCol: React.FunctionComponent<UpColProps> = ({ prefixCls = 'up-col', rowSpacing, ...rest }) => (
  <UpGridConsumer>
    {value => (
      <ColRenderer gutter={value.gutter} rowSpacing={rowSpacing || value.rowSpacing} prefixCls={prefixCls} {...rest} />
    )}
  </UpGridConsumer>
);

export default UpCol;
