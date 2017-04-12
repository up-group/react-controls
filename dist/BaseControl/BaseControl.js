"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const ControlErrorCentral_1 = require("./errorCentral/ControlErrorCentral");
const ErrorDisplay_1 = require("./errorCentral/ErrorDisplay");
class BaseControl extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.handleChangeJsEventGlobal = (event) => {
            var cleandata = this.handleChangeJsEvent(event);
            this.handleChangeEventGlobal(cleandata);
        };
        this.handleChangeEventGlobal = (cleandata) => {
            var result = this._ControlErrorCentral.isValidValue(cleandata);
            if (result.hasError) {
                this.setState({ error: result.errorMessage });
            }
            else {
                this.setState({ error: null });
            }
        };
        this.state = { error: null, value: null };
        this._ControlErrorCentral = new ControlErrorCentral_1.default();
    }
    render() {
        return React.createElement(ErrorDisplay_1.default, { error: this.state.error }, this.renderControl());
    }
}
exports.BaseControl = BaseControl;
//# sourceMappingURL=BaseControl.js.map