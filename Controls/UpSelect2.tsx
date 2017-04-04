import * as React from "react";
import * as ReactDOM from "react-dom";
import * as $ from 'jquery';
import 'select2';

interface UpSelect2ExtendProp {
    default: any;
    getFullData: boolean;
    multiple?: boolean;
    data?: any;
    placeholder?: string;
    allowClear?: boolean;
    minimumInputLength?: number;
    dataSource?: {
        id: string,
        text: string,
        query: string,
        queryParameterName: string
    },
    onChange: (arg) => void,
    onError: () => void,
    isNuallble: boolean,
    isRequired: boolean
}

export default class UpSelect2 extends React.Component<UpSelect2ExtendProp, {}> {
    el: JQuery;
    constructor(p, c) {        super(p, c);
        this.el = null;
    }    setInput(data) {    }
    _componentDidMount() {
    }
    handleChangeJsEvent(args: any) {
        return args.target.value;
    }

    isEmpty(value) {
        return value === null || value === undefined || value === "";
    }

    render() {
        return <input  className="input-group" type="text" />
    }

    private get isExtrenal() { return this.props.dataSource !== undefined }

    componentDidMount() {
        this.initSelect2(this.props);
    }


    componentWillUnmount() {
        this.destroySelect2();
    }

    initSelect2(props, updateValue = false) {

        this.el = $(ReactDOM.findDOMNode(this));


        if (this.isExtrenal) {

            // Select2 Ajax
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
        } else {

            // Select2 enum c#

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

    private getUrl = () => {
        return this.props.dataSource.query;
    }

    private getdataParam = (params) => {
        var temp = {}
        temp[this.props.dataSource.queryParameterName] = params;
        return temp;
    }

    private fullData: any = {};

    private mapResult = (result) => {
        var SourceId = this.props.dataSource.id === undefined ? "id" : this.props.dataSource.id;
        var SourceText = this.props.dataSource.text === undefined ? "text" : this.props.dataSource.text;
        this.fullData = {};
        var data = result;// this.props.dataSource.dataPathSourceArray === undefined ? result : this.findInObject(result, this.props.dataSource.dataPathSourceArray.split("."));

        return data.map((value) => {

            var id = this.findInObject(value, SourceId.split("."));
            this.fullData[id] = value;
            return {
                id: id,
                text: this.format(value, SourceText)
            }
        });
    }

    private format(object, strFormat: string) {
        var regexp = /{-?[\w]+}/gi;
        var arr = strFormat.match(regexp);


        for (var i = 0; i < arr.length; i++) {
            var sourceText = arr[i].replace("{", "").replace("}", "");
            strFormat = strFormat.replace(arr[i], this.findInObject(object, sourceText.split(".")));

        }

        return strFormat;
    }

    private findInObject = (object, path: string[]) => {
        var local = path.shift();

        if (path.length === 0) {
            return object[local];
        } else {
            return this.findInObject(object[local], path);
        }
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
            $(this.el).on("change", (event) => { this.props.onChange(this.fullData[event.val]) });
        }
        else {
            $(this.el).on("change", (event) => { this.props.onChange(event.val) });
        }
    }

    detachEventHandlers(props) {
        if (props.events === undefined) {
            return
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