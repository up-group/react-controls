"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var styled_components_1 = require("styled-components");
var draw = (_a = ["\n  0% {\n    transform: rotate(-90deg);\n    stroke-dashoffset: 151px;\n  }\n\n  100% {\n    stroke-dashoffset: -131px\n  }\n"], _a.raw = ["\n  0% {\n    transform: rotate(-90deg);\n    stroke-dashoffset: 151px;\n  }\n\n  100% {\n    stroke-dashoffset: -131px\n  }\n"], styled_components_1.keyframes(_a));
var color = (_b = ["\n  0% {\n    stroke: #007acc;\n  }\n\n  100% {\n    stroke: #293953;\n  }\n"], _b.raw = ["\n  0% {\n    stroke: #007acc;\n  }\n\n  100% {\n    stroke: #293953;\n  }\n"], styled_components_1.keyframes(_b));
exports.Circle = (_c = ["\n  animation: ", " 1s alternate infinite ease-in-out;\n"], _c.raw = ["\n  animation: ", " 1s alternate infinite ease-in-out;\n"], styled_components_1.default.circle(_c, color));
exports.default = (_d = ["\n  width: 48px;\n  height: 48px;\n  stroke-dasharray: 151px 151px;\n  stroke-dashoffset: 0;\n  transform: rotate(270deg);\n  animation: ", " 4s alternate infinite ease-in-out;\n"], _d.raw = ["\n  width: 48px;\n  height: 48px;\n  stroke-dasharray: 151px 151px;\n  stroke-dashoffset: 0;\n  transform: rotate(270deg);\n  animation: ", " 4s alternate infinite ease-in-out;\n"], styled_components_1.default.svg(_d, draw));
var _a, _b, _c, _d;
//# sourceMappingURL=styles.js.map