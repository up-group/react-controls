import * as React from 'react'
//import styled, {css} from 'styled-components'
import { UpDateProps } from './'
import { TextInputComponent } from '../Input/styles'

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
        //value:null
    };

    public render() {
        const { innerRef} = this.props;
        return (
            <div style={{ position: "relative", marginBottom: "3px" }}>
                <TextInputComponent
                    innerRef={innerRef} />
                <span className="input-group-addon">
                    <span className="glyphicon glyphicon-calendar"></span>
                </span>
            </div>
        );
    }
}