// Imports 
import * as React from 'react';
import {Grid} from './styles'
import {LayoutMode} from './'
import * as classNames from 'classnames';
import * as assign from 'object-assign';

export interface UpGridProps {
    gutter?: number;
    type?: LayoutMode;
    style?: React.CSSProperties; // In order to set margin for example
}

export interface UpGridStyledProps {
    style?: React.CSSProperties; // In order to set margin for example
}

export default class UpGrid extends React.Component<UpGridProps, any> {
  
  public static defaultProps : UpGridProps = {
      gutter:0
  }

  render() {
    const { children, type, gutter } = this.props;
    var rows = children ;
    if(gutter > 0 || type != 'float') {
        rows = React.Children.map(children, (row: React.ReactElement<any>) => {
        if (!row) {
            return null;
        }
        if (row.props) {
            return React.cloneElement(row, {
                gutter: row.props.gutter==0 ? gutter : row.props.gutter,
                type: row.props.type? row.props.type : row.props.type
            });
        }
        return row;
        });
    }
    return (
        <Grid style={this.props.style}>
            {rows}
        </Grid>
    );
  }
}