// Imports
import * as React from 'react'
import * as update from 'react-addons-update'
import * as classnames from 'classnames'
import * as Select from 'react-select'
import axios from 'axios'
import { BaseControlComponent } from '../_Common/BaseControl/BaseControl'
import * as queryString from 'query-string';
import { UpSelectProps } from './types';
import { Props } from 'react-select/lib/Select';
import { style } from 'typestyle';

import { color } from 'csx';
import { ValueType, ActionMeta } from 'react-select/lib/types';
import { eventFactory } from '../../../Common/utils/eventListener';
import { isEmpty } from '../../../Common/utils'
import defaultTheme from '../../../Common/theming/'
import { ThemeInterface } from 'theming/types'

const CancelToken = axios.CancelToken;

const groupStyles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
};

const groupBadgeStyles: React.CSSProperties = {
   // backgroundColor: '#EBECF0',
    borderRadius: '2em',
    //color: '#172B4D',
    display: 'inline-block',
    fontSize: '12px',
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

const getLabelStyle = props => {
    const floatLabel = {
      transform: 'translate(0, 2px) scale(.75) !important',
      fontSize: '12px !important',
    };
    return style({
        marginTop: props.floatingLabel ? '16px' : '0px' ,
        position: 'relative',
        $nest: {
            '&.up-select-wrapper .up-select-label' : {
                position: 'absolute',
                left: 0,
                top: '-10px',
                zIndex: 1,
                fontSize: "14px",
                color: props.theme.colorMap.gray6,
                transformOrigin: "top left",
                transform: "translate(0, 16px) scale(1)",
                transition: "all .1s ease-in-out",
            },
            '& .up-select-label-focused': {
               ...floatLabel
            },
            '& .up-select-label-valued': {
                ...floatLabel
             }
        }
    })
}
const formatMinimumInputLenghMessage = (minimumInputLength:number) => `Veuillez renseigner au minimum ${minimumInputLength} caractères`;

const customStyles = (theme : ThemeInterface, value)  => ({
    option: (provided, state) => ({
        ...provided,
        fontWeight: state.isSelected ? 400 : provided.fontWeight || 'inherit',
        backgroundColor: 'transparent',
        padding: 10,
        fontSize: '14px',
        cursor: 'pointer',
        color: state.isSelected ? theme.colorMap.primary :theme.colorMap.grey1,
        ':active': {
            color: theme.colorMap.primary,
            fontWeight: 400,
            backgroundColor: state.isSelected ? 'transparent' : `${theme.colorMap.lightGrey1} !important`,
        },
        ':hover': {
            fontWeight: 400,
            backgroundColor: state.isSelected ? 'transparent' : `${theme.colorMap.lightGrey1} !important`,
        }
    }),
    control: (provided, state) => ({
        ...provided,
        outline: 'none',
        borderRadius: 0,
        color: provided.color,
        fontSize: '14px',
        border: state.isFocused ? 0 : 0,
        // This line disable the blue border
         boxShadow: state.isFocused ? 0 : 0,
        '&:hover': {
            border: state.isFocused ? 0 : 0,
            borderBottom: `1px solid ${state.isFocused ? theme.colorMap.primary : theme.colorMap.gray6}`,
        },
        height:'29px !important',
        minHeight:'unset !important',    
        borderBottom: `1px solid ${state.isFocused ? theme.colorMap.primary : theme.colorMap.gray6}`
    }),
    dropdownIndicator: (provided, state) => ({
        ...provided,
        color: theme.colorMap.grey1,
        'svg, svg path': {
            fill: theme.colorMap.grey1,
        },
        '&:hover': {
            cursor : 'pointer'
        },
        padding: 0,
    }),
    indicatorSeparator: () => null,// this line remove the separator
    valueContainer : (provided, state) => ({
        ...provided,
        padding: '0px',
        paddingBottom:'6px',
        '&:hover': {
            cursor : 'pointer'
        }
    }),
    multiValueLabel: (provided, state) => ({
        ...provided,
        backgroundColor: theme.colorMap.primary,
        color: 'white',
    }),
    multiValueRemove: (provided, state) => ({
        ...provided,
        backgroundColor: theme.colorMap.primary,
        color: 'white',
    }),
    menu:(provided,state)=> {
        return ({
        ...provided,
        marginTop: '0px',
        borderRadius:'0px',
        border: `1px solid ${theme.colorMap.lightGrey1}`
    })},
    clearIndicator: (provided, state) => ({
        ...provided,
        color: theme.colorMap.primary,
        'svg, svg path': {
            fill: theme.colorMap.primary,
        },
        '&:hover': {
            cursor : 'pointer'
        },
        padding: '0px'
    }),
    container: (provided, state) => ({
        ...provided,
        border: 0,
        outline: 'none'
    }),
    singleValue: (provided, state) => {
        const opacity = state.isDisabled ? 0.5 : 1;
        const transition = 'opacity 300ms';
        return { ...provided, opacity, transition, color: theme.colorMap.grey1};
    },
})

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
        returnType: "full",
        formatGroupLabel: formatGroupLabel,
        formatMinimumInputLenghMessage: formatMinimumInputLenghMessage,
        isRtl: false,
        isSearchable: true,
        minMenuHeight: 140,
        maxMenuHeight: 300,
        menuPlacement: 'auto',
        menuShouldBlockScroll: false,
        menuShouldScrollIntoView: true,
        openMenuOnFocus: false,
        openMenuOnClick: true,
        tabIndex: "0",
        closeMenuOnSelect: true,
        createOptionPosition: 'last',
        theme: defaultTheme
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
        let valueToParse = Array.isArray(receiveValue) ? [...receiveValue] : { ...receiveValue };
        if (this.props.multiple === true) {
            let isPairArray = this.isPairArray(receiveValue);
            let newState = null;
            if (isPairArray === true) {
                const extra = this.state.extra === undefined || this.state.extra === null ? {} : { ...this.state.extra };
                extra.fullObject = receiveValue;
                newState = { ...this.state, extra };
            } else if (isPairArray == false && Array.isArray(receiveValue) === true && this.props.data != null) {
                const extra = this.state.extra === undefined || this.state.extra === null ? {} : { ...this.state.extra };
                let data = this.makePairFromIds(receiveValue);
                extra.fullObject = data;
                newState = { ...this.state, extra }
                return this.parseValue(data)
            } else if (receiveValue == null) {
                newState = update(this.state, { extra: { fullObject: { $set: null } } });
            }

            if (newState != null && this.props.closeMenuOnSelect) {
                newState.extra.menuIsOpen = false;
            }

            this.setState(newState);
        } else {
            let isPair = this.isPair(receiveValue);
            let newState = null;
            if (isPair === true) {
                const extra = this.state.extra === undefined || this.state.extra === null ? {} : { ...this.state.extra };
                extra.fullObject = receiveValue;
                newState = { extra: extra };
            } else if (isPair === false && this.props.data != null) {
                let data = this.makePairFromId(receiveValue);
                const extra = this.state.extra === undefined || this.state.extra === null ? {} : { ...this.state.extra };
                extra.fullObject = data;
                newState = { extra: extra };
                valueToParse = data;
            } else if (receiveValue == null) {
                newState = update(this.state, { extra: { fullObject: { $set: null } } });
            }

            if (newState != null && this.props.closeMenuOnSelect) {
                newState.extra.menuIsOpen = false;
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
            for (let text in arr) {
                const sourceText = text.replace("{", "").replace("}", "");
                if (obj.hasOwnProperty(sourceText) == false) {
                    return false
                }
            }
            return obj.hasOwnProperty(this.keyId);
        }
    }

    private defaultIsOptionIsSelected = (option, selectedOptions) => selectedOptions.find(o => o[this.keyId] === option[this.keyId]) != null

    parseValue = (receiveValue: any) => {
        if (this.props.returnType === "id" && typeof (receiveValue) === "object" && receiveValue != null) {
            if (this.props.multiple === true && Array.isArray(receiveValue)) {
                return receiveValue.map(((v) => { return v != null ? (v[this.keyId] || v["id"] || v) : null; }));
            } else {
                return receiveValue[this.keyId] || receiveValue["id"];
            }
        }

        return receiveValue;
    }

    getOptionLabel = (option: object) => option[this.keyText];

    formatOptionLabel = (option) => {
        const { color } = option;
        const text = this.getOptionLabel(option);
        return (
            <div style={{ display: "flex", alignItems: "center", cursor: 'pointer' }}>
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
        )
    }

    getValue(data: any) {
        if (data == null) {
            return null;
        }

        if (this.props.returnType === "id") {
            const fullobject = data;
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
        const filterMatched = !filter || (option.label != null && (typeof option.label == "object" || `${option.label}`.toLowerCase().includes(filter.toLowerCase())));
        return filterMatched ;
    }

    private findInObject = (object, path: string[]) => {
        const local = path.shift();

        if (path.length === 0) {
            return object[local];
        } else {
            return this.findInObject(object[local], path);
        }
    }

    /** Retourne le label pour "Créer ..." option dans le menu */
    formatCreateLabel = (inputValue: string) => {
        if (this.props.formatCreateLabel != null) {
            return this.props.formatCreateLabel(inputValue);
        }
        return <p>{`Créer "${inputValue}"`}</p>;
    };

    private inputDoesntMatchSelectValue = (inputValue : string, selectValue :  any[]) : boolean => (selectValue == null || selectValue.filter(option => option[this.keyText] && option[this.keyText].toLowerCase() == inputValue.toLowerCase()).length == 0) ;
    
    private inputDoesntMatchOneOfSelectOptions = (inputValue : string, selectOptions : any[]) : boolean => (selectOptions == null || selectOptions.filter(option => option[this.keyText] && option[this.keyText].toLowerCase() == inputValue.toLowerCase()).length == 0) ;

    /** Retourne si l'option  "Créer ..." doit être affichée */
    isValidNewOption = (inputValue, selectValue, selectOptions) => {
        if (this.props.isValidNewOption != null) {
            return this.props.isValidNewOption(inputValue, selectValue, selectOptions);
        }

        const isValidNewOption = !isEmpty(inputValue)
        && this.inputDoesntMatchSelectValue(inputValue, selectValue)
        && this.inputDoesntMatchOneOfSelectOptions(inputValue, selectOptions);
        
        return isValidNewOption;
    };

    /** Retourne le nouvel objet */
    getNewOptionData = (inputValue, optionLabel) => {
        if (this.props.getNewOptionData != null) {
            return this.props.getNewOptionData(inputValue, optionLabel);
        }
        return { [this.keyText]: optionLabel, [this.keyId]: inputValue, __isNew__: true };
    };

    showError() {
        return this.props.showError !== undefined
            ? this.props.showError === true
            : this.hasError;
    }

    showSuccess() {
        return this.props.showSuccess
    }

    renderControl() {
        const dataSource = this.props.dataSource;
        let loadOptions: any = false;

        if (dataSource !== undefined) {
            const queryParam = dataSource.queryParameterName || 'search';
            const minimumInputLength = this.props.minimumInputLength;
            loadOptions = (input: string) => {
                if (minimumInputLength && input.length < minimumInputLength) {
                    if (input.length !== 0) {
                        const newState = update(this.state, { extra: { loadingPlaceholder: { $set: this.props.formatMinimumInputLenghMessage(minimumInputLength)}}});
                        this.setState(newState);
                    } else {
                        const newState = update(this.state, { extra: { loadingPlaceholder: { $set: this.props.loadingPlaceholder } } });
                        this.setState(newState);
                    }
                    return false;
                } else {
                    const newState = update(this.state, { extra: { loadingPlaceholder: { $set: this.props.loadingPlaceholder } } });
                    this.setState(newState);
                }
                if (this.timeOutLoadOptions) {
                    clearTimeout(this.timeOutLoadOptions);
                }

                if (this.axiosSource) {
                    this.axiosSource.cancel('Next request in progress');
                }

                if (this.props.dataSource.fetchData) {
                    return this.props.dataSource.fetchData(input)
                        .then((data) => {
                            if (dataSource.handleResponse) {
                                data = dataSource.handleResponse(data);
                            }
                            return data;
                        }).catch(function (thrown) {
                            throw thrown;
                        });
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
                return axios.get(query, {
                    cancelToken: this.axiosSource.token
                }).then((response) => {
                    let data = response.data;

                    if (dataSource.handleResponse) {
                        data = dataSource.handleResponse(data);
                    }

                    this.axiosSource = null;
                    return data;
                }).catch(function (thrown) {
                    if (axios.isCancel(thrown)) {
                        console.log('Request canceled', thrown.message);
                    }
                    this.axiosSource = null;
                    throw thrown;
                });
            };
            loadOptions = loadOptions.bind(this);
        }

        const data = this.props.data;
        let specProps: any = {
            options: data,
            loadOptions: false,
        }

        if (loadOptions !== false) {
            specProps = {
                loadOptions,
                autoload: this.props.autoload
            }
        }
        let allowCreate = this.props.allowCreate ;

        let formatCreateLabel = undefined ;
        let isValidNewOption = undefined ;

        if(this.props.isSearchable && !allowCreate) {
            const emptyFormatCreateLabel = s => "" ;
            const emptyIsValidNewOption = () => false ;
            allowCreate = true;
            formatCreateLabel= emptyFormatCreateLabel ;
            isValidNewOption = emptyIsValidNewOption ;
        }

        if (allowCreate) {
            specProps.allowCreateWhileLoading = this.props.allowCreateWhileLoading;
            specProps.formatCreateLabel = formatCreateLabel || this.formatCreateLabel;
            specProps.isValidNewOption = isValidNewOption  || this.isValidNewOption;
            specProps.getNewOptionData = this.getNewOptionData;
            specProps.onCreateOptio
        }

        if (this.props.allowCreate) {
            specProps.allowCreateWhileLoading = this.props.allowCreateWhileLoading;
            specProps.formatCreateLabel = this.formatCreateLabel;
            specProps.isValidNewOption = this.isValidNewOption;
            specProps.getNewOptionData = this.getNewOptionData;
            specProps.onCreateOption = this.props.onCreateOption;
            specProps.createOptionPosition = this.props.createOptionPosition;
        }

        const value = this.isControlled ? this.props.value : this.state.extra.fullObject;
        const selectComponentProps: Props = {
            ...specProps,
            value,
            color: '#354052',
            name: this.props.name,
            placeholder: this.props.floatingLabel ? '': this.props.placeholder,
            filterOption: (option, filter) => {
                const filterHandler = this.props.filterOptions || this.filterOptions;
                return filterHandler(option, filter);
            },
            allowCreate: allowCreate,
            promptTextCreator: this.props.promptTextCreator,
            autoBlur: false,
            isLoading: this.props.isLoading,
            loadingMessage: (input: string) => this.state.extra.loadingPlaceholder,
            isMulti: this.props.multiple,
            isClearable: this.props.allowClear,
            isDisabled: this.props.disabled,
            noOptionsMessage: (inputValue: string) => this.props.noResultsText,
            clearAllText: this.props.clearAllText,
            clearValueText: this.props.clearValueText,
            addLabelText: this.props.addLabelText,
            searchPromptText: this.props.searchPromptText,
            optionRenderer: this.getOptionRenderer,
            valueRenderer: this.getValueRenderer,
            onChange: this.onChange.bind(this, this.props.name),
            menuIsOpen: this.state.extra.menuIsOpen,
            onMenuOpen: () => this.setState(update(this.state, { extra: { menuIsOpen: { $set: true } } })),
            onMenuClose: () => this.setState(update(this.state, { extra: { menuIsOpen: { $set: false } } })),
            onInputChange: (inputValue: string) => this.setState(update(this.state, { extra: { inputValue: { $set: inputValue } } })),
            getOptionLabel: this.getOptionLabel,
            getOptionValue: (option: object) => this.parseValue(option),
            inputValue: this.state.extra.inputValue,
            defaultInputValue: "",
            formatGroupLabel: this.props.formatGroupLabel,
            formatOptionLabel: this.props.formatOptionLabel,
            isOptionDisabled: this.props.isOptionDisabled,
            isOptionSelected: this.props.isOptionSelected || this.defaultIsOptionIsSelected,
            isRtl: this.props.isRtl,
            isSearchable: this.props.isSearchable,
            minMenuHeight: this.props.minMenuHeight,
            maxMenuHeight: this.props.maxMenuHeight,
            menuPlacement: this.props.menuPlacement,
            menuShouldBlockScroll: this.props.menuShouldBlockScroll,
            menuShouldScrollIntoView: this.props.menuShouldScrollIntoView,
            onBlur: this.props.onBlur,
            onFocus: this.props.onFocus,
            onKeyDown: this.props.onKeyDown,
            onMenuScrollToBottom: this.props.onMenuScrollToBottom,
            onMenuScrollToTop: this.props.onMenuScrollToTop,
            openMenuOnFocus: this.props.openMenuOnFocus,
            openMenuOnClick: this.props.openMenuOnClick,
            closeMenuOnSelect: this.props.closeMenuOnSelect,
            styles: customStyles(this.props.theme,this.state.value),
        }
        const { floatingLabel } = this.props;
        const FloatingLable = floatingLabel && (
          <label
            className={classnames('up-select-label', {
              'up-select-label-focused': !!this.state.extra
                .menuIsOpen,
              'up-select-label-valued': !!this.state.extra
                .fullObject,
            })}>
            {floatingLabel}
          </label>
        );

        return (
          <div
            className={classnames(
              this.props.className,
              getLabelStyle(this.props),
              'up-select-wrapper'
            )}>
            {dataSource != null && allowCreate === true && (
              <>
                {FloatingLable}
                <Select.AsyncCreatable
                  {...(selectComponentProps as any)}
                />
              </>
            )}
            {dataSource != null && allowCreate === false && (
              <>
                {FloatingLable}
                <Select.Async {...(selectComponentProps as any)} />
              </>
            )}
            {dataSource == null && allowCreate === true && (
              <>
                {FloatingLable}
                <Select.Creatable {...selectComponentProps} />
              </>
            )}
            {dataSource == null && allowCreate === false && (
              <>
                {FloatingLable}
                <Select.SelectBase {...selectComponentProps} />
              </>
            )}
          </div>
        );
    }

    onChange = (name: string, value: ValueType<object>, action: ActionMeta) => {
        this.setValue(value);
        this.handleChangeEvent(eventFactory(name || this.props.name, value), value);
    }
}
