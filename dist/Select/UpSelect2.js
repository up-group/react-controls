"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const styles_1 = require("./styles");
const ReactDOM = require("react-dom");
const $ = require("jquery");
require("select2");
class UpSelect2 extends React.Component {
    constructor(p, c) {
        super(p, c);
        this.getUrl = () => {
            return this.props.dataSource.query;
        };
        this.getdataParam = (params) => {
            var temp = {};
            temp[this.props.dataSource.queryParameterName] = params;
            return temp;
        };
        this.fullData = {};
        this.mapResult = (result) => {
            var SourceId = this.props.dataSource.id === undefined ? "id" : this.props.dataSource.id;
            var SourceText = this.props.dataSource.text === undefined ? "text" : this.props.dataSource.text;
            this.fullData = {};
            var data = result;
            return data.map((value) => {
                var id = this.findInObject(value, SourceId.split("."));
                this.fullData[id] = value;
                return {
                    id: id,
                    text: this.format(value, SourceText)
                };
            });
        };
        this.findInObject = (object, path) => {
            var local = path.shift();
            if (path.length === 0) {
                return object[local];
            }
            else {
                return this.findInObject(object[local], path);
            }
        };
        this.el = null;
    }
    setInput(data) {
    }
    _componentDidMount() {
    }
    handleChangeJsEvent(args) {
        return args.target.value;
    }
    isEmpty(value) {
        return value === null || value === undefined || value === "";
    }
    render() {
        return React.createElement(styles_1.default, { type: "text" });
    }
    get isExtrenal() { return this.props.dataSource !== undefined; }
    componentDidMount() {
        this.initSelect2(this.props);
    }
    componentWillUnmount() {
        this.destroySelect2();
    }
    initSelect2(props, updateValue = false) {
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
                    results: (data, params) => {
                        return { results: this.mapResult(data) };
                    },
                    cache: true,
                },
                tags: this.props.multiple ? false : undefined,
                minimumInputLength: this.props.minimumInputLength === undefined ? 3 : this.props.minimumInputLength
            });
        }
        else {
            this.el.select2({
                initSelection: this.props.default == null ? undefined : (element, callback) => {
                    callback(this.props.data[0]);
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
    }
    format(object, strFormat) {
        var regexp = /{-?[\w]+}/gi;
        var arr = strFormat.match(regexp);
        for (var i = 0; i < arr.length; i++) {
            var sourceText = arr[i].replace("{", "").replace("}", "");
            strFormat = strFormat.replace(arr[i], this.findInObject(object, sourceText.split(".")));
        }
        return strFormat;
    }
    destroySelect2(withCallbacks = true) {
        if (withCallbacks) {
            this.detachEventHandlers(this.props);
        }
        this.el.select2('destroy');
        this.el = null;
    }
    attachEventHandlers(props) {
        if (this.props.getFullData) {
            $(this.el).on("change", (event) => { this.props.onChange(this.fullData[event.val]); });
        }
        else {
            $(this.el).on("change", (event) => { this.props.onChange(event.val); });
        }
    }
    detachEventHandlers(props) {
        if (props.events === undefined) {
            return;
        }
        props.events.forEach(event => {
            if (typeof props[event[1]] !== 'undefined') {
                this.el.off(event[0]);
            }
        });
    }
    prepareValue(value, defaultValue) {
        const issetValue = typeof value !== 'undefined' && value !== null;
        const is = typeof defaultValue !== 'undefined';
        if (!issetValue && is) {
            return defaultValue;
        }
        return value;
    }
    prepareOptions(options) {
        const opt = options;
        if (typeof opt.dropdownParent === 'string') {
            opt.dropdownParent = $(opt.dropdownParent);
        }
        return opt;
    }
}
exports.default = UpSelect2;
//# sourceMappingURL=UpSelect2.js.map