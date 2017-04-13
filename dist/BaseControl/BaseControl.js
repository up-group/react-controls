"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const ValidationManager_1 = require("../Validation/ValidationManager");
const ErrorDisplay_1 = require("../Validation/ErrorDisplay");
class BaseControl extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.handleChangeEvent = (event) => {
            var cleanData = this.onChange(event);
            this.checkData(cleanData);
        };
        this.checkData = (cleanData) => {
            var result = this._validationManager.isValidValue(cleanData);
            if (result.hasError) {
                this.setState({ error: result.errorMessage });
            }
            else {
                this.setState({ error: null });
            }
        };
        this.state = { error: null, value: null };
        this._validationManager = new ValidationManager_1.default();
    }
    render() {
        return React.createElement(ErrorDisplay_1.default, { error: this.state.error }, this.renderControl());
    }
}
exports.BaseControl = BaseControl;
//# sourceMappingURL=BaseControl.js.map