import * as React from 'react'
import styled, {css} from 'styled-components';
import Props from './types';

const BaseDiv: React.StatelessComponent<Props> = (props) => {
    const { children, className } = props;

    return <div /*className={className}*/>
      <span></span>
      {children}
      </div>;
}

export const BoxStyles = css`
  display: flex;
  background-color: ${({ backgroundColor }: Props) => backgroundColor || 'transparent'};
  justify-content: ${({ justifyContent }: Props) => justifyContent || 'flex-start'};
  align-items: ${({ alignItems }: Props) => alignItems || 'flex-start'};
  flex-direction: ${({ flexDirection }: Props) => flexDirection || 'column'};
  flex-basis: auto;
  cursor: ${({ selectable }: Props) => selectable ? 'pointer' : 'inherit'};
  border: 1px solid black;
`;

export default styled.div`
  ${BoxStyles}
`;


export const ComplexStyledDiv = styled<Props>(BaseDiv) `
${BoxStyles}
`;