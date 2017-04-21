import * as React from 'react'
import styled, {css} from '../../../Common/theming/themedComponents';

import { UpFileStyleProps } from './'
import { ThemeInterface } from "../../../Common/theming/types";

const BaseFileComponent: React.StatelessComponent<UpFileStyleProps> = (props) => {
    const {className} = props;
    return <input
        className={className}
        type="file"
        accept={props.fileExtension}
        onChange={props.onChange}
    />;
}

const base = props => css`
`;

const error = props => css`
  border : 1px solid red;
`;

export const BaseFileStyle = styled<UpFileStyleProps>(BaseFileComponent) `
${(props: UpFileStyleProps) => base(props) }
${(props: UpFileStyleProps) => props.hasError? error(props):css``}
`;

class UpFileStyle extends React.Component<UpFileStyleProps, undefined> {
  public static defaultProps: UpFileStyleProps = {
    hasError: false,
    fileExtension : "*",
    onChange: (value:any) => {}
  };

  public render() {
    const {children, ...others} = this.props ;
    return (
      <BaseFileStyle {...others}>
        {children}
      </BaseFileStyle>
    );
  }
}

export default UpFileStyle;
