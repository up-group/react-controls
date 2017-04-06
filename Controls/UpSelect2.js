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
var ReactDOM = require("react-dom");
var $ = require("jquery");
require("select2");
var UpSelect2 = (function (_super) {
    __extends(UpSelect2, _super);
    function UpSelect2(p, c) {
        var _this = _super.call(this, p, c) || this;
        _this.getUrl = function () {
            return _this.props.dataSource.query;
        };
        _this.getdataParam = function (params) {
            var temp = {};
            temp[_this.props.dataSource.queryParameterName] = params;
            return temp;
        };
        _this.fullData = {};
        _this.mapResult = function (result) {
            var SourceId = _this.props.dataSource.id === undefined ? "id" : _this.props.dataSource.id;
            var SourceText = _this.props.dataSource.text === undefined ? "text" : _this.props.dataSource.text;
            _this.fullData = {};
            var data = result;
            return data.map(function (value) {
                var id = _this.findInObject(value, SourceId.split("."));
                _this.fullData[id] = value;
                return {
                    id: id,
                    text: _this.format(value, SourceText)
                };
            });
        };
        _this.findInObject = function (object, path) {
            var local = path.shift();
            if (path.length === 0) {
                return object[local];
            }
            else {
                return _this.findInObject(object[local], path);
            }
        };
        _this.el = null;
        return _this;
    }
    UpSelect2.prototype.setInput = function (data) {
    };
    UpSelect2.prototype._componentDidMount = function () {
    };
    UpSelect2.prototype.handleChangeJsEvent = function (args) {
        return args.target.value;
    };
    UpSelect2.prototype.isEmpty = function (value) {
        return value === null || value === undefined || value === "";
    };
    UpSelect2.prototype.render = function () {
        return React.createElement("input", { className: "input-group", type: "text" });
    };
    Object.defineProperty(UpSelect2.prototype, "isExtrenal", {
        get: function () { return this.props.dataSource !== undefined; },
        enumerable: true,
        configurable: true
    });
    UpSelect2.prototype.componentDidMount = function () {
        this.initSelect2(this.props);
    };
    UpSelect2.prototype.componentWillUnmount = function () {
        this.destroySelect2();
    };
    UpSelect2.prototype.initSelect2 = function (props, updateValue) {
        var _this = this;
        if (updateValue === void 0) { updateValue = false; }
        this.el = $(ReactDOM.findDOMNode(this));
        if (this.isExtrenal) {
            this.el.select2({
                multiple: this.props.multiple,
                placeholder: this.props.placeholder,
                allowClear: this.props.allowClear,
                ajax: this.props.dataSource === undefined ? undefined : {
                    url: this.getUrl(),
                    dataType: 'json',
                    data: this.getdataParam,
                    results: function (data, params) {
                        return { results: _this.mapResult(data) };
                    },
                    cache: true,
                },
                tags: this.props.multiple ? false : undefined,
                minimumInputLength: this.props.minimumInputLength === undefined ? 3 : this.props.minimumInputLength
            });
        }
        else {
            this.el.select2({
                initSelection: this.props.default == null ? undefined : function (element, callback) {
                    callback(_this.props.data[0]);
                },
                data: this.props.data,
                multiple: this.props.multiple,
                placeholder: this.props.default != null ? undefined : this.props.placeholder,
                allowClear: this.props.allowClear,
                tags: this.props.multiple ? false : undefined,
                minimumInputLength: this.props.minimumInputLength === undefined ? 3 : this.props.minimumInputLength
            });
        }
        this.attachEventHandlers(props);
    };
    UpSelect2.prototype.format = function (object, strFormat) {
        var regexp = /{-?[\w]+}/gi;
        var arr = strFormat.match(regexp);
        for (var i = 0; i < arr.length; i++) {
            var sourceText = arr[i].replace("{", "").replace("}", "");
            strFormat = strFormat.replace(arr[i], this.findInObject(object, sourceText.split(".")));
        }
        return strFormat;
    };
    UpSelect2.prototype.destroySelect2 = function (withCallbacks) {
        if (withCallbacks === void 0) { withCallbacks = true; }
        if (withCallbacks) {
            this.detachEventHandlers(this.props);
        }
        this.el.select2('destroy');
        this.el = null;
    };
    UpSelect2.prototype.attachEventHandlers = function (props) {
        var _this = this;
        if (this.props.getFullData) {
            $(this.el).on("change", function (event) { _this.props.onChange(_this.fullData[event.val]); });
        }
        else {
            $(this.el).on("change", function (event) { _this.props.onChange(event.val); });
        }
    };
    UpSelect2.prototype.detachEventHandlers = function (props) {
        var _this = this;
        if (props.events === undefined) {
            return;
        }
        props.events.forEach(function (event) {
            if (typeof props[event[1]] !== 'undefined') {
                _this.el.off(event[0]);
            }
        });
    };
    UpSelect2.prototype.prepareValue = function (value, defaultValue) {
        var issetValue = typeof value !== 'undefined' && value !== null;
        var is = typeof defaultValue !== 'undefined';
        if (!issetValue && is) {
            return defaultValue;
        }
        return value;
    };
    UpSelect2.prototype.prepareOptions = function (options) {
        var opt = options;
        if (typeof opt.dropdownParent === 'string') {
            opt.dropdownParent = $(opt.dropdownParent);
        }
        return opt;
    };
    return UpSelect2;
}(React.Component));
exports.UpSelect2 = UpSelect2;
//# sourceMappingURL=UpSelect2.js.map