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
class Heading extends React.Component {
    render() {
        const _a = this.props, { children, tag } = _a, rest = __rest(_a, ["children", "tag"]);
        switch (tag) {
            case 'h2':
                return (React.createElement(styles_1.H2, Object.assign({ tag: tag }, rest), children));
            case 'h3':
                return (React.createElement(styles_1.H3, Object.assign({ tag: tag }, rest), children));
            case 'h4':
                return (React.createElement(styles_1.H4, Object.assign({ tag: tag }, rest), children));
            case 'h5':
                return (React.createElement(styles_1.H5, Object.assign({ tag: tag }, rest), children));
            default:
                return (React.createElement(styles_1.H1, Object.assign({ tag: tag }, rest), children));
        }
    }
}
Heading.defaultProps = {
    color: '#007acc',
    textAlign: 'center',
    tag: 'h1',
    truncate: false,
    upcase: false,
    margin: 'medium',
};
exports.default = Heading;
//# sourceMappingURL=index.js.map