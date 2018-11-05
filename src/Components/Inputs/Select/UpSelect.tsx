// Imports
import * as React from 'react'
import * as update from 'react-addons-update'
import * as classnames from 'classnames'
import * as Select from 'react-select'

import axios from 'axios'
import { BaseControlComponent } from '../_Common/BaseControl/BaseControl'
import * as queryString from 'query-string';
import { UpSelectProps } from './types';
import { getStyles } from './styles';
import { Props } from 'react-select/lib/Select';

const CancelToken = axios.CancelToken;

const groupStyles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  };

const groupBadgeStyles : React.CSSProperties = {
    backgroundColor: '#EBECF0',
    borderRadius: '2em',
    color: '#172B4D',
    display: 'inline-block',
    fontSize: 12,
    fontWeight: 500,
    lineHeight: '1',
    minWidth: 1,
    padding: '0.16666666666667em 0.5em',
    textAlign: 'center',
  };
  
const formatGroupLabel = data => (
    <div style={groupStyles}>
        <span>{data.label}</span>
        <span style={groupBadgeStyles}>{data.options.length}</span>
    </div>
);

const formatOptionLabel = ({ color, text }) => (
    <div style={{ display: "flex", alignItems: "center" }}>
      {color && <div
        style={{
          background: color,
          borderRadius: 6,
          height: 6,
          width: 6,
          marginRight: 6
        }}
      />
      }
      {text}
    </div>
);
  
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
        width: 'full',
        returnType: "full",
        formatGroupLabel : formatGroupLabel,
        formatOptionLabel : formatOptionLabel,
        isRtl: false,
        isSearchable: true,
        minMenuHeight : 140,
        maxMenuHeight : 300,
        menuPlacement: 'auto',
        menuShouldBlockScroll: false,
        menuShouldScrollIntoView: true,
        openMenuOnFocus: false,
        openMenuOnClick: true,
        tabIndex: "0",
        closeMenuOnSelect: true,
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
        let valueToParse = {...receiveValue};
        if (this.props.multiple === true) {
            let isPairArray = this.isPairArray(receiveValue);
            let newState = null;
            if (isPairArray === true) {
                const extra = this.state.extra === undefined || this.state.extra === null ? {} : {...this.state.extra};
                extra.fullObject = receiveValue;
                newState = { extra } ;
            } else if (isPairArray == false && Array.isArray(receiveValue) === true && this.props.data != null) {
                const extra = this.state.extra === undefined || this.state.extra === null ? {} : {...this.state.extra};
                let data = this.makePairFromIds(receiveValue);
                extra.fullObject = data;
                newState = { extra } ;
                return this.parseValue(data)
            } else if (receiveValue == null) {
                newState = update(this.state, { extra: { fullObject: { $set: null } } });
            }

            if(this.props.closeMenuOnSelect) {
                newState.extra.menuIsOpen = false ;
            }

            this.setState(newState);
        } else {
            let isPair = this.isPair(receiveValue);
            let newState = null;
            if (isPair === true) {
                const extra = this.state.extra === undefined || this.state.extra === null ? {} : {...this.state.extra};
                extra.fullObject = receiveValue;
                newState = { extra: extra };
            } else if (isPair === false && this.props.data != null) {
                let data = this.makePairFromId(receiveValue);
                const extra = this.state.extra === undefined || this.state.extra === null ? {} : {...this.state.extra};
                extra.fullObject = data;
                newState = { extra: extra };
                valueToParse = data ;
            } else if (receiveValue == null) {
                newState = update(this.state, { extra: { fullObject: { $set: null } } });
            }
            
            if(this.props.closeMenuOnSelect) {
                newState.extra.menuIsOpen = false ;
            }
            
            this.setState(newState);
        }
        return this.parseValue(valueToParse);
    }

    private makePairFromIds = (ids: any[]) => {
        return ids.map(this.makePairFromId).filter(v => { return v !== null; });
    }

    private makePairFromId = (id) => {
        for (let i = 0; i < this.props.data.length; i++) {
            if (this.props.data[i][this.keyId] === id) {
                return {
                    [this.keyId]: this.props.data[i][this.keyId],
                    [this.keyText]: this.props.data[i][this.keyText]
                };
            }
        }
        return null;
    }

    private isPairArray = (obj: any[]) => {
        if (obj == null || Array.isArray(obj) == false) {
            return false;
        }
        return obj.every(this.isPair)
    }

    private isPair = (obj) => {
        if (obj == null) {
            return false;
        }

        if ((obj.hasOwnProperty(this.keyId) && obj.hasOwnProperty(this.keyText)) || (obj.hasOwnProperty("id") && obj.hasOwnProperty("text"))) {
            return true;
        }

        const regexp = /{-?[\w]+}/gi;
        const arr = this.keyText.match(regexp);
        if (arr === null) {
            return obj.hasOwnProperty(this.keyId) && obj.hasOwnProperty(this.keyText);
        } else {
            for (let i = 0; i < arr.length; i++) {
                const sourceText = arr[i].replace("{", "").replace("}", "");
                if (obj.hasOwnProperty(sourceText) == false) {
                    return false
                }
            }
            return obj.hasOwnProperty(this.keyId);
        }
    }

    parseValue = (receiveValue: any) => {
        if (this.props.returnType === "id" && typeof (receiveValue) === "object" && receiveValue != null) {
            if (this.props.multiple === true) {
                return receiveValue.map(((v) => { return v != null ? (v[this.keyId] || v["id"]) : null; }));
            } else {
                return receiveValue[this.keyId] || receiveValue["id"];
            }
        }

        return receiveValue;
    }

    getValue(data: any) {
        if (data == null) {
            return null;
        }

        if (this.props.returnType === "id") {
            const fullobject = this.state.extra.fullObject;
            if (this.props.multiple && fullobject != null) {
                return fullobject
                    .map((v) => {
                        if (v != null && (v.hasOwnProperty(this.keyId)))
                            return v[this.keyId] != null ? v[this.keyId] : null;
                        else if (v != null && (v.hasOwnProperty("id")))
                            return v["id"] != null ? v["id"] : null;
                        else
                            return null;
                    })
                    .filter((v) => { return v !== null; });
            } else {
                if (fullobject != null && fullobject.hasOwnProperty(this.keyId))
                    return fullobject[this.keyId];
                else if (fullobject != null && fullobject.hasOwnProperty("id"))
                    return fullobject["id"];
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
            if (option[this.keyId])
                return (<span key={`option_${option[this.keyId]}`} >{this.format(option, this.keyText)}</span>)
            else
                return (<span key={`option_${option["id"]}`} >{this.format(option, option["text"])}</span>)
        }
    }

    getValueRenderer = (value) => {
        if (this.props.valueRenderer) {
            const ValueRenderer = this.props.valueRenderer;
            return (<ValueRenderer {...value}></ValueRenderer>)
        } else {
            if (value[this.keyId])
                return (<span key={`option_${value[this.keyId]}`} >{this.format(value, this.keyText)}</span>)
            else
                return (<span key={`option_${value["id"]}`} >{this.format(value, value["text"])}</span>)
        }
    }

    private format(object, strFormat: string) {
        const regexp = /{-?[\w]+}/gi;
        const arr = strFormat.match(regexp);
        if (arr === null) {
            return object[strFormat] || object["text"];
        }

        for (let i = 0; i < arr.length; i++) {
            const sourceText = arr[i].replace("{", "").replace("}", "");
            strFormat = strFormat.replace(arr[i], this.findInObject(object, sourceText.split(".")));
        }

        return strFormat;
    }

    filterOptions = (option, filter) => {
        return option[this.keyText] != null && option[this.keyText].toLowerCase().indexOf(filter.toLowerCase()) >= 0 ;
    }

    private findInObject = (object, path: string[]) => {
        const local = path.shift();

        if (path.length === 0) {
            return object[local];
        } else {
            return this.findInObject(object[local], path);
        }
    }

    renderControl() {
        const dataSource = this.props.dataSource;
        let loadOptions: any = false;

        if (dataSource !== undefined) {
            const queryParam = dataSource.queryParameterName || 'search';
            const minimumInputLength = this.props.minimumInputLength;
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
                const _loadOptionsAfterDealy = () => {
                    if (this.axiosSource) {
                        this.axiosSource.cancel('Next request in progress');
                    }
                    let qs = `${queryParam}=${input}`;
                    if (dataSource.getExtraParams) {
                        const params = dataSource.getExtraParams();
                        if (params) {
                            qs += `&${queryString.stringify(params)}`;
                        }
                    }
                    let query = `${dataSource.query}?${qs}`;
                    if (dataSource.endPoint) {
                        query = `${dataSource.endPoint}/${query}`
                    }
                    this.axiosSource = CancelToken.source();
                    axios.get(query, {
                        cancelToken: this.axiosSource.token
                    }).then((response) => {
                        let data = response.data;

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

        const data = this.props.data;
        let specProps: any = {
            options: data
        }

        if (loadOptions !== false) {
            specProps = {
                "loadOptions": loadOptions,
                "autoload": this.props.autoload
            }
        }

        const selectComponentProps : Props = {
            ...specProps,
            placeholder: this.props.placeholder,
            filterOptions: this.props.filterOptions || this.filterOptions,
            allowCreate:this.props.allowCreate,
            promptTextCreator:this.props.promptTextCreator,
            value: this.state.extra.fullObject,
            autoBlur:false,
            isLoading:this.props.isLoading,
            loadingMessage:(input: string) => this.state.extra.loadingPlaceholder,
            isMulti:this.props.multiple,
            isClearable:this.props.allowClear,
            isDisabled:this.props.disabled,
            noOptionsMessage: (inputValue:string) => this.props.noResultsText,
            clearAllText:this.props.clearAllText,
            clearValueText:this.props.clearValueText,
            addLabelText:this.props.addLabelText,
            searchPromptText:this.props.searchPromptText,
            optionRenderer:this.getOptionRenderer,
            valueRenderer:this.getValueRenderer,
            onChange:this.onChange,
            menuIsOpen: this.state.extra.menuIsOpen,
            
            onMenuOpen: () => this.setState(update(this.state, {extra : { menuIsOpen : { $set  : true }}})),
            onMenuClose: () => this.setState(update(this.state, {extra : { menuIsOpen : { $set  : false }}})),
            onInputChange: (inputValue:string) => this.setState(update(this.state, {extra : { inputValue : { $set  : inputValue }}})),
            getOptionLabel : (option: object) => option[this.keyText],
            getOptionValue : (option:object) => this.parseValue(option),
            inputValue: this.state.extra.inputValue,
            defaultInputValue: "",
            formatGroupLabel: this.props.formatGroupLabel,
            formatOptionLabel: this.props.formatOptionLabel,
            isOptionDisabled: this.props.isOptionDisabled,
            isOptionSelected: this.props.isOptionSelected,
            isRtl : this.props.isRtl,
            isSearchable : this.props.isSearchable,
            minMenuHeight : this.props.minMenuHeight,
            maxMenuHeight : this.props.maxMenuHeight,
            menuPlacement : this.props.menuPlacement,
            menuShouldBlockScroll : this.props.menuShouldBlockScroll,
            menuShouldScrollIntoView : this.props.menuShouldScrollIntoView,
            onBlur: this.props.onBlur,
            onFocus: this.props.onFocus,
            onKeyDown: this.props.onKeyDown,
            onMenuScrollToBottom: this.props.onMenuScrollToBottom,
            onMenuScrollToTop: this.props.onMenuScrollToTop,
            openMenuOnFocus: this.props.openMenuOnFocus,
            openMenuOnClick: this.props.openMenuOnClick,
            closeMenuOnSelect: this.props.closeMenuOnSelect,
        }
       
        return (
            <div className={classnames('up-select-wrapper', getStyles(this.props))}>
                {dataSource != null && this.props.allowCreate === true &&
                    <Select.AsyncCreatable {...selectComponentProps} />
                }
                {dataSource != null && this.props.allowCreate === false &&
                    <Select.Async {...selectComponentProps} />
                }
                {dataSource == null && this.props.allowCreate === true &&
                    <Select.Creatable {...selectComponentProps} />
                }
                {dataSource == null && this.props.allowCreate === false &&
                    <Select.SelectBase {...selectComponentProps} />
                }
            </div>
        );
    }

    onChange = (event) => {
        const data = this.setValue(event);
        this.handleChangeEvent(data);
    }
}
