// Imports 
import * as React from 'react';
//import {Grid} from './styles'
import {UpGridProps, LayoutMode} from './'
import * as classNames from 'classnames'
import * as assign from 'object-assign'

class UpGrid extends React.Component<UpGridProps, any> {
  
  public static defaultProps : UpGridProps = {
      gutter:0,
      //theme:defaultTheme
  }

  render() {
    const { children, type, gutter } = this.props;
    var rows = children ;
    //const _gutter = gutter != null ? gutter : (this.props.theme.gridGutter != null ? this.props.theme.gridGutter : 0) ;
    //if(_gutter > 0 || type != 'float') {
    //    rows = React.Children.map(children, (row: React.ReactElement<any>) => {
    //    if (!row) {
    //        return null;
    //    }
    //    if (row.props) {
    //        return React.cloneElement(row, {
    //            gutter: row.props.gutter==0 ? _gutter : row.props.gutter,
    //            type: row.props.type? row.props.type : row.props.type
    //        });
    //    }
    //    return row;
    //    });
    //}
    return (
        <div style={this.props.style}>
            {rows}
        </div>
    );
  }
}

export default UpGrid