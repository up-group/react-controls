import * as React from 'react'
//import styled, {css} from 'styled-components'
import { UpDateProps } from './'

// const error = props => css`
// > input {
//   border : 1px solid red;
// }
// `;

//${(props: UpDateProps) => props.hasError? error(props):css``}

export default class UpDateStyle extends React.Component<UpDateProps, undefined> {
  public static defaultProps: UpDateProps = {
    //hasError: false,
    //onChange: (value?:Date) => {},
    //isNullable: false,
    value:null
  };

  public render() {
    const {value, innerRef} = this.props ;
    return (
      <div className='input-group date' style={{ marginBottom: "3px" }}>
          <input
              value={value}
              ref={innerRef}
              type='text'
              className="form-control" />
          <span className="input-group-addon">
              <span className="glyphicon glyphicon-calendar"></span>
          </span>
      </div>
    );
  }
}