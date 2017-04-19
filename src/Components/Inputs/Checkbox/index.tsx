import * as React from 'react'
import UpLabel from '../../Display/Label/index'
import {Position} from './types'
import {StyledCheckBox} from './styles'

export interface Option {
    name:string;
    value:any;
    text?:string;
    iconName?:string;
    onChange?:(e:any) => void;
    checked:boolean;
}

export interface StyledProps extends Option {
    className?:string;
}

export interface Props {
    options: Array<Option>;
    position?:Position;
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
        <StyledCheckBox 
          onChange={option.onChange} 
          key={`Key_${option.name}_${option.value}`} 
          text={option.text} name={option.name} 
          value={option.value}
          checked={option.checked}>
        </StyledCheckBox>
      ))}
      </div>
    );
  }
}