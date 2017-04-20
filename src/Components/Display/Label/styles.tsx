import * as React from 'react'

import styled, {css} from '../../../Common/theming/themedComponents';
import { Props } from './types';

const BaseLabel : React.StatelessComponent<Props> = (props) => {
    
    return (
      <div className={props.className}>
        <label className="up-label">
          <span className="up-label-text">{props.text}</span>
        </label>  
      </div>);
}

// Shared styles for Input
const labelStyles = css`
display:inline-block;
label.pt-label {
  display: block;
  margin: 0 0 15px;
   }
  label.pt-label .pt-input,
  label.pt-label .pt-select {
    display: block;
    margin-top: 5px;
    text-transform: none; }
  label.pt-label .pt-select select {
    width: 100%;
    vertical-align: top;
    font-weight: 400; }
  label.pt-label.pt-inline {
    line-height: 30px; }
    label.pt-label.pt-inline .pt-input,
    label.pt-label.pt-inline .pt-input-group,
    label.pt-label.pt-inline .pt-select {
      display: inline-block;
      margin: 0 0 0 5px;
      vertical-align: top; }
    label.pt-label.pt-inline .pt-input-group .pt-input {
      margin-left: 0; }
    label.pt-label.pt-inline.pt-large {
      line-height: 40px; }
  label.pt-label.pt-disabled,
  label.pt-label.pt-disabled .pt-text-muted {
    color: rgba(92, 112, 128, 0.5); }
  .pt-dark label.pt-label {
    color: #f5f8fa; }
    .pt-dark label.pt-label.pt-disabled,
    .pt-dark label.pt-label.pt-disabled .pt-text-muted {
      color: rgba(191, 204, 214, 0.5); }
`

export const LabelStyled = styled<Props>(BaseLabel)`
  ${labelStyles}
`;