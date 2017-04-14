"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const styled_components_1 = require("styled-components");
const utils_1 = require("../utils");
const maps_1 = require("./maps");
const inputStyles = styled_components_1.css `
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
    background-color: ${(props) => props.borderColor};
  }
  &:hover {

  }
  $:blur {
    
  }

.pt-input {
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
          appearance: none; }
  .pt-input::-webkit-input-placeholder {
    opacity: 1;
    color: rgba(92, 112, 128, 0.5); }
  .pt-input::-moz-placeholder {
    opacity: 1;
    color: rgba(92, 112, 128, 0.5); }
  .pt-input:-ms-input-placeholder {
    opacity: 1;
    color: rgba(92, 112, 128, 0.5); }
  .pt-input::placeholder {
    opacity: 1;
    color: rgba(92, 112, 128, 0.5); }
  .pt-input:focus {
    box-shadow: 0 0 0 1px #137cbd, 0 0 0 3px rgba(19, 124, 189, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.2); }
  .pt-input[type="search"], .pt-input.pt-round {
    border-radius: 30px;
    -moz-box-sizing: border-box;
         box-sizing: border-box;
    padding-left: 10px; }
  .pt-input[readonly] {
    box-shadow: inset 0 0 0 1px rgba(16, 22, 26, 0.15); }
  .pt-input:disabled, .pt-input.pt-disabled {
    box-shadow: none;
    background: rgba(206, 217, 224, 0.5);
    cursor: not-allowed;
    color: rgba(92, 112, 128, 0.5);
    resize: none; }
  .pt-input.pt-large {
    height: 40px;
    line-height: 40px;
    font-size: 16px; }
    .pt-input.pt-large[type="search"], .pt-input.pt-large.pt-round {
      padding: 0 15px; }
  .pt-input.pt-fill {
    width: 100%; }
  .pt-dark .pt-input {
    box-shadow: 0 0 0 0 rgba(19, 124, 189, 0), 0 0 0 0 rgba(19, 124, 189, 0), 0 0 0 0 rgba(19, 124, 189, 0), inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4);
    background: rgba(16, 22, 26, 0.3);
    color: #f5f8fa; }
    .pt-dark .pt-input::-webkit-input-placeholder {
      color: rgba(191, 204, 214, 0.5); }
    .pt-dark .pt-input::-moz-placeholder {
      color: rgba(191, 204, 214, 0.5); }
    .pt-dark .pt-input:-ms-input-placeholder {
      color: rgba(191, 204, 214, 0.5); }
    .pt-dark .pt-input::placeholder {
      color: rgba(191, 204, 214, 0.5); }
    .pt-dark .pt-input:focus {
      box-shadow: 0 0 0 1px #137cbd, 0 0 0 1px #137cbd, 0 0 0 3px rgba(19, 124, 189, 0.3), inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4); }
    .pt-dark .pt-input[readonly] {
      box-shadow: inset 0 0 0 1px rgba(16, 22, 26, 0.4); }
    .pt-dark .pt-input:disabled, .pt-dark .pt-input.pt-disabled {
      box-shadow: none;
      background: rgba(57, 75, 89, 0.5);
      color: rgba(191, 204, 214, 0.5); }
  .pt-input.pt-intent-primary {
    box-shadow: 0 0 0 0 rgba(19, 124, 189, 0), 0 0 0 0 rgba(19, 124, 189, 0), inset 0 0 0 1px #137cbd, inset 0 0 0 1px rgba(16, 22, 26, 0.15), inset 0 1px 1px rgba(16, 22, 26, 0.2); }
    .pt-input.pt-intent-primary:focus {
      box-shadow: 0 0 0 1px #137cbd, 0 0 0 3px rgba(19, 124, 189, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.2); }
    .pt-input.pt-intent-primary[readonly] {
      box-shadow: inset 0 0 0 1px #137cbd; }
    .pt-input.pt-intent-primary:disabled, .pt-input.pt-intent-primary.pt-disabled {
      box-shadow: none; }
    .pt-dark .pt-input.pt-intent-primary {
      box-shadow: 0 0 0 0 rgba(19, 124, 189, 0), 0 0 0 0 rgba(19, 124, 189, 0), 0 0 0 0 rgba(19, 124, 189, 0), inset 0 0 0 1px #137cbd, inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4); }
      .pt-dark .pt-input.pt-intent-primary:focus {
        box-shadow: 0 0 0 1px #137cbd, 0 0 0 1px #137cbd, 0 0 0 3px rgba(19, 124, 189, 0.3), inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4); }
      .pt-dark .pt-input.pt-intent-primary[readonly] {
        box-shadow: inset 0 0 0 1px #137cbd; }
      .pt-dark .pt-input.pt-intent-primary:disabled, .pt-dark .pt-input.pt-intent-primary.pt-disabled {
        box-shadow: none; }
  .pt-input.pt-intent-success {
    box-shadow: 0 0 0 0 rgba(15, 153, 96, 0), 0 0 0 0 rgba(15, 153, 96, 0), inset 0 0 0 1px #0f9960, inset 0 0 0 1px rgba(16, 22, 26, 0.15), inset 0 1px 1px rgba(16, 22, 26, 0.2); }
    .pt-input.pt-intent-success:focus {
      box-shadow: 0 0 0 1px #0f9960, 0 0 0 3px rgba(15, 153, 96, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.2); }
    .pt-input.pt-intent-success[readonly] {
      box-shadow: inset 0 0 0 1px #0f9960; }
    .pt-input.pt-intent-success:disabled, .pt-input.pt-intent-success.pt-disabled {
      box-shadow: none; }
    .pt-dark .pt-input.pt-intent-success {
      box-shadow: 0 0 0 0 rgba(15, 153, 96, 0), 0 0 0 0 rgba(15, 153, 96, 0), 0 0 0 0 rgba(15, 153, 96, 0), inset 0 0 0 1px #0f9960, inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4); }
      .pt-dark .pt-input.pt-intent-success:focus {
        box-shadow: 0 0 0 1px #0f9960, 0 0 0 1px #0f9960, 0 0 0 3px rgba(15, 153, 96, 0.3), inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4); }
      .pt-dark .pt-input.pt-intent-success[readonly] {
        box-shadow: inset 0 0 0 1px #0f9960; }
      .pt-dark .pt-input.pt-intent-success:disabled, .pt-dark .pt-input.pt-intent-success.pt-disabled {
        box-shadow: none; }
  .pt-input.pt-intent-warning {
    box-shadow: 0 0 0 0 rgba(217, 130, 43, 0), 0 0 0 0 rgba(217, 130, 43, 0), inset 0 0 0 1px #d9822b, inset 0 0 0 1px rgba(16, 22, 26, 0.15), inset 0 1px 1px rgba(16, 22, 26, 0.2); }
    .pt-input.pt-intent-warning:focus {
      box-shadow: 0 0 0 1px #d9822b, 0 0 0 3px rgba(217, 130, 43, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.2); }
    .pt-input.pt-intent-warning[readonly] {
      box-shadow: inset 0 0 0 1px #d9822b; }
    .pt-input.pt-intent-warning:disabled, .pt-input.pt-intent-warning.pt-disabled {
      box-shadow: none; }
    .pt-dark .pt-input.pt-intent-warning {
      box-shadow: 0 0 0 0 rgba(217, 130, 43, 0), 0 0 0 0 rgba(217, 130, 43, 0), 0 0 0 0 rgba(217, 130, 43, 0), inset 0 0 0 1px #d9822b, inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4); }
      .pt-dark .pt-input.pt-intent-warning:focus {
        box-shadow: 0 0 0 1px #d9822b, 0 0 0 1px #d9822b, 0 0 0 3px rgba(217, 130, 43, 0.3), inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4); }
      .pt-dark .pt-input.pt-intent-warning[readonly] {
        box-shadow: inset 0 0 0 1px #d9822b; }
      .pt-dark .pt-input.pt-intent-warning:disabled, .pt-dark .pt-input.pt-intent-warning.pt-disabled {
        box-shadow: none; }
  .pt-input.pt-intent-danger {
    box-shadow: 0 0 0 0 rgba(219, 55, 55, 0), 0 0 0 0 rgba(219, 55, 55, 0), inset 0 0 0 1px #db3737, inset 0 0 0 1px rgba(16, 22, 26, 0.15), inset 0 1px 1px rgba(16, 22, 26, 0.2); }
    .pt-input.pt-intent-danger:focus {
      box-shadow: 0 0 0 1px #db3737, 0 0 0 3px rgba(219, 55, 55, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.2); }
    .pt-input.pt-intent-danger[readonly] {
      box-shadow: inset 0 0 0 1px #db3737; }
    .pt-input.pt-intent-danger:disabled, .pt-input.pt-intent-danger.pt-disabled {
      box-shadow: none; }
    .pt-dark .pt-input.pt-intent-danger {
      box-shadow: 0 0 0 0 rgba(219, 55, 55, 0), 0 0 0 0 rgba(219, 55, 55, 0), 0 0 0 0 rgba(219, 55, 55, 0), inset 0 0 0 1px #db3737, inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4); }
      .pt-dark .pt-input.pt-intent-danger:focus {
        box-shadow: 0 0 0 1px #db3737, 0 0 0 1px #db3737, 0 0 0 3px rgba(219, 55, 55, 0.3), inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4); }
      .pt-dark .pt-input.pt-intent-danger[readonly] {
        box-shadow: inset 0 0 0 1px #db3737; }
      .pt-dark .pt-input.pt-intent-danger:disabled, .pt-dark .pt-input.pt-intent-danger.pt-disabled {
        box-shadow: none; }
  .pt-input::-ms-clear {
    display: none; }

`;
exports.TextInputComponent = styled_components_1.default.input `
  ${inputStyles}
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.color};
  font-size: ${(props) => utils_1.default(maps_1.sizeMap[props.fontSize])};
`;
exports.EmailInputComponent = styled_components_1.default.input `
  ${inputStyles}
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.color};
  &:active {
    background-color: ${(props) => props.borderColor};
  }
`;
//# sourceMappingURL=styles.js.map