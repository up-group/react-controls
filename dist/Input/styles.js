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