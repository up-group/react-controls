import * as React from 'react'
import {Grid} from './styles'

export interface GridProps {
}

export default class UpGrid extends React.Component<GridProps, any> {
  
  render() {
    return <Grid>{this.props.children}</Grid>;
  }
}