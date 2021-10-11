import * as React from 'react';
import { UpGridProps, UpRowProps } from './types'
import defaultTheme from '../../../Common/theming'
import { GridStyles } from './styles';
import withTheme, { WithThemeProps } from '../../../Common/theming/withTheme';
import classnames from 'classnames'
import { UpGridProvider } from './UpGridContext';

const UpGrid: React.FunctionComponent<UpGridProps & WithThemeProps> = ({ gutter = 0, fullRowLayout = false, rowSpacing = 0, type = "flex", theme = defaultTheme, ...rest }) => {
    const { children, className, style } = rest;
    let rows = children;

    const _gutter = gutter != null ? gutter : (theme.gridGutter != null ? theme.gridGutter : 0);
    const _rowSpacing = rowSpacing != null ? rowSpacing : (theme.gridRowSpacing != null ? theme.gridRowSpacing : 0);

    if (_gutter > 0 || type != 'float') {
        rows = React.Children.map(children, (row: React.ReactElement<UpRowProps>, index: number) => {
            if (!row) {
                return null;
            }
            if (row.props) {
                return <React.Fragment key={index}>
                    {React.cloneElement(row, {
                    gutter: row.props.gutter == 0 ? _gutter : row.props.gutter,
                    type:  row.props.type
                    })}</React.Fragment>
            }
            return row;
        });
    }

    return (
        <UpGridProvider value={{ gutter: _gutter, rowSpacing: _rowSpacing, type, fullRowLayout }} >
            <div style={style} className={classnames(className, GridStyles)}>
                {rows}
            </div>
        </UpGridProvider>
    );
};

export { UpGrid };
export default withTheme<UpGridProps>(UpGrid);
