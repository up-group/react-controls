"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const styleUtils_1 = require("./styleUtils");
const themedComponents_1 = require("../../../Common/theming/themedComponents");
const theming_1 = require("../../../Common/theming");
const styles_1 = require("../../Display/Paragraph/styles");
const borderWarning = themedComponents_1.css `
  border-radius:3px;
  border-color:${props => (props.theme.colorMap) ? props.theme.colorMap.warning : theming_1.default.warning};
  border-width:1px;
  border-style: solid;
  padding:6px;
`;
function setBorder(props) {
    if (props.border) {
        return borderWarning;
    }
    else {
        return themedComponents_1.css ``;
    }
}
exports.UnorderedListStyled = themedComponents_1.default.ul `
  text-align: center;
  list-style-type:${(props) => props.type};
  font-size: ${(props) => styleUtils_1.default(props.fontSize)};
  text-align: ${(props) => props.textAlign};
  color: ${(props) => props.color};
  font-weight: ${(props) => props.fontWeight};
  ${(props) => styles_1.marginCss(props.margin)};
`;
exports.OrderedListStyled = themedComponents_1.default.ol `
  text-align: center;
  font-size: ${(props) => styleUtils_1.default(props.fontSize)};
  text-align: ${(props) => props.textAlign};
  color: ${(props) => props.color};
  font-weight: ${(props) => props.fontWeight};
  ${(props) => styles_1.marginCss(props.margin)};
`;
exports.ListItemStyled = themedComponents_1.default.li `
  text-align: center;
  font-size: ${(props) => styleUtils_1.default(props.fontSize)};
  text-align: ${(props) => props.textAlign};
  color: ${(props) => props.color};
  font-weight: ${(props) => props.fontWeight};
  ${(props) => styles_1.marginCss(props.margin)};
  ${(props) => setBorder(props)};
`;
exports.DefinitionListStyled = themedComponents_1.default.dl `
  text-align: center;
  font-size: ${(props) => styleUtils_1.default(props.fontSize)};
  text-align: ${(props) => props.textAlign};
  color: ${(props) => props.color};
  font-weight: ${(props) => props.fontWeight};
  ${(props) => styles_1.marginCss(props.margin)};
`;
exports.DefinitionDataStyled = themedComponents_1.default.dd `
  text-align: center;
  font-size: ${(props) => styleUtils_1.default(props.fontSize)};
  text-align: ${(props) => props.textAlign};
  color: ${(props) => props.color};
  font-weight: ${(props) => props.fontWeight};
  ${(props) => styles_1.marginCss(props.margin)};
`;
exports.DefinitionTermStyled = themedComponents_1.default.dt `
  text-align: center;
  font-size: ${(props) => styleUtils_1.default(props.fontSize)};
  text-align: ${(props) => props.textAlign};
  color: ${(props) => props.color};
  font-weight: ${(props) => props.fontWeight};
  ${(props) => styles_1.marginCss(props.margin)};
`;
//# sourceMappingURL=styles.js.map