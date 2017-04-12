import * as React from 'react'
import styled, {css} from 'styled-components'
import { UpDateProps } from './'

const BaseDateComponent: React.StatelessComponent<UpDateProps> = (props) => {
    const {} = props;

    return <div className='input-group date' style={{ marginBottom: "3px" }}>
        <input
            type='text'
            className="form-control" />
        <span className="input-group-addon">
            <span className="glyphicon glyphicon-calendar"></span>
        </span>
    </div>;
}

const base = props => css`
`;

// const error = props => css`
// > input {
//   border : 1px solid red;
// }
// `;

export const BaseDateStyle = styled<UpDateProps>(BaseDateComponent) `
${(props: UpDateProps) => base(props) }
`;
//${(props: UpDateProps) => props.hasError? error(props):css``}

class UpDateStyle extends React.Component<UpDateProps, undefined> {
  public static defaultProps: UpDateProps = {
    //hasError: false,
   // onChange: (value?:Date) => {},
    //isNuallble: false,
  };

  public render() {
    const {children, ...rest} = this.props ;
    return (
      <BaseDateStyle {...rest}>
        {children}
      </BaseDateStyle>
    );
  }
}

export default UpDateStyle;
