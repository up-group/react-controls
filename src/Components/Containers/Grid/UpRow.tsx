import * as React from 'react';
import * as classNames from 'classnames';
import * as assign from 'object-assign';
import { UpRowProps } from './types'
import { UpGridConsumer } from './UpGridContext';

const RowRenderer: React.FunctionComponent<UpRowProps> = (props) => {
    const { prefixCls, justify, align, className, style, children, type, gutter, rowSpacing, ...others } = props;

    const getRowStyle = /*React.useCallback(*/() => {
        return (gutter as number) > 0 ? assign({}, {
            marginLeft: (gutter as number) / -2,
            marginRight: (gutter as number) / -2
        }, style) : style;
    }/*, [gutter, style]) ;*/

    const getClasses = /*React.useCallback(*/() => {
        return classNames({
            [prefixCls]: type == 'float',
            [`${prefixCls}-flex`]: type == 'flex',
            [`${prefixCls}-flex-${justify}`]: type == 'flex' && justify,
            [`${prefixCls}-flex-${align}`]: type == 'flex' && align,
        }, className);
    }/*, [type, align, justify]);*/

    let cols = children;
    if (rowSpacing > 0 || type != 'float') {
        cols = React.Children.map(children, (row: React.ReactElement<UpRowProps>) => {
            if (!row) {
                return null;
            }
            if (row.props) {
                return React.cloneElement(row, {
                    rowSpacing: row.props.rowSpacing == 0 ? rowSpacing : row.props.gutter,
                    type: row.props.type ? row.props.type : row.props.type
                });
            }
            return row;
        });
    }

    return <div {...others} className={getClasses()} style={getRowStyle()}>{cols}</div>;
};

const UpRow: React.FunctionComponent<UpRowProps> = ({ gutter = 0, rowSpacing = 0, type = 'flex', prefixCls = 'up-row', ...rest }) => (
    <UpGridConsumer>
        {(value) => <RowRenderer gutter={gutter || value.gutter} rowSpacing={rowSpacing || value.rowSpacing} type={type || value.type} prefixCls={prefixCls} {...rest} />}
    </UpGridConsumer>
);

export default UpRow;