import * as React from 'react'
import styled, {css} from 'styled-components';
import { sizeMap } from './maps';
import { StyledProps } from './';
import SvgIcon from '../SvgIcon';

const BaseInput: React.StatelessComponent<StyledProps> = (props) => {
    const { className, type, iconName, placeholder, disabled, readOnly, onChange } = props;

    var icon:any = "" ;
    if(iconName) {
      icon = <div className="up-icon">
              <SvgIcon iconName={iconName}
          width={20}
          height={20}
          color={props.color} />
          </div> ;
    }
    //return (<div className={cn(className, 'input-form-content')}>
    return (<div className={className}>
              <div className="up-input-group">
                <input onChange={onChange} className="up-input" type={type} placeholder={placeholder} dir="auto" disabled={disabled} readOnly={readOnly} />
                {icon}
              </div>
            </div>);
}

export const DefaultInputStyle = css`
  outline: none;
  border: none;
  border-radius: 3px;
  box-shadow: 0 0 0 0 rgba(19, 124, 189, 0), 0 0 0 0 rgba(19, 124, 189, 0), inset 0 0 0 1px rgba(16, 22, 26, 0.15), inset 0 1px 1px rgba(16, 22, 26, 0.2);
  background: #ffffff;
  height: 30px;
  padding: 0 10px;
  vertical-align: middle;
  line-height: 30px;
  color: #182026;
  font-size: 14px;
  font-weight: 400;
  transition: box-shadow 100ms cubic-bezier(0.4, 1, 0.75, 0.9);
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
`


