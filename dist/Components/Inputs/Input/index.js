"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const styles_1 = require("./styles");
const BaseControl_1 = require("../../../Common/BaseControl/BaseControl");
class Input extends BaseControl_1.BaseControl {
    constructor(p, c) {
        super(p, c);
    }
    onChange(event) {
        return event.target.value;
    }
    renderControl() {
        return (React.createElement(styles_1.InputStyled, { type: "text", onChange: this.handleChangeEvent }, this.props.children));
    }
}
Input.defaultProps = {};
exports.default = Input;
//# sourceMappingURL=index.js.map