"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const styleUtils_1 = require("./styleUtils");
const styled_components_1 = require("styled-components");
const styles_1 = require("../Paragraph/styles");
exports.UnorderedListStyled = styled_components_1.default.ul `
  text-align: center;
  font-size: ${(props) => styleUtils_1.default(props.fontSize)};
  text-align: ${(props) => props.textAlign};
  color: ${(props) => props.color};
  font-weight: ${(props) => props.fontWeight};
  ${(props) => styles_1.marginCss(props.margin)};
`;
exports.OrderedListStyled = styled_components_1.default.ol `
  text-align: center;
  font-size: ${(props) => styleUtils_1.default(props.fontSize)};
  text-align: ${(props) => props.textAlign};
  color: ${(props) => props.color};
  font-weight: ${(props) => props.fontWeight};
  ${(props) => styles_1.marginCss(props.margin)};
`;
exports.ListItemStyled = styled_components_1.default.li `
  text-align: center;
  font-size: ${(props) => styleUtils_1.default(props.fontSize)};
  text-align: ${(props) => props.textAlign};
  color: ${(props) => props.color};
  font-weight: ${(props) => props.fontWeight};
  ${(props) => styles_1.marginCss(props.margin)};
`;
exports.DefinitionListStyled = styled_components_1.default.dl `
  text-align: center;
  font-size: ${(props) => styleUtils_1.default(props.fontSize)};
  text-align: ${(props) => props.textAlign};
  color: ${(props) => props.color};
  font-weight: ${(props) => props.fontWeight};
  ${(props) => styles_1.marginCss(props.margin)};
`;
exports.DefinitionDataStyled = styled_components_1.default.dd `
  text-align: center;
  font-size: ${(props) => styleUtils_1.default(props.fontSize)};
  text-align: ${(props) => props.textAlign};
  color: ${(props) => props.color};
  font-weight: ${(props) => props.fontWeight};
  ${(props) => styles_1.marginCss(props.margin)};
`;
exports.DefinitionTermStyled = styled_components_1.default.dt `
  text-align: center;
  font-size: ${(props) => styleUtils_1.default(props.fontSize)};
  text-align: ${(props) => props.textAlign};
  color: ${(props) => props.color};
  font-weight: ${(props) => props.fontWeight};
  ${(props) => styles_1.marginCss(props.margin)};
`;
//# sourceMappingURL=styles.js.map