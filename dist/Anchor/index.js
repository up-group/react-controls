"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const styles_1 = require("./styles");
const MethodTypePush = 'push';
class Anchor extends React.Component {
    constructor() {
        super(...arguments);
        this.handleClick = (e) => {
            const { path } = this.props;
            if (path) {
                e.preventDefault();
            }
        };
    }
    render() {
        const { label, children, color, href, plain, } = this.props;
        return (React.createElement(styles_1.default, { plain: plain, href: href, color: color, onClick: this.handleClick }, label || children));
    }
}
Anchor.defaultProps = {
    method: MethodTypePush,
};
exports.default = Anchor;
//# sourceMappingURL=index.js.map