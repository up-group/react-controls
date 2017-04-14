"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var styled_components_1 = require("styled-components");
var colorMap_1 = require("../theming/colorMap");
var backgroundColor = function (status) {
    return (_a = ["\n  background-color: ", ";\n"], _a.raw = ["\n  background-color: ", ";\n"], styled_components_1.css(_a, colorMap_1.default[status] || colorMap_1.default.offwhite));
    var _a;
};
var unmount = (_a = ["\n  0% { transform: translateY(0%); }\n  100% { transform: translateY(-100%); }\n"], _a.raw = ["\n  0% { transform: translateY(0%); }\n  100% { transform: translateY(-100%); }\n"], styled_components_1.keyframes(_a));
var mount = (_b = ["\n  0% { transform: translateY(-100%); }\n  100% { transform: translateY(0%); }\n"], _b.raw = ["\n  0% { transform: translateY(-100%); }\n  100% { transform: translateY(0%); }\n"], styled_components_1.keyframes(_b));
exports.Button = (_c = ["\n  background-color: transparent;\n  border: 0px;\n  color: #333;\n  cursor: pointer;\n  font-size: 2rem;\n"], _c.raw = ["\n  background-color: transparent;\n  border: 0px;\n  color: #333;\n  cursor: pointer;\n  font-size: 2rem;\n"], styled_components_1.default.button(_c));
exports.default = (_d = ["\n  position: fixed;\n  font-size: 1.3rem;\n  top: 0;\n  left: 0;\n  right: 0;\n  z-index: 100;\n  display: flex;\n  flex-direction: row;\n  ", "\n  animation:", "1s;\n"], _d.raw = ["\n  position: fixed;\n  font-size: 1.3rem;\n  top: 0;\n  left: 0;\n  right: 0;\n  z-index: 100;\n  display: flex;\n  flex-direction: row;\n  ", "\n  animation:", "1s;\n"], styled_components_1.default.div(_d, function (_a) {
    var status = _a.status;
    return backgroundColor(status);
}, function (_a) {
    var isUnmounting = _a.isUnmounting;
    return isUnmounting ? unmount : mount;
}));
var _a, _b, _c, _d;
//# sourceMappingURL=styles.js.map