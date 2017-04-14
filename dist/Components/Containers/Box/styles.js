"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const styled_components_1 = require("styled-components");
const styleUtils_1 = require("./styleUtils");
exports.BoxStyles = styled_components_1.css `
  display: flex;
  background-color: ${({ backgroundColor }) => backgroundColor || 'transparent'};
  justify-content: ${({ justifyContent }) => justifyContent || 'flex-start'};
  align-items: ${({ alignItems }) => alignItems || 'flex-start'};
  flex-direction: ${({ flexDirection }) => flexDirection || 'column'};
  flex-wrap: ${({ flexWrap, reverse }) => styleUtils_1.calculateFlexWrap(flexWrap, reverse)};
  padding: ${({ pad }) => styleUtils_1.sizeToString(pad)};
  margin: ${({ margin }) => styleUtils_1.sizeToString(margin)};
  width: ${({ boxSize }) => styleUtils_1.boxSizeToStyle(boxSize).width};
  height: ${({ boxSize }) => styleUtils_1.boxSizeToStyle(boxSize).height};
  flex-basis: auto;
  min-height: ${({ full }) => styleUtils_1.calculateFullStyle(full, 'vh')};
  min-width: ${({ full }) => styleUtils_1.calculateFullStyle(full, 'vw')};
  cursor: ${({ selectable }) => selectable ? 'pointer' : 'inherit'};
`;
exports.default = styled_components_1.default.div `
  ${exports.BoxStyles}
`;
//# sourceMappingURL=styles.js.map