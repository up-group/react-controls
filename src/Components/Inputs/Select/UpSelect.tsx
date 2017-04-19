import * as React from 'react'
//import Component from './styles';
import * as ReactDOM from "react-dom"
import * as Select from "react-select"
import axios from 'axios'

import {BaseControl} from '../../../Common/BaseControl/BaseControl' 
import {UpSelectProps} from './'

import WrapperSelect from './styles' ;

export default class UpSelect extends BaseControl<UpSelectProps, any> {
    
    public static defaultProps : UpSelectProps = {
        noResultsText : "Aucun résultat trouvé",
        clearAllText : "Effacer",
        clearValueText : "Déselectionner",
        addLabelText : "Ajouter",
        searchPromptText : "-- Rechercher",
        placeholder: "-- Sélectionner",
        loadingPlaceholder: "Chargement en cours",
        default:null,
        getFullData: false,
        isNullable:true,
        isRequired:false,
        autoload:false
    }

    constructor(p, c) {
        super(p, c);
        this.getValueRenderer = this.getValueRenderer.bind(this) ;
        this.getOptionRenderer = this.getOptionRenderer.bind(this) ;
    }

    _componentDidMount() {
    }

    handleChangeJsEvent(args: any) {
        return args.target.value;
    }

    isEmpty(value) {
        return value === null || value === undefined || value === "";
    }

    onChange(data: any) {
        return data;
    }
    getOptionRenderer(option) {
        if(this.props.optionRenderer) {
            const OptionRenderer = this.props.optionRenderer ;
            return (<OptionRenderer {...option}></OptionRenderer>)
        } else {
            var _idKey = "id" ;
            var _textKey = "text" ;
            
            if(this.props.dataSource) {
                _idKey = this.props.dataSource.id || _idKey;
                _textKey = this.props.dataSource.text ||  _textKey;
            }
            return (<span key={`option_{value[_idKey]}`} >{option[_textKey]}</span>)
        }
    }
    getValueRenderer(value) {
        if(this.props.valueRenderer) {
            const ValueRenderer = this.props.valueRenderer ;
            return (<ValueRenderer {...value}></ValueRenderer>)
        } else {
            var _idKey = "id" ;
            var _textKey = "text" ;
            
            if(this.props.dataSource) {
                _idKey = this.props.dataSource.id || _idKey;
                _textKey = this.props.dataSource.text ||  _textKey;
            }
            return (<span key={`option_{value[_idKey]}`} >{value[_textKey]}</span>)
        }
    }
    renderControl() {
        const dataSource = this.props.dataSource ;
        var loadOptions:any = false;
        
        const SelectComponent = typeof dataSource !== "undefined"
			? Select.Async
			: Select;

        if(typeof dataSource !== "undefined") {
            var queryParam = dataSource.queryParameterName || 'search';
            var minmumInputLength = this.props.minimumInputLength ;
            loadOptions = function(input:string) {
                return axios.get(`${dataSource.query}?${queryParam}=${input}`)
                    .then((response) => {
                        var data = response.data ;
                        return {options : data};
                    });
            };
        }
        var specProps:any = {
            options : this.props.data
        }
        if(loadOptions !== false) {
            specProps = {
                "loadOptions": loadOptions,
                "autoload": this.props.autoload
            }
        }
        
        return (
        <WrapperSelect>
            <SelectComponent 
                {...specProps}
                placeholder={this.props.placeholder}
                value={this.props.value}
                autoBlur={false}
                valueKey="id"
                labelKey="title"
                loadingPlaceholder={this.props.loadingPlaceholder}
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
                onChange={this.handleChangeEvent}
            />
        </WrapperSelect>
        );
    }

    componentDidMount() {
        
    }

    componentWillUnmount() {
        
    }
}
