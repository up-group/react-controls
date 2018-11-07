// Imports 
import * as React from 'react';
import {UpGridProps} from './types'
import defaultTheme from '../../../Common/theming'
import { GridStyles } from './styles';
import withTheme, { WithThemeProps } from '../../../Common/theming/withTheme';

import * as classnames from 'classnames'

class UpGrid extends React.Component<UpGridProps & WithThemeProps> {
  
  public static defaultProps : UpGridProps & WithThemeProps = {
      gutter:0,
      theme:defaultTheme
  }

  render() {
    const { children, type, gutter, className } = this.props;
    var rows = children ;
    const _gutter = gutter != null ? gutter : (this.props.theme.gridGutter != null ? this.props.theme.gridGutter : 0) ;
    if(_gutter > 0 || type != 'float') {
       rows = React.Children.map(children, (row: React.ReactElement<any>) => {
       if (!row) {
           return null;
       }
       if (row.props) {
           return React.cloneElement(row, {
               gutter: row.props.gutter==0 ? _gutter : row.props.gutter,
               type: row.props.type? row.props.type : row.props.type
           });
       }
       return row;
       });
    }

    return (
        <div style={this.props.style} className={classnames(className, GridStyles)}>
            {rows}
        </div>
    );
  }
}

export default withTheme<UpGridProps>(UpGrid) 
