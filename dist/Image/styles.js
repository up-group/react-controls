"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const styled_components_1 = require("styled-components");
const utils_1 = require("../utils");
const imageSizeMap = {
    thumb: 50,
    xxsmall: 100,
    xsmall: 200,
    small: 300,
    medium: 400,
    large: 500,
    xlarge: 600,
    full: 1200,
};
exports.imageStyle = ({ imageSize }) => {
    const sizeWithDefault = imageSize || 'small';
    const px = imageSizeMap[sizeWithDefault];
    const rem = utils_1.default(px);
    if (sizeWithDefault === 'full') {
        return styled_components_1.css `
      width: 100vw;
      height: auto;
    `;
    }
    if (sizeWithDefault === 'thumb') {
        return styled_components_1.css `
      width: ${rem};
      height: ${rem};
      flex: 0 0 auto;
      object-fit: cover;
    `;
    }
    return styled_components_1.css `
    max-width: 100%;
    height: auto;
    min-height: ${rem};
    max-height: ${rem};
    display: block;
  `;
};
exports.Img = styled_components_1.default.img `
  ${(props) => exports.imageStyle(props)}
`;
//# sourceMappingURL=styles.js.map