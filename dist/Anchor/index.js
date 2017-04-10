"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_router_1 = require("react-router");
const styles_1 = require("./styles");
const MethodTypePush = 'push';
const MethodTypeReplace = 'replace';
class Anchor extends React.Component {
    constructor() {
        super(...arguments);
        this.handleClick = (e) => {
            const { method, path, router } = this.props;
            if (path) {
                e.preventDefault();
                if (method === MethodTypePush) {
                    router.push(path);
                }
                else if (method === MethodTypeReplace) {
                    router.replace(path);
                }
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
exports.default = react_router_1.withRouter(Anchor);
//# sourceMappingURL=index.js.map