// Shared styles for Input
const inputStyles = css`
.up-input {
  ${(props) => DefaultInputStyle}
 }
  .up-input::-webkit-input-placeholder {
    opacity: 1;
    color: rgba(92, 112, 128, 0.5); }
  .up-input::-moz-placeholder {
    opacity: 1;
    color: rgba(92, 112, 128, 0.5); }
  .up-input:-ms-input-placeholder {
    opacity: 1;
    color: rgba(92, 112, 128, 0.5); }
  .up-input::placeholder {
    opacity: 1;
    color: rgba(92, 112, 128, 0.5); }
  .up-input:focus {
    box-shadow: 0 0 0 1px #137cbd, 0 0 0 3px rgba(19, 124, 189, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.2); }
  .up-input[type="search"], .up-input.up-round {
    border-radius: 30px;
    -moz-box-sizing: border-box;
         box-sizing: border-box;
    padding-left: 10px; }
  .up-input[readonly] {
    box-shadow: inset 0 0 0 1px rgba(16, 22, 26, 0.15); }
  .up-input:disabled, .up-input.up-disabled {
    box-shadow: none;
    background: rgba(206, 217, 224, 0.5);
    cursor: not-allowed;
    color: rgba(92, 112, 128, 0.5);
    resize: none; }
  .up-dark .up-input {
    box-shadow: 0 0 0 0 rgba(19, 124, 189, 0), 0 0 0 0 rgba(19, 124, 189, 0), 0 0 0 0 rgba(19, 124, 189, 0), inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4);
    background: rgba(16, 22, 26, 0.3);
    color: #f5f8fa; }
    .up-dark .up-input::-webkit-input-placeholder {
      color: rgba(191, 204, 214, 0.5); }
    .up-dark .up-input::-moz-placeholder {
      color: rgba(191, 204, 214, 0.5); }
    .up-dark .up-input:-ms-input-placeholder {
      color: rgba(191, 204, 214, 0.5); }
    .up-dark .up-input::placeholder {
      color: rgba(191, 204, 214, 0.5); }
    .up-dark .up-input:focus {
      box-shadow: 0 0 0 1px #137cbd, 0 0 0 1px #137cbd, 0 0 0 3px rgba(19, 124, 189, 0.3), inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4); }
    .up-dark .up-input[readonly] {
      box-shadow: inset 0 0 0 1px rgba(16, 22, 26, 0.4); }
    .up-dark .up-input:disabled, .up-dark .up-input.up-disabled {
      box-shadow: none;
      background: rgba(57, 75, 89, 0.5);
      color: rgba(191, 204, 214, 0.5); }
  .up-input.up-intent-primary {
    box-shadow: 0 0 0 0 rgba(19, 124, 189, 0), 0 0 0 0 rgba(19, 124, 189, 0), inset 0 0 0 1px #137cbd, inset 0 0 0 1px rgba(16, 22, 26, 0.15), inset 0 1px 1px rgba(16, 22, 26, 0.2); }
    .up-input.up-intent-primary:focus {
      box-shadow: 0 0 0 1px #137cbd, 0 0 0 3px rgba(19, 124, 189, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.2); }
    .up-input.up-intent-primary[readonly] {
      box-shadow: inset 0 0 0 1px #137cbd; }
    .up-input.up-intent-primary:disabled, .up-input.up-intent-primary.up-disabled {
      box-shadow: none; }
    .up-dark .up-input.up-intent-primary {
      box-shadow: 0 0 0 0 rgba(19, 124, 189, 0), 0 0 0 0 rgba(19, 124, 189, 0), 0 0 0 0 rgba(19, 124, 189, 0), inset 0 0 0 1px #137cbd, inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4); }
      .up-dark .up-input.up-intent-primary:focus {
        box-shadow: 0 0 0 1px #137cbd, 0 0 0 1px #137cbd, 0 0 0 3px rgba(19, 124, 189, 0.3), inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4); }
      .up-dark .up-input.up-intent-primary[readonly] {
        box-shadow: inset 0 0 0 1px #137cbd; }
      .up-dark .up-input.up-intent-primary:disabled, .up-dark .up-input.up-intent-primary.up-disabled {
        box-shadow: none; }
  .up-input.up-intent-success {
    box-shadow: 0 0 0 0 rgba(15, 153, 96, 0), 0 0 0 0 rgba(15, 153, 96, 0), inset 0 0 0 1px #0f9960, inset 0 0 0 1px rgba(16, 22, 26, 0.15), inset 0 1px 1px rgba(16, 22, 26, 0.2); }
    .up-input.up-intent-success:focus {
      box-shadow: 0 0 0 1px #0f9960, 0 0 0 3px rgba(15, 153, 96, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.2); }
    .up-input.up-intent-success[readonly] {
      box-shadow: inset 0 0 0 1px #0f9960; }
    .up-input.up-intent-success:disabled, .up-input.up-intent-success.up-disabled {
      box-shadow: none; }
    .up-dark .up-input.up-intent-success {
      box-shadow: 0 0 0 0 rgba(15, 153, 96, 0), 0 0 0 0 rgba(15, 153, 96, 0), 0 0 0 0 rgba(15, 153, 96, 0), inset 0 0 0 1px #0f9960, inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4); }
      .up-dark .up-input.up-intent-success:focus {
        box-shadow: 0 0 0 1px #0f9960, 0 0 0 1px #0f9960, 0 0 0 3px rgba(15, 153, 96, 0.3), inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4); }
      .up-dark .up-input.up-intent-success[readonly] {
        box-shadow: inset 0 0 0 1px #0f9960; }
      .up-dark .up-input.up-intent-success:disabled, .up-dark .up-input.up-intent-success.up-disabled {
        box-shadow: none; }
  .up-input.up-intent-warning {
    box-shadow: 0 0 0 0 rgba(217, 130, 43, 0), 0 0 0 0 rgba(217, 130, 43, 0), inset 0 0 0 1px #d9822b, inset 0 0 0 1px rgba(16, 22, 26, 0.15), inset 0 1px 1px rgba(16, 22, 26, 0.2); }
    .up-input.up-intent-warning:focus {
      box-shadow: 0 0 0 1px #d9822b, 0 0 0 3px rgba(217, 130, 43, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.2); }
    .up-input.up-intent-warning[readonly] {
      box-shadow: inset 0 0 0 1px #d9822b; }
    .up-input.up-intent-warning:disabled, .up-input.up-intent-warning.up-disabled {
      box-shadow: none; }
    .up-dark .up-input.up-intent-warning {
      box-shadow: 0 0 0 0 rgba(217, 130, 43, 0), 0 0 0 0 rgba(217, 130, 43, 0), 0 0 0 0 rgba(217, 130, 43, 0), inset 0 0 0 1px #d9822b, inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4); }
      .up-dark .up-input.up-intent-warning:focus {
        box-shadow: 0 0 0 1px #d9822b, 0 0 0 1px #d9822b, 0 0 0 3px rgba(217, 130, 43, 0.3), inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4); }
      .up-dark .up-input.up-intent-warning[readonly] {
        box-shadow: inset 0 0 0 1px #d9822b; }
      .up-dark .up-input.up-intent-warning:disabled, .up-dark .up-input.up-intent-warning.up-disabled {
        box-shadow: none; }
  .up-input.up-intent-danger {
    box-shadow: 0 0 0 0 rgba(219, 55, 55, 0), 0 0 0 0 rgba(219, 55, 55, 0), inset 0 0 0 1px #db3737, inset 0 0 0 1px rgba(16, 22, 26, 0.15), inset 0 1px 1px rgba(16, 22, 26, 0.2); }
    .up-input.up-intent-danger:focus {
      box-shadow: 0 0 0 1px #db3737, 0 0 0 3px rgba(219, 55, 55, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.2); }
    .up-input.up-intent-danger[readonly] {
      box-shadow: inset 0 0 0 1px #db3737; }
    .up-input.up-intent-danger:disabled, .up-input.up-intent-danger.up-disabled {
      box-shadow: none; }
    .up-dark .up-input.up-intent-danger {
      box-shadow: 0 0 0 0 rgba(219, 55, 55, 0), 0 0 0 0 rgba(219, 55, 55, 0), 0 0 0 0 rgba(219, 55, 55, 0), inset 0 0 0 1px #db3737, inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4); }
      .up-dark .up-input.up-intent-danger:focus {
        box-shadow: 0 0 0 1px #db3737, 0 0 0 1px #db3737, 0 0 0 3px rgba(219, 55, 55, 0.3), inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4); }
      .up-dark .up-input.up-intent-danger[readonly] {
        box-shadow: inset 0 0 0 1px #db3737; }
      .up-dark .up-input.up-intent-danger:disabled, .up-dark .up-input.up-intent-danger.up-disabled {
        box-shadow: none; }
  .up-input::-ms-clear {
    display: none; 
  }
.up-input-group {
  display: block;
  position: relative; }
  .up-input-group .up-input {
    position: relative;
  }
    .up-input-group .up-input:not(:first-child) {
      padding-left: 30px; }
    .up-input-group .up-input:not(:last-child) {
      padding-right: 30px; }
  .up-input-group .up-input-action,
  .up-input-group > .up-button,
  .up-input-group > .up-icon {
    position: absolute;
    top: 0; }
    .up-input-group .up-input-action:first-child,
    .up-input-group > .up-button:first-child,
    .up-input-group > .up-icon:first-child {
      left: 0; }
    .up-input-group .up-input-action:last-child,
    .up-input-group > .up-button:last-child,
    .up-input-group > .up-icon:last-child {
      right: 0; }
  .up-input-group .up-button {
    min-width: 24px;
    min-height: 24px;
    line-height: 24px;
    margin: 3px;
    padding-top: 0;
    padding-bottom: 0; }
  .up-input-group .up-icon {
    line-height: 1;
    font-family: "Icons16", sans-serif;
    font-size: 16px;
    font-weight: 400;
    font-style: normal;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    z-index: 1;
    margin: 0 7px;
    line-height: 30px;
    color: #5c7080; }
  .up-input-group .up-spinner {
    margin: 3px; }
  .up-input-group .up-tag {
    margin: 5px; }
  .up-input-group .up-input:not(:focus) + .up-button.up-minimal:not(:hover):not(:focus),
  .up-input-group .up-input:not(:focus) + .up-input-action .up-button.up-minimal:not(:hover):not(:focus) {
    color: #5c7080; }
    .up-dark .up-input-group .up-input:not(:focus) + .up-button.up-minimal:not(:hover):not(:focus), .up-dark
    .up-input-group .up-input:not(:focus) + .up-input-action .up-button.up-minimal:not(:hover):not(:focus) {
      color: #bfccd6; }
    .up-input-group .up-input:not(:focus) + .up-button.up-minimal:not(:hover):not(:focus) .up-icon, .up-input-group .up-input:not(:focus) + .up-button.up-minimal:not(:hover):not(:focus) .up-icon-standard, .up-input-group .up-input:not(:focus) + .up-button.up-minimal:not(:hover):not(:focus) .up-icon-large,
    .up-input-group .up-input:not(:focus) + .up-input-action .up-button.up-minimal:not(:hover):not(:focus) .up-icon,
    .up-input-group .up-input:not(:focus) + .up-input-action .up-button.up-minimal:not(:hover):not(:focus) .up-icon-standard,
    .up-input-group .up-input:not(:focus) + .up-input-action .up-button.up-minimal:not(:hover):not(:focus) .up-icon-large {
      color: #5c7080; }
  .up-input-group .up-input:not(:focus) + .up-button.up-minimal:disabled,
  .up-input-group .up-input:not(:focus) + .up-input-action .up-button.up-minimal:disabled {
    color: rgba(92, 112, 128, 0.5) !important; }
    .up-input-group .up-input:not(:focus) + .up-button.up-minimal:disabled .up-icon, .up-input-group .up-input:not(:focus) + .up-button.up-minimal:disabled .up-icon-standard, .up-input-group .up-input:not(:focus) + .up-button.up-minimal:disabled .up-icon-large,
    .up-input-group .up-input:not(:focus) + .up-input-action .up-button.up-minimal:disabled .up-icon,
    .up-input-group .up-input:not(:focus) + .up-input-action .up-button.up-minimal:disabled .up-icon-standard,
    .up-input-group .up-input:not(:focus) + .up-input-action .up-button.up-minimal:disabled .up-icon-large {
      color: rgba(92, 112, 128, 0.5) !important; }
  .up-input-group.up-disabled {
    cursor: not-allowed; }
    .up-input-group.up-disabled .up-icon {
      color: rgba(92, 112, 128, 0.5); }
  .up-input-group.up-large .up-button {
    min-width: 30px;
    min-height: 30px;
    line-height: 30px;
    margin: 5px;
    line-height: 0; }
  .up-input-group.up-large .up-icon {
    margin: 0 12px;
    line-height: 40px; }
  .up-input-group.up-large .up-input {
    height: 40px;
    line-height: 40px;
    font-size: 16px; }
    .up-input-group.up-large .up-input[type="search"], .up-input-group.up-large .up-input.up-round {
      padding: 0 15px; }
    .up-input-group.up-large .up-input:not(:first-child) {
      padding-left: 40px; }
    .up-input-group.up-large .up-input:not(:last-child) {
      padding-right: 40px; }
  .up-input-group.up-large .up-spinner {
    margin: 8px; }
  .up-input-group.up-round .up-button,
  .up-input-group.up-round .up-input,
  .up-input-group.up-round .up-tag {
    border-radius: 30px; }
  .up-dark .up-input-group .up-icon {
    color: #bfccd6; }
  .up-dark .up-input-group.up-disabled .up-icon {
    color: rgba(191, 204, 214, 0.5); }
  .up-input-group.up-intent-primary .up-input {
    box-shadow: 0 0 0 0 rgba(19, 124, 189, 0), 0 0 0 0 rgba(19, 124, 189, 0), inset 0 0 0 1px #137cbd, inset 0 0 0 1px rgba(16, 22, 26, 0.15), inset 0 1px 1px rgba(16, 22, 26, 0.2); }
    .up-input-group.up-intent-primary .up-input:focus {
      box-shadow: 0 0 0 1px #137cbd, 0 0 0 3px rgba(19, 124, 189, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.2); }
    .up-input-group.up-intent-primary .up-input[readonly] {
      box-shadow: inset 0 0 0 1px #137cbd; }
    .up-input-group.up-intent-primary .up-input:disabled, .up-input-group.up-intent-primary .up-input.up-disabled {
      box-shadow: none; }
  .up-input-group.up-intent-primary .up-icon {
    color: #106ba3; }
    .up-dark .up-input-group.up-intent-primary .up-icon {
      color: #48aff0; }
  .up-input-group.up-intent-success .up-input {
    box-shadow: 0 0 0 0 rgba(15, 153, 96, 0), 0 0 0 0 rgba(15, 153, 96, 0), inset 0 0 0 1px #0f9960, inset 0 0 0 1px rgba(16, 22, 26, 0.15), inset 0 1px 1px rgba(16, 22, 26, 0.2); }
    .up-input-group.up-intent-success .up-input:focus {
      box-shadow: 0 0 0 1px #0f9960, 0 0 0 3px rgba(15, 153, 96, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.2); }
    .up-input-group.up-intent-success .up-input[readonly] {
      box-shadow: inset 0 0 0 1px #0f9960; }
    .up-input-group.up-intent-success .up-input:disabled, .up-input-group.up-intent-success .up-input.up-disabled {
      box-shadow: none; }
  .up-input-group.up-intent-success .up-icon {
    color: #0d8050; }
    .up-dark .up-input-group.up-intent-success .up-icon {
      color: #3dcc91; }
  .up-input-group.up-intent-warning .up-input {
    box-shadow: 0 0 0 0 rgba(217, 130, 43, 0), 0 0 0 0 rgba(217, 130, 43, 0), inset 0 0 0 1px #d9822b, inset 0 0 0 1px rgba(16, 22, 26, 0.15), inset 0 1px 1px rgba(16, 22, 26, 0.2); }
    .up-input-group.up-intent-warning .up-input:focus {
      box-shadow: 0 0 0 1px #d9822b, 0 0 0 3px rgba(217, 130, 43, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.2); }
    .up-input-group.up-intent-warning .up-input[readonly] {
      box-shadow: inset 0 0 0 1px #d9822b; }
    .up-input-group.up-intent-warning .up-input:disabled, .up-input-group.up-intent-warning .up-input.up-disabled {
      box-shadow: none; }
  .up-input-group.up-intent-warning .up-icon {
    color: #bf7326; }
    .up-dark .up-input-group.up-intent-warning .up-icon {
      color: #ffb366; }
  .up-input-group.up-intent-danger .up-input {
    box-shadow: 0 0 0 0 rgba(219, 55, 55, 0), 0 0 0 0 rgba(219, 55, 55, 0), inset 0 0 0 1px #db3737, inset 0 0 0 1px rgba(16, 22, 26, 0.15), inset 0 1px 1px rgba(16, 22, 26, 0.2); }
    .up-input-group.up-intent-danger .up-input:focus {
      box-shadow: 0 0 0 1px #db3737, 0 0 0 3px rgba(219, 55, 55, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.2); }
    .up-input-group.up-intent-danger .up-input[readonly] {
      box-shadow: inset 0 0 0 1px #db3737; }
    .up-input-group.up-intent-danger .up-input:disabled, .up-input-group.up-intent-danger .up-input.up-disabled {
      box-shadow: none; }
  .up-input-group.up-intent-danger .up-icon {
    color: #c23030; }
    .up-dark .up-input-group.up-intent-danger .up-icon {
      color: #ff7373; }
`

const HeightLarge = css`
  height: 40px;
  line-height: 40px;
  font-size: 16px;
  padding: 0 15px; 
`

const error = css`
.up-input {
  border-color:${(props) => props.theme.error};
  border-width: 1px;
  border-style: solid;
}
`
export const InputStyled = styled<StyledProps>(BaseInput)`
  ${inputStyles}
  ${(props) => props.hasError ? error:css``}
  color: ${(props: StyledProps) => props.color};
  .up-input {
    width: ${(props: StyledProps) => sizeMap[props.width]};
    ${(props: StyledProps) => (props.height=="large"?HeightLarge:css``)}
  }
`;