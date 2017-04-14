"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const styled_components_1 = require("styled-components");
const BaseFormGroup = (props) => {
    return (React.createElement("div", { className: props.className },
        React.createElement("div", { className: "up-form-group" }, props.children)));
};
const formGroupStyles = styled_components_1.css `
.up-form-group {
  display: -webkit-flex;
  display: flex;
  -webkit-flex-direction: column;
          flex-direction: column;
  margin: 0 0 15px; }
  .up-form-group label.up-label {
    margin-bottom: 5px; }
  .up-form-group .up-form-helper-text {
    margin-top: 5px;
    color: #5c7080;
    font-size: 12px; }
  .up-form-group.up-intent-primary .up-form-helper-text {
    color: #106ba3; }
  .up-form-group.up-intent-success .up-form-helper-text {
    color: #0d8050; }
  .up-form-group.up-intent-warning .up-form-helper-text {
    color: #bf7326; }
  .up-form-group.up-intent-danger .up-form-helper-text {
    color: #c23030; }
  .up-form-group.up-inline {
    -webkit-flex-direction: row;
            flex-direction: row; }
    .up-form-group.up-inline.up-large label.up-label {
      margin: 0 10px 0 0;
      line-height: 40px; }
    .up-form-group.up-inline label.up-label {
      margin: 0 10px 0 0;
      line-height: 30px; }
  .up-form-group.up-disabled .up-label,
  .up-form-group.up-disabled .up-text-muted,
  .up-form-group.up-disabled .up-form-helper-text {
    color: rgba(92, 112, 128, 0.5) !important; }
  .up-dark .up-form-group.up-intent-primary .up-form-helper-text {
    color: #48aff0; }
  .up-dark .up-form-group.up-intent-success .up-form-helper-text {
    color: #3dcc91; }
  .up-dark .up-form-group.up-intent-warning .up-form-helper-text {
    color: #ffb366; }
  .up-dark .up-form-group.up-intent-danger .up-form-helper-text {
    color: #ff7373; }
  .up-dark .up-form-group .up-form-helper-text {
    color: #bfccd6; }
  .up-dark .up-form-group.up-disabled .up-label,
  .up-dark .up-form-group.up-disabled .up-text-muted,
  .up-dark .up-form-group.up-disabled .up-form-helper-text {
    color: rgba(191, 204, 214, 0.5) !important; }
`;
exports.FormGroupStyled = styled_components_1.default(BaseFormGroup) `
  ${formGroupStyles}
`;
//# sourceMappingURL=styles.js.map