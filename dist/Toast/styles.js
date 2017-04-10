"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const styled_components_1 = require("styled-components");
const colorMap_1 = require("../theming/colorMap");
const backgroundColor = (status) => styled_components_1.css `
  background-color: ${colorMap_1.default[status] || colorMap_1.default.offwhite};
`;
const unmount = styled_components_1.keyframes `
  0% { transform: translateY(0%); }
  100% { transform: translateY(-100%); }
`;
const mount = styled_components_1.keyframes `
  0% { transform: translateY(-100%); }
  100% { transform: translateY(0%); }
`;
exports.Button = styled_components_1.default.button `
  background-color: transparent;
  border: 0px;
  color: #333;
  cursor: pointer;
  font-size: 2rem;
`;
exports.default = styled_components_1.default.div `
  position: fixed;
  font-size: 1.3rem;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  display: flex;
  flex-direction: row;
  ${({ status }) => backgroundColor(status)}
  animation:${({ isUnmounting }) => isUnmounting ? unmount : mount}1s;
`;
//# sourceMappingURL=styles.js.map