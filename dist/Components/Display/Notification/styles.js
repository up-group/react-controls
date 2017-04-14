"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const styled_components_1 = require("styled-components");
const Box_1 = require("../../Containers/Box");
const colorMap_1 = require("../../../Common/theming/colorMap");
const backgroundColor = (status) => styled_components_1.css `
  background-color: ${colorMap_1.default[status] || colorMap_1.default.offwhite};
`;
exports.default = styled_components_1.default(Box_1.default) `
  ${(props) => backgroundColor(props.status)}
`;
//# sourceMappingURL=styles.js.map