"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const styled = require('styled-components').default;
const { css } = require('styled-components');
const Box_1 = require("../Box");
const colorMap_1 = require("../theming/colorMap");
const backgroundColor = (status) => css `
  background-color: ${colorMap_1.default[status] || colorMap_1.default.offwhite};
`;
exports.default = styled(Box_1.default) `
  ${(props) => backgroundColor(props.status)}
`;
//# sourceMappingURL=styles.js.map