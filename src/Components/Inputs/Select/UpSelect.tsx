// Imports
import * as React from 'react'
import * as update from 'react-addons-update'
//import Component from './styles';
import * as ReactDOM from "react-dom"
import * as Select from 'react-select'

import axios from 'axios'
import { BaseControlComponent } from '../_Common/BaseControl/BaseControl'
import { UpSelectProps, UpSelectStyledProps } from './'
import WrapperSelect from './styles';
import * as queryString from 'query-string';

var CancelToken = axios.CancelToken;

// Exports
export default class UpSelect extends BaseControlComponent<UpSelectProps, any> {
    timeOutLoadOptions: any;
    axiosSource: any;

    public static defaultProps: UpSelectProps = {
        noResultsText: "Aucun résultat trouvé",
        clearAllText: "Effacer",
        clearValueText: "Déselectionner",
        addLabelText: 'Ajouter "{label}" ?',
        searchPromptText: "-- Rechercher",
        placeholder: "-- Sélectionner",
        loadingPlaceholder: "Chargement en cours",
        default: null,
        autoload: false,
        showError: true,
        isLoading: false,
        allowCreate: false,
        width: 'normal',
        returnType: "full"
    }

    constructor(p, c) {
        super(p, c);
        this.state = {
            value: (p.value) ? this.parseValue(p.value) : p.default,
            extra: {
                loadingPlaceholder: p.loadingPlaceholder,
                fullObject: (p.value) ? p.value : p.default,
            }
        };
    }

    get keyId() {
        if (this.props.dataSource) {
            return this.props.dataSource.id || "id";
        }
        return this.props.valueKey || "id";
    }

    get keyText() {
        if (this.props.dataSource) {
            return this.props.dataSource.text || "text";
        }
        return this.props.labelKey || "text";
    }

    selectElement: any;

    setSelect = (input) => {
        // The ref function is called twice, 
        // the first one with the component instance (as React) 
        // and the second one with the DOM node instance
        if (this.selectElement == undefined) {
            this.selectElement = input;
        }
    }

    isEmpty(value) {
        return value === null || value === undefined || value === "";
    }

    setValue = (receiveValue: any) => {
        if (typeof (receiveValue) === "object") {
            var extra = this.state.extra === undefined || this.state.extra === null ? {} : this.state.extra;
            extra.fullObject = receiveValue;
            this.setState({ extra: extra });
        }

        return this.parseValue(receiveValue);
    }

    parseValue = (receiveValue: any) => {
        if (this.props.returnType === "id" && typeof (receiveValue) === "object" && receiveValue != null) {
            if (this.props.multiple === true) {
                return receiveValue.map(((v) => { return v != null ? v[this.keyId] : null; }));
            } else {
                return receiveValue[this.keyId]
            }
        }

        return receiveValue;
    }


    getValue(data: any) {
        if (data == null) {
            return null;
        }

        if (this.props.returnType === "id") {
            var fullobject = this.state.extra.fullObject;
            if (this.props.multiple) {
                return fullobject.map((v) => { return v != null && v[this.keyId] != null ? v[this.keyId] : v });
            } else {
                return fullobject[this.keyId] != null ? fullobject[this.keyId] : null;
            }
        } else {
            return data;
        }
    }

    getOptionRenderer = (option) => {

        if (this.props.optionRenderer) {
            const OptionRenderer = this.props.optionRenderer;
            return (<OptionRenderer {...option}></OptionRenderer>)
        } else {
            return (<span key={`option_{option[this.keyId]}`} >{this.format(option, this.keyText)}</span>)
        }
    }

    getValueRenderer = (value) => {
        if (this.props.valueRenderer) {
            const ValueRenderer = this.props.valueRenderer;
            return (<ValueRenderer {...value}></ValueRenderer>)
        } else {
            return (<span key={`option_{value[this.keyId]}`} >{this.format(value, this.keyText)}</span>)
        }
    }

    private format(object, strFormat: string) {
        var regexp = /{-?[\w]+}/gi;
        var arr = strFormat.match(regexp);
        if (arr === null) {
            return object[strFormat];
        }

        for (var i = 0; i < arr.length; i++) {
            var sourceText = arr[i].replace("{", "").replace("}", "");
            strFormat = strFormat.replace(arr[i], this.findInObject(object, sourceText.split(".")));
        }

        return strFormat;
    }

    filterOptions = (options, filter, currentValues) => {
        var _options = [];
        var _self = this;
        options.map((value) => {
            // check if the option is selected
            var isInValues: boolean = false;
            for (var i in currentValues) {
                var curentValue = currentValues[i];
                if (value[_self.keyId] === curentValue[_self.keyId]) {
                    isInValues = true;
                    break;
                }
            };
            // Return the option only if it is not in the current values
            if (isInValues === false)
                _options.push(value);
        });

        return _options;
    }

    private findInObject = (object, path: string[]) => {
        var local = path.shift();

        if (path.length === 0) {
            return object[local];
        } else {
            return this.findInObject(object[local], path);
        }
    }

    renderControl() {
        const dataSource = this.props.dataSource;
        var loadOptions: any = false;

        const SelectComponent = dataSource != null
            ? ((this.props.allowCreate === true) ? Select.AsyncCreatable : Select.Async)
            : ((this.props.allowCreate === true) ? Select.Creatable : Select);

        if (typeof dataSource !== "undefined") {
            var queryParam = dataSource.queryParameterName || 'search';
            var minimumInputLength = this.props.minimumInputLength;
            loadOptions = (input: string, callback) => {
                if (minimumInputLength && input.length < minimumInputLength) {
                    if (input.length !== 0) {
                        const newState = update(this.state, { extra: { loadingPlaceholder: { $set: `Veuillez renseigner au minimum ${minimumInputLength} caractères` } } });
                        this.setState(newState);
                    } else {
                        const newState = update(this.state, { extra: { loadingPlaceholder: { $set: this.props.placeholder } } });
                        //this.setState({ extra: { loadingPlaceholder: this.props.placeholder } });
                        this.setState(newState);
                    }
                    return false;
                } else {
                    const newState = update(this.state, { extra: { loadingPlaceholder: { $set: this.props.placeholder } } });
                    //this.setState({ extra: { loadingPlaceholder: this.props.placeholder } });
                    this.setState(newState);
                }
                if (this.timeOutLoadOptions) {
                    clearTimeout(this.timeOutLoadOptions);
                }
                var _loadOptionsAfterDealy = () => {
                    if (this.axiosSource) {
                        this.axiosSource.cancel('Next request in progress');
                    }
                    var qs = `${queryParam}=${input}`;
                    if (dataSource.getExtraParams) {
                        var params = dataSource.getExtraParams();
                        if (params) {
                            qs += `&${queryString.stringify(params)}`;
                        }
                    }
                    var query = `${dataSource.query}?${qs}`;
                    if (dataSource.endPoint) {
                        query = `${dataSource.endPoint}/${query}`
                    }
                    this.axiosSource = CancelToken.source();
                    axios.get(query, {
                        cancelToken: this.axiosSource.token
                    }).then((response) => {
                        var data = response.data;

                        if (dataSource.handleResponse) {
                            data = dataSource.handleResponse(data);
                        }

                        callback(null, {
                            options: data,
                            complete: false
                        });
                        this.axiosSource = null;
                    }).catch(function (thrown) {
                        if (axios.isCancel(thrown)) {
                            console.log('Request canceled', thrown.message);
                        } else {
                            // handle error
                        }
                        this.axiosSource = null;
                    });
                }
                // Load options after a delay
                this.timeOutLoadOptions = setTimeout(_loadOptionsAfterDealy, dataSource.delay | 1000);
            };
            loadOptions = loadOptions.bind(this);
        }
        var data = this.props.data;
        var specProps: any = {
            options: data
        }

        if (loadOptions !== false) {
            specProps = {
                "loadOptions": loadOptions,
                "autoload": this.props.autoload
            }
        }

        return (
            <WrapperSelect width={this.props.width}>
                <SelectComponent
                    {...specProps}
                    placeholder={this.props.placeholder}
                    filterOptions={this.props.filterOptions || this.filterOptions}
                    allowCreate={this.props.allowCreate}
                    promptTextCreator={this.props.promptTextCreator}
                    value={this.state.extra.fullObject}
                    autoBlur={false}
                    isLoading={this.props.isLoading}
                    valueKey={this.props.valueKey || "id"}
                    labelKey={this.props.labelKey || "text"}
                    loadingPlaceholder={this.state.extra.loadingPlaceholder}
                    multi={this.props.multiple}
                    clearable={this.props.allowClear}
                    disabled={this.props.disabled}
                    noResultsText={this.props.noResultsText}
                    clearAllText={this.props.clearAllText}
                    clearValueText={this.props.clearValueText}
                    addLabelText={this.props.addLabelText}
                    searchPromptText={this.props.searchPromptText}
                    optionRenderer={this.getOptionRenderer}
                    valueRenderer={this.getValueRenderer}
                    onChange={this.onChange} />
            </WrapperSelect>
        );
    }

    onChange = (event) => {
        this.setValue(event);
        this.handleChangeEvent(event);
    }
}
