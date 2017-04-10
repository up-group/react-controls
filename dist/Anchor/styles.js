"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const styled_components_1 = require("styled-components");
const plainStyle = (plain) => {
    if (plain) {
        return styled_components_1.css `
      cursor: pointer;
      line-height: inherit;
      text-decoration: inherit;
    `;
    }
    return styled_components_1.css `
    text-decoration: underline;
    line-height: inherit;
    cursor: pointer;
  `;
};
const colorStyle = (color) => {
    if (color) {
        return styled_components_1.css `
      color: ${color};
    `;
    }
    return null;
};
exports.default = styled_components_1.default.a `
  font-size: 1.1875rem;
  line-height: 24px;
  font-weight: 400;
  ${(props) => colorStyle(props.color)}
  ${(props) => plainStyle(props.plain || false)}
`;
//# sourceMappingURL=styles.js.map