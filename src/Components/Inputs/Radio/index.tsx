import * as React from 'react'
import UpLabel from '../../Display/Label/'
import {Position} from './types'
import {StyledRadioButton} from './styles'

export interface Option {
    value:any;
    text?:string;
    iconName?:string;
    onChange?:(e:any) => void;
    name?:string;
    checked:boolean;
}

export interface StyledProps extends Option {
    className?:string;
}

export interface Props {
    options: Array<Option>;
    position?:Position;
    name:string;
    value:any;
}

export default class UpCheckbox extends React.Component<Props, {}> {
  constructor(props) {
    super(props) ;
  }
  componentWillUnmount() {

  }
  componentDidMount() {

  }
  render() {
    const options = this.props.options ;
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