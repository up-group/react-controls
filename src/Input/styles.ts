import styled, {css} from 'styled-components';
import remStringFromPX from '../utils';
import { sizeMap } from './maps';
import { Props } from './';

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
    background-color: ${(props: Props) => props.borderColor};
  }
  &:hover {

  }
  $:blur {
    
  }
`

export const TextInputComponent = styled.input`
  ${inputStyles}
  background-color: ${(props: Props) => props.backgroundColor};
  color: ${(props: Props) => props.color};
  font-size: ${(props: Props) => remStringFromPX(sizeMap[props.fontSize])};
`;

export const EmailInputComponent = styled.input`
  ${inputStyles}
  background-color: ${(props: Props) => props.backgroundColor};
  color: ${(props: Props) => props.color};
  &:active {
    background-color: ${(props: Props) => props.borderColor};
  }
`;
