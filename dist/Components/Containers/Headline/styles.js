"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const styleUtils_1 = require("./styleUtils");
const styled_components_1 = require("styled-components");
const styles_1 = require("../../Display/Paragraph/styles");
exports.HeadlineStyled = styled_components_1.default.h1 `
  text-align: center;
  font-size: ${(props) => styleUtils_1.default(props.fontSize)};
  text-align: ${(props) => props.textAlign};
  color: ${(props) => props.color};
  font-weight: ${(props) => props.fontWeight};
  ${(props) => styles_1.marginCss(props.margin)};
`;
//# sourceMappingURL=styles.js.map