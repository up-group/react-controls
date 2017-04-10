"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const styled_components_1 = require("styled-components");
const draw = styled_components_1.keyframes `
  0% {
    transform: rotate(-90deg);
    stroke-dashoffset: 151px;
  }

  100% {
    stroke-dashoffset: -131px
  }
`;
const color = styled_components_1.keyframes `
  0% {
    stroke: #007acc;
  }

  100% {
    stroke: #293953;
  }
`;
exports.Circle = styled_components_1.default.circle `
  animation: ${color} 1s alternate infinite ease-in-out;
`;
exports.default = styled_components_1.default.svg `
  width: 48px;
  height: 48px;
  stroke-dasharray: 151px 151px;
  stroke-dashoffset: 0;
  transform: rotate(270deg);
  animation: ${draw} 4s alternate infinite ease-in-out;
`;
//# sourceMappingURL=styles.js.map