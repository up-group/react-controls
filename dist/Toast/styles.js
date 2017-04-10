"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const styled = require('styled-components').default;
const { keyframes, css } = require('styled-components');
const colorMap_1 = require("../theming/colorMap");
const backgroundColor = (status) => css `
  background-color: ${colorMap_1.default[status] || colorMap_1.default.offwhite};
`;
const unmount = keyframes `
  0% { transform: translateY(0%); }
  100% { transform: translateY(-100%); }
`;
const mount = keyframes `
  0% { transform: translateY(-100%); }
  100% { transform: translateY(0%); }
`;
exports.Button = styled.button `
  background-color: transparent;
  border: 0px;
  color: #333;
  cursor: pointer;
  font-size: 2rem;
`;
exports.default = styled.div `
  position: fixed;
  font-size: 1.3rem;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  display: flex;
  flex-direction: row;
  ${(props) => backgroundColor(props.status)};
  animation: ${(props) => props.isUnmounting ? unmount : mount} 1s;
`;
//# sourceMappingURL=styles.js.map