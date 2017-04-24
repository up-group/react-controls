// Imports
import * as React from 'react'
import UpLabel from '../../Display/Label/'
import {StyledRadioButton} from './styles'
import {UpRadioProps, Position} from './'

export default class UpRadio extends React.Component<UpRadioProps, any> {
  constructor(props) {
    super(props) ;
    this.state = {
        options : props.options
    };
  }
  componentWillUnmount() {

  }
  componentDidMount() {

  }

  public componentWillReceiveProps(nextProps: UpRadioProps) {
      if (nextProps.options !== this.props.options) {
          this.setState({options: nextProps.options });
      }
  }

  render() {
    const options = this.state.options ;
    /*const icon = <SvgIcon iconName={props.iconName}
          width={props.iconSize}
          height={props.iconSize}
          color={props.color} /> ;*/

    return (
      <div>
      {options.map((option) => (
        <StyledRadioButton onChange={option.onChange} key={`Key_${this.props.name}_${option.value}`} 
          name={this.props.name}
          checked={option.checked}
          text={option.text} value={option.value}>
        </StyledRadioButton>
      ))}
      </div>
    );
  }
}