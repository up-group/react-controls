"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const styled_components_1 = require("styled-components");
const styles_1 = require("../Paragraph/styles");
const styleUtils_1 = require("./styleUtils");
const truncateCss = (truncate) => {
    if (truncate) {
        return styled_components_1.css `
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    `;
    }
    return '';
};
const textTransformCss = (upcase) => {
    if (upcase) {
        return styled_components_1.css `
      text-transform: uppercase;
    `;
    }
    return '';
};
const HeadingStyles = styled_components_1.css `
  font-size: ${(props) => styleUtils_1.calculateSize(props.tag)};
  text-align: ${(props) => props.textAlign};
  color: ${(props) => props.color};
  ${(props) => truncateCss(props.truncate)};
  ${(props) => textTransformCss(props.upcase)};
  ${(props) => styles_1.marginCss(props.margin)};
`;
exports.H1 = styled_components_1.default.h1 `
  ${HeadingStyles}
`;
exports.H2 = styled_components_1.default.h2 `
  ${HeadingStyles}
`;
exports.H3 = styled_components_1.default.h3 `
  ${HeadingStyles}
`;
exports.H4 = styled_components_1.default.h4 `
  ${HeadingStyles}
`;
exports.H5 = styled_components_1.default.h5 `
  ${HeadingStyles}
`;
//# sourceMappingURL=styles.js.map