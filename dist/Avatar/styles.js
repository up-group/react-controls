"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("../utils");
const maps_1 = require("./maps");
const default_1 = require("./default");
const styled_components_1 = require("styled-components");
const propsToSize = ({ size }) => {
    const imageSize = size || 'medium';
    const px = maps_1.default[imageSize];
    const rem = utils_1.default(px);
    return styled_components_1.css `
    width: ${rem};
    min-height: ${rem};
  `;
};
exports.AvatarStyle = styled_components_1.css `
  background: url(${({ src }) => src || default_1.default});
  background-size: cover;
  background-position: center;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  padding: 4px;
  line-height: 1.42857143;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 50%;
  ${propsToSize}
`;
//# sourceMappingURL=styles.js.map