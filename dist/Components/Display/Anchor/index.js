"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var styles_1 = require("./styles");
var MethodTypePush = 'push';
var Anchor = (function (_super) {
    __extends(Anchor, _super);
    function Anchor(props) {
        var _this = _super.call(this, props) || this;
        _this.handleClick = function (e) {
            _this.props.onClick(e);
        };
        _this.handleClick = _this.handleClick.bind(_this);
        return _this;
    }
    Anchor.prototype.render = function () {
        var _a = this.props, label = _a.label, children = _a.children, color = _a.color, href = _a.href, plain = _a.plain;
        return (React.createElement(styles_1.default, { plain: plain, href: href, color: color, onClick: this.handleClick }, label || children));
    };
    return Anchor;
}(React.Component));
Anchor.defaultProps = {
    method: MethodTypePush,
};
exports.default = Anchor;
//# sourceMappingURL=index.js.map