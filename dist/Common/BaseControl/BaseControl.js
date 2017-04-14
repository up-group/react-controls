"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const ValidationManager_1 = require("../Validation/ValidationManager");
const ErrorDisplay_1 = require("../Validation/ErrorDisplay");
require("../theming/base.css");
class BaseControl extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.handleChangeEvent = (event) => {
            var cleanData = this.onChange(event);
            this.checkData(cleanData);
            this.dispatchOnChange(cleanData, event);
        };
        this.checkData = (cleanData) => {
            var result = this._validationManager.isValidValue(cleanData);
            if (result.hasError) {
                this.setState({ error: result.errorMessage }, this.dispatchOnError);
            }
            else {
                this.setState({ error: null }, this.dispatchOnError);
            }
        };
        this.dispatchOnChange = (data, event) => {
            if (this.props.onChange !== undefined) {
                this.props.onChange(data, event);
            }
        };
        this.dispatchOnError = () => {
            if (this.props.onError !== undefined) {
                this.props.onError(this.state.error != null);
            }
        };
        this.state = { error: null };
        this._validationManager = new ValidationManager_1.default();
    }
    hasError() {
        return this.state.error != null;
    }
    render() {
        return React.createElement(ErrorDisplay_1.default, { error: this.state.error }, this.renderControl());
    }
}
exports.BaseControl = BaseControl;
//# sourceMappingURL=BaseControl.js.map