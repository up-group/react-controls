// Imports
import * as React from 'react'
import UpLabel from '../../Display/Label/'
import {StyledRadioButton, RadioGroup} from './styles'
import {UpRadioProps, UpRadioState, Position} from './'

// Exports
export default class UpRadio extends React.Component<UpRadioProps, UpRadioState> {
  
    public static defaultProps: UpRadioProps = {
        displayMode:"vertical",
        options:[],
        name:"option"
    }

    constructor(props) {
        super(props) ;
        this.state = {
            value : (props.value!==undefined)?props.value:null,
            options : props.options
        };
    }

  componentWillReceiveProps(nextProps: UpRadioProps) {
      var _state: UpRadioState = {} ;
      if (nextProps.options !== this.props.options) {
          _state.options = nextProps.options ;
      }
      if (nextProps.value !== undefined && nextProps.value!==this.props.value) {
          _state.value = nextProps.value ;
      }
      if(_state !== {}) {
        this.setState(_state);
      }
  }
  
  stopPropagation = (event) => {
    event.stopPropagation() ;
  }

  getValue = (event: any) => {
      return event.target.value ;
  }

  public handleChangeEvent = (event) => {
      var cleanData = this.getValue(event);
      var propsValue = this.props.value;
      if(propsValue !== undefined) {
          this.dispatchOnChange(cleanData, event, null)
      } else {
          this.setState({ value: cleanData }, this.afterSetState);
      }
  }
  
  private afterSetState = () => {
      this.dispatchOnChange(this.state.value) ;
  }

  public dispatchOnChange = (data: any, event?, error?: boolean) => {
      if (this.props.onChange !== undefined) {
          this.props.onChange(data, event, error);
      }
  }
  
  render() {
    const options = this.state.options ;
    /*const icon = <SvgIcon iconName={props.iconName}
          width={props.iconSize}
          height={props.iconSize}
          color={props.color} /> ;*/
    var radioGroupClass = "upContainer__groupradio-" + this.props.displayMode ;

    return (
      <RadioGroup onClick={this.stopPropagation} className={radioGroupClass} >
        {/* Avoid set active element when using the component inside a label */}
        <label style={{display:"none"}}><input type="radio" /></label>
        {options.map((option) => (
          <StyledRadioButton onChange={this.handleChangeEvent} key={`Key_${this.props.name}_${option.value}`} 
            name={this.props.name}
            checked={this.state.value != null && this.state.value === option.value}
            text={option.text} 
            value={option.value}>
          </StyledRadioButton>
        ))}
      </RadioGroup>
    );
  }
}