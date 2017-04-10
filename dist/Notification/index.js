"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const styles_1 = require("./styles");
const _1 = require("../");
function Notification(_a) {
    var { message, status } = _a, rest = __rest(_a, ["message", "status"]);
    const stat = status || 'none';
    return (React.createElement(styles_1.default, Object.assign({ status: stat, boxSize: { horizontal: 'medium' }, pad: "small", alignItems: "center", selectable: true }, rest),
        React.createElement(_1.Paragraph, { paragraphSize: "large", color: "white" }, message)));
}
exports.default = Notification;
;
//# sourceMappingURL=index.js.map