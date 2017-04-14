import styled, { css } from 'styled-components';
import remStringFromPX from '../../utils';

export type Size = 'medium' | 'xx-small' | 'x-small' | 'small' | 'large' | 'x-large' | 'xx-large' | 'smaller' | 'larger'

export interface StyleProps  {
    hasError?: boolean;
    color?: string;
    backgroundColor?: string;
    fontSize?: Size;
    borderColor?: string;
    isNullable?: boolean;
}

// Shared styles for Input
const inputStyles = css`
  outline: none;
  border: none;
  border-radius: 3px;
  box-shadow: 0 0 0 0 rgba(19, 124, 189, 0), 0 0 0 0 rgba(19, 124, 189, 0), inset 0 0 0 1px rgba(16, 22, 26, 0.15), inset 0 1px 1px rgba(16, 22, 26, 0.2);
  height: 30px;
  padding: 0 10px;
  vertical-align: middle;
  line-height: 30px;
  font-size: 14px;
  font-weight: 400;
  transition: box-shadow 100ms cubic-bezier(0.4, 1, 0.75, 0.9);
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  &:active {
    background-color: ${(props: StyleProps) => props.borderColor};
  }
  &:hover {

  }
  $:blur {
    
  }
`

export const TextInputComponent = styled.input`
  ${inputStyles}
  background-color: ${(props: StyleProps) => props.backgroundColor};
  color: ${(props: StyleProps) => props.color};
  font-size: ${(props: StyleProps) => props.fontSize};
  border: solid 1px ${(props: StyleProps) => props.hasError ? 'red': 'initial'};
`;

