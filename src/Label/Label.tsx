import * as React from 'react';
import {Props} from './types'
import "@blueprintjs/core/dist/blueprint.css"

import { LabelStyled } from './styles';

export default class Label extends React.Component<Props, {}> {
  
  public static defaultProps = {
    text:'',
    disabled:false
  }

  constructor(props) {
    super(props) ;
  }
  
  componentWillUnmount() {
  }

  componentDidMount() {
  }
  render() {
      return <LabelStyled {...this.props} />
  }
}
