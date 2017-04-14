"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const styled_components_1 = require("styled-components");
const globalCss = styled_components_1.injectGlobal `
  * {
    box-sizing: border-box;
  }

  body {
    overflow: scroll;
    overflow-x: hidden;
    padding: 0;
    margin: 0;
    font-family: Hind,sans-serif;
    font-weight: 400;
    line-height: 1.5;
    color: #0a0a0a;
    background: #fff;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html {
    font-size: 100%;
    box-sizing: border-box;
    overflow-x: hidden;
  }

  a {
    text-decoration: none;
    line-height: inherit;
    cursor: pointer;
  }
`;
exports.default = globalCss;
//# sourceMappingURL=globalCss.js.map