"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const styled_components_1 = require("styled-components");
const styleUtils_1 = require("./styleUtils");
const defaultProps = {
    color: '#fff',
    textAlign: 'center',
    paragraphSize: 'medium',
    margin: 'medium',
};
function marginCss(margin) {
    return styled_components_1.css `
    margin-top: ${styleUtils_1.calculateMargin(margin)};
    margin-bottom: ${styleUtils_1.calculateMargin(margin)};
  `;
}
exports.marginCss = marginCss;
;
exports.style = styled_components_1.css `
  max-width: 630px;
  text-align: ${(props) => props.textAlign || defaultProps.textAlign};
  color: ${(props) => props.color || defaultProps.color};
  ${(props) => marginCss(props.margin || defaultProps.margin)};
  font-size: ${(props) => styleUtils_1.default(props.paragraphSize || defaultProps.paragraphSize)};
`;
exports.default = exports.style;
//# sourceMappingURL=styles.js.map