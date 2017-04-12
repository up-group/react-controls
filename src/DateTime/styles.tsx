//import * as React from 'react'
//import styled, {css} from 'styled-components'
//import { UpDateTimeProps } from './types'

//const BaseDateComponent: React.StatelessComponent<UpDateTimeProps> = (props) => {
//    const {className} = props;

//    return <div className={className} style={{ marginBottom: "3px" }}>
//        <input
//            type='text'
//            className="form-control" />
//        <span className="input-group-addon">
//            <span className="glyphicon glyphicon-calendar"></span>
//        </span>
//    </div>;
//}

//const base = props => css`
//`;

//const error = props => css`
//>input {
//  border : 1px solid red;
//}
//`;

//export const BaseDateStyle = styled<UpDateTimeProps>(BaseDateComponent) `
//${(props: UpDateTimeProps) => base(props) }
//${(props: UpDateTimeProps) => props.hasError? error(props):css``}
//`;

//class UpDateTimeStyle extends React.Component<UpDateTimeProps, undefined> {
//  public static defaultProps: UpDateTimeProps = {
//    hasError: false,
//    onChange: (value?:Date) => {},
//    isNuallble: false,
//  };

//  public render() {
//    const {children, ...rest} = this.props ;
//    return (
//      <BaseDateStyle {...rest}>
//        {children}
//      </BaseDateStyle>
//    );
//  }
//}

//export default UpDateTimeStyle;
