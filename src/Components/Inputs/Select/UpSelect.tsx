// Imports
import update from 'react-addons-update';
import classnames from 'classnames';
import AsyncCreatableSelect from 'react-select/async-creatable';
import axios from 'axios';
import { BaseControlComponent } from '../_Common/BaseControl/BaseControl';

import * as queryString from 'query-string';

import { UpSelectProps } from './types';
import SelectBase, { Props, ActionMeta, OnChangeValue } from 'react-select';
import { eventFactory } from '../../../Common/utils/eventListener';
import { isEmpty } from '../../../Common/utils';
import defaultTheme from '../../../Common/theming/';
import UpLigne from '../../Display/Ligne/UpLigne';
import { customStyles, getInlineStyle, getLabelStyle, groupBadgeStyles, groupStyles } from './styles';

import * as _ from 'lodash';

import { getTestableComponentProps } from '../../../Common/utils/types';
import Creatable from 'react-select/creatable';
import AsyncSelect from 'react-select/async';
import { ThemeInterface } from 'theming/types';

const CancelToken = axios.CancelToken;

const formatGroupLabel = data => (
  <div style={groupStyles}>
    <span>{data.label}</span>
    <span style={groupBadgeStyles}>{data.options.length}</span>
  </div>
);

const formatMinimumInputLenghMessage = (minimumInputLength: number) =>
  `Veuillez renseigner au minimum ${minimumInputLength} caractères`;

// Exports
export default class UpSelect extends BaseControlComponent<UpSelectProps, any> {
  timeOutLoadOptions: any;
  axiosSource: any;
  input: HTMLInputElement;

  public static defaultProps: UpSelectProps = {
    noResultsText: 'Aucun résultat trouvé',
    clearAllText: 'Effacer',
    clearValueText: 'Déselectionner',
    addLabelText: 'Ajouter "{label}" ?',
    searchPromptText: '-- Rechercher',
    placeholder: '-- Sélectionner',
    loadingPlaceholder: 'Chargement en cours...',
    displayMode: 'classic',
    default: null,
    autoload: false,
    showError: true,
    isLoading: false,
    allowCreate: false,
    returnType: 'full',
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
    tabIndex: 0,
    closeMenuOnSelect: true,
    createOptionPosition: 'last',
    theme: defaultTheme,
  };

  constructor(p, c) {
    super(p, c);
    this.state = {
      value: p.value ? this.parseValue(p.value) : p.default,
      extra: {
        loadingPlaceholder: p.loadingPlaceholder,
        fullObject: p.value ? p.value : p.default,
        inputValue: '',
      },
    };
  }

  componentDidMount() {
    const loadOptions = this.getLoadOptions();
    if (this.props.autoload && loadOptions != null) {
      this.setState(
        update(this.state, {
          extra: { isDataFetching: { $set: true } },
        })
      );
      loadOptions('')
        .then(data => {
          this.setState(
            update(this.state, {
              extra: {
                isDataFetching: { $set: false },
                loadedData: { $set: data },
              },
            }),
            () => {
              if (!_.isEmpty(this.state.extra.loadedData) && this.state.extra.loadedData.length == 1) {
                this.onChange(this.props.name, this.state.extra.loadedData[0], null);
              }
            }
          );
        })
        .catch(e =>
          this.setState(
            update(this.state, {
              extra: {
                isDataFetching: { $set: false },
              },
            })
          )
        );
    }
  }

  get keyId() {
    if (this.props.dataSource) {
      return this.props.dataSource.id || 'id';
    }
    return this.props.valueKey || 'id';
  }

  get keyText() {
    if (this.props.dataSource) {
      return this.props.dataSource.text || 'text';
    }
    return this.props.labelKey || 'text';
  }

  selectElement: any;

  setSelect = input => {
    // The ref function is called twice,
    // the first one with the component instance (as React)
    // and the second one with the DOM node instance
    if (this.selectElement == undefined) {
      this.selectElement = input;
    }
  };

  isEmpty(value) {
    return value === null || value === undefined || value === '';
  }

  setValue = (receiveValue: any) => {
    let valueToParse = Array.isArray(receiveValue) ? [...receiveValue] : { ...receiveValue };
    if (this.props.multiple === true) {
      const isArrayWithElementofIdAndText = this.isArrayWithElementofIdAndText(receiveValue);
      let newState = null;
      if (isArrayWithElementofIdAndText === true) {
        const extra = this.state.extra === undefined || this.state.extra === null ? {} : { ...this.state.extra };
        extra.fullObject = receiveValue;
        newState = { ...this.state, extra };
      } else if (
        isArrayWithElementofIdAndText == false &&
        Array.isArray(receiveValue) === true &&
        this.props.data != null
      ) {
        const extra = this.state.extra === undefined || this.state.extra === null ? {} : { ...this.state.extra };
        const data = this.makeElementOfIdAndTextFromIds(receiveValue);
        extra.fullObject = data;
        newState = { ...this.state, extra };
        return this.parseValue(data);
      } else if (receiveValue == null) {
        newState = update(this.state, {
          extra: { fullObject: { $set: null } },
        });
      }

      if (newState != null && this.props.closeMenuOnSelect) {
        newState.extra.menuIsOpen = false;
      }

      newState = update(newState, {
        extra: { inputValue: { $set: '' } },
      });

      this.setState(newState);
    } else {
      const isPair = this.isElementofIdAndText(receiveValue);
      let newState = null;
      if (isPair === true) {
        const extra = this.state.extra === undefined || this.state.extra === null ? {} : { ...this.state.extra };
        extra.fullObject = receiveValue;
        newState = { extra: extra };
      } else if (isPair === false && this.props.data != null) {
        const data = this.makeElementOfIdAndTextFromId(receiveValue);
        const extra = this.state.extra === undefined || this.state.extra === null ? {} : { ...this.state.extra };
        extra.fullObject = data;
        newState = { extra: extra };
        valueToParse = data;
      } else if (receiveValue == null) {
        newState = update(this.state, {
          extra: { fullObject: { $set: null } },
        });
      }

      if (newState == null && this.state.extra !== null) {
        const extra = { ...this.state.extra };
        extra.fullObject = undefined;
        newState = { extra: extra };
      }

      if (newState != null && this.props.closeMenuOnSelect) {
        newState.extra.menuIsOpen = false;
      }

      newState = update(newState, {
        extra: { inputValue: { $set: '' } },
      });

      this.setState(newState);
    }
    return this.parseValue(valueToParse);
  };

  private makeElementOfIdAndTextFromIds = (ids: any[]) => {
    return ids.map(this.makeElementOfIdAndTextFromId).filter(v => {
      return v !== null;
    });
  };

  private makeElementOfIdAndTextFromId = id => {
    for (let i = 0; i < this.props.data.length; i++) {
      if (this.props.data[i][this.keyId] === id) {
        return {
          [this.keyId]: this.props.data[i][this.keyId],
          [this.keyText]: this.props.data[i][this.keyText],
        };
      }
    }
    return null;
  };

  private isArrayWithElementofIdAndText = (obj: any[]) => {
    if (obj == null || Array.isArray(obj) == false) {
      return false;
    }
    return obj.every(this.isElementofIdAndText);
  };

  private isElementofIdAndText = obj => {
    if (obj == null) {
      return false;
    }

    if (
      (obj.hasOwnProperty(this.keyId) && obj.hasOwnProperty(this.keyText)) ||
      (obj.hasOwnProperty('id') && obj.hasOwnProperty('text'))
    ) {
      return true;
    }

    const regexp = /{-?[\w]+}/gi;
    const arr = this.keyText.match(regexp);
    if (arr === null) {
      return obj.hasOwnProperty(this.keyId) && obj.hasOwnProperty(this.keyText);
    } else {
      for (const text in arr) {
        const sourceText = text.replace('{', '').replace('}', '');
        if (obj.hasOwnProperty(sourceText) == false) {
          return false;
        }
      }
      return obj.hasOwnProperty(this.keyId);
    }
  };

  private defaultIsOptionIsSelected = (option, selectedOptions) =>
    selectedOptions.find(o => o[this.keyId] === option[this.keyId]) != null;

  parseValue = (receiveValue: any) => {
    if (this.props.returnType === 'id' && typeof receiveValue === 'object' && receiveValue != null) {
      if (this.props.multiple === true && Array.isArray(receiveValue)) {
        return receiveValue.map(v => {
          return v != null ? v[this.keyId] || v['id'] || v : null;
        });
      } else {
        return receiveValue[this.keyId] || receiveValue['id'];
      }
    }

    return receiveValue;
  };

  getOptionLabel = (option: object) => option[this.keyText];

  formatOptionLabel = option => {
    const { color } = option;
    const text = this.getOptionLabel(option);
    return (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          cursor: 'pointer',
        }}
      >
        {color && (
          <div
            style={{
              background: color,
              borderRadius: 6,
              height: 6,
              width: 6,
              marginRight: 6,
            }}
          />
        )}
        {text}
      </div>
    );
  };

  getValue(data: any) {
    if (data == null) {
      return null;
    }

    if (this.props.returnType === 'id') {
      const fullobject = data;
      if (this.props.multiple && fullobject != null) {
        return fullobject
          .map(v => {
            if (v != null && v.hasOwnProperty(this.keyId)) return v[this.keyId] != null ? v[this.keyId] : null;
            else if (v != null && v.hasOwnProperty('id')) return v['id'] != null ? v['id'] : null;
            else return null;
          })
          .filter(v => {
            return v !== null;
          });
      } else {
        if (fullobject != null && fullobject.hasOwnProperty(this.keyId)) return fullobject[this.keyId];
        else if (fullobject != null && fullobject.hasOwnProperty('id')) return fullobject['id'];
      }
    } else {
      return data;
    }
  }

  getOptionRenderer = option => {
    if (this.props.optionRenderer) {
      const OptionRenderer = this.props.optionRenderer;
      return <OptionRenderer {...option}></OptionRenderer>;
    } else {
      if (option[this.keyId])
        return <span key={`option_${option[this.keyId]}`}>{this.format(option, this.keyText)}</span>;
      else return <span key={`option_${option['id']}`}>{this.format(option, option['text'])}</span>;
    }
  };

  getValueRenderer = value => {
    if (this.props.valueRenderer) {
      const ValueRenderer = this.props.valueRenderer;
      return <ValueRenderer {...value}></ValueRenderer>;
    } else {
      if (value[this.keyId]) return <span key={`option_${value[this.keyId]}`}>{this.format(value, this.keyText)}</span>;
      else return <span key={`option_${value['id']}`}>{this.format(value, value['text'])}</span>;
    }
  };

  private format(object, strFormat: string) {
    const regexp = /{-?[\w]+}/gi;
    const arr = strFormat.match(regexp);
    if (arr === null) {
      return object[strFormat] || object['text'];
    }

    for (let i = 0; i < arr.length; i++) {
      const sourceText = arr[i].replace('{', '').replace('}', '');
      strFormat = strFormat.replace(arr[i], this.findInObject(object, sourceText.split('.')));
    }

    return strFormat;
  }

  filterOptions = (option, filter) => {
    const filterMatched =
      !filter ||
      (option.label != null &&
        (typeof option.label == 'object' || `${option.label}`.toLowerCase().includes(filter.toLowerCase())));
    return filterMatched;
  };

  private findInObject = (object, path: string[]) => {
    const local = path.shift();

    if (path.length === 0) {
      return object[local];
    } else {
      return this.findInObject(object[local], path);
    }
  };

  /** Retourne le label pour "Créer ..." option dans le menu */
  formatCreateLabel = (inputValue: string) => {
    if (this.props.formatCreateLabel != null) {
      return this.props.formatCreateLabel(inputValue);
    }
    return <p>{`Créer "${inputValue}"`}</p>;
  };

  private inputDoesntMatchSelectValue = (inputValue: string, selectValue: any[]): boolean =>
    selectValue == null ||
    selectValue.filter(option => option[this.keyText] && option[this.keyText].toLowerCase() == inputValue.toLowerCase())
      .length == 0;

  private inputDoesntMatchOneOfSelectOptions = (inputValue: string, selectOptions: any[]): boolean =>
    selectOptions == null ||
    selectOptions.filter(
      option => option[this.keyText] && option[this.keyText].toLowerCase() == inputValue.toLowerCase()
    ).length == 0;

  /** Retourne si l'option  "Créer ..." doit être affichée */
  isValidNewOption = (inputValue, selectValue, selectOptions) => {
    if (this.props.isValidNewOption != null) {
      return this.props.isValidNewOption(inputValue, selectValue, selectOptions);
    }

    const isValidNewOption =
      !isEmpty(inputValue) &&
      this.inputDoesntMatchSelectValue(inputValue, selectValue) &&
      this.inputDoesntMatchOneOfSelectOptions(inputValue, selectOptions);

    return isValidNewOption;
  };

  /** Retourne le nouvel objet */
  getNewOptionData = (inputValue, optionLabel) => {
    if (this.props.getNewOptionData != null) {
      return this.props.getNewOptionData(inputValue, optionLabel);
    }
    return {
      [this.keyText]: optionLabel,
      [this.keyId]: inputValue,
      __isNew__: true,
    };
  };

  showError() {
    return this.props.showError !== undefined
      ? typeof this.props.showError === 'function'
        ? (this.props.showError as Function)(this.state)
        : this.props.showError === true
      : this.hasError;
  }

  showSuccess() {
    return this.props.showSuccess;
  }

  private getLoadOptions = () => {
    let loadOptions = null;
    if (this.props.dataSource !== undefined) {
      const dataSource = this.props.dataSource;
      const queryParam = this.props.dataSource.queryParameterName || 'search';
      const minimumInputLength = this.props.autoload ? 0 : this.props.minimumInputLength;
      loadOptions = (input: string) => {
        if (minimumInputLength && input.length < minimumInputLength) {
          if (input.length !== 0) {
            const newState = {
              ...this.state,
              extra: {
                ...this.state.extra,
                inputValue: input,
                loadingPlaceholder: this.props.formatMinimumInputLenghMessage(minimumInputLength),
              },
            };
            this.setState(newState);
          } else {
            const newState = {
              ...this.state,
              extra: {
                ...this.state.extra,
                inputValue: input,
                loadingPlaceholder: this.props.loadingPlaceholder,
              },
            };
            this.setState(newState);
          }
          return false;
        } else {
          const newState = {
            ...this.state,
            extra: {
              ...this.state.extra,
              inputValue: input,
              loadingPlaceholder: this.props.loadingPlaceholder,
            },
          };
          this.setState(newState);
        }
        if (this.timeOutLoadOptions) {
          clearTimeout(this.timeOutLoadOptions);
        }

        if (this.axiosSource) {
          this.axiosSource.cancel('Next request in progress');
        }

        // TODO : Clean
        if (this.props.dataSource.fetchData) {
          return this.props.dataSource
            .fetchData(input, this.props.dataSource.defaultParameters)
            .then(data => {
              if (dataSource.handleResponse) {
                data = dataSource.handleResponse(data);
              }
              return data;
            })
            .catch(function (thrown) {
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
          query = `${dataSource.endPoint}/${query}`;
        }
        this.axiosSource = CancelToken.source();
        return axios
          .get(query, {
            cancelToken: this.axiosSource.token,
          })
          .then(response => {
            let data = response.data;

            if (dataSource.handleResponse) {
              data = dataSource.handleResponse(data);
            }

            this.axiosSource = null;
            return data;
          })
          .catch(function (thrown) {
            if (axios.isCancel(thrown)) {
              console.log('Request canceled', thrown.message);
            }
            this.axiosSource = null;
            throw thrown;
          });
      };
      loadOptions = loadOptions.bind(this);
    }
    return loadOptions;
  };

  renderControl() {
    let dataSource = this.props.dataSource;
    const loadOptions: any = this.getLoadOptions();

    const data = this.props.data || this.state.extra.loadedData;

    let specProps: any = {
      options: data,
      loadOptions: false,
    };

    if (this.state.extra.loadedData == null && loadOptions != null) {
      specProps = {
        loadOptions,
        autoload: this.props.autoload,
      };
    } else {
      dataSource = null;
    }

    let allowCreate = this.props.allowCreate;

    let formatCreateLabel = undefined;
    let isValidNewOption = undefined;

    if (this.props.isSearchable && !allowCreate) {
      const emptyFormatCreateLabel = s => '';
      const emptyIsValidNewOption = () => false;
      allowCreate = true;
      formatCreateLabel = emptyFormatCreateLabel;
      isValidNewOption = emptyIsValidNewOption;
    }

    if (this.props.isSearchable) {
      specProps.allowCreateWhileLoading = this.props.allowCreateWhileLoading;
      specProps.formatCreateLabel = formatCreateLabel || this.formatCreateLabel;
      specProps.isValidNewOption = isValidNewOption || this.isValidNewOption;
      specProps.getNewOptionData = this.getNewOptionData;
      specProps.onCreateOption = this.props.onCreateOption;
      specProps.createOptionPosition = this.props.createOptionPosition;
    } else if (this.props.allowCreate) {
      specProps.allowCreateWhileLoading = this.props.allowCreateWhileLoading;
      specProps.formatCreateLabel = this.formatCreateLabel;
      specProps.isValidNewOption = this.isValidNewOption;
      specProps.getNewOptionData = this.getNewOptionData;
      specProps.onCreateOption = this.props.onCreateOption;
      specProps.createOptionPosition = this.props.createOptionPosition;
    }

    let value = this.isControlled ? this.props.value : this.state.extra.fullObject;

    if (this.props.returnType == 'id') {
      if (this.props.multiple && value && typeof value[0] !== 'object') {
        value = data && data.filter(item => value.indexOf(item[this.keyId]) >= 0);
      } else if (typeof value !== 'object' && data) {
        value = data.find(item => item[this.keyId] == value);
      } else if (typeof value !== 'object' && this.state.extra.fullObject) {
        value = this.state.extra.fullObject;
      }
    } else if (typeof value !== 'object' && data) {
      value = data.find(item => item[this.keyId] == value);
    }

    const selectComponentProps: Props = {
      ...specProps,
      value,
      color: '#354052',
      name: this.props.name,
      placeholder: this.props.floatingLabel ? '' : this.props.placeholder,
      filterOption: (option, filter) => {
        const filterHandler = this.props.filterOptions || this.filterOptions;
        return filterHandler(option, filter);
      },
      allowCreate: allowCreate,
      promptTextCreator: this.props.promptTextCreator,
      autoBlur: false,
      isLoading: this.state.extra.isDataFetching || this.props.isLoading,
      loadingMessage: (input: string) => this.state.extra.loadingPlaceholder,
      isMulti: this.props.multiple,
      isClearable: this.props.allowClear,
      isDisabled: this.props.disabled,
      noOptionsMessage: (inputValue: string) =>
        this.props.autoload && this.state.extra.isDataFetching
          ? this.state.extra.loadingPlaceholder
          : this.props.noResultsText,
      clearAllText: this.props.clearAllText,
      clearValueText: this.props.clearValueText,
      addLabelText: this.props.addLabelText,
      searchPromptText: this.props.searchPromptText,
      optionRenderer: this.getOptionRenderer,
      valueRenderer: this.getValueRenderer,
      onChange: this.onChange.bind(this, this.props.name),
      menuIsOpen: this.state.extra.menuIsOpen,
      onMenuOpen: () =>
        this.setState({
          ...this.state,
          extra: {
            ...this.state.extra,
            menuIsOpen: true,
          },
        }),
      onMenuClose: () =>
        this.setState({
          ...this.state,
          extra: {
            ...this.state.extra,
            menuIsOpen: false,
          },
        }),
      onInputChange: (value: string) => {
        const newState = {
          ...this.state,
          extra: {
            ...this.state.extra,
            inputValue: value,
          },
        };
        return this.setState(newState);
      },
      getOptionLabel: this.getOptionLabel,
      getOptionValue: (option: object) => this.parseValue(option),
      inputValue: this.state.extra.inputValue,
      defaultInputValue: '',
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
      ref: input => (this.input = input),
      styles: customStyles(this.props.theme, this.state.value),
    };

    const { floatingLabel, disabled, readonly, displayMode } = this.props;

    const FloatingLabel = floatingLabel && (
      <label
        onClick={() => {
          if (disabled || readonly) return;
          this.input?.focus();
          this.setState({
            ...this.state,
            extra: {
              ...this.state.extra,
              menuIsOpen: true,
            },
          });
        }}
        style={{ cursor: 'pointer' }}
        className={classnames('up-select-label', {
          'up-select-label-focused': !!this.state.extra.menuIsOpen,
          'up-select-label-valued': !!value,
        })}
      >
        {floatingLabel}
        {this.props.isRequired ? <UpLigne className="up-select-label-star">*</UpLigne> : ''}
      </label>
    );

    const filterOption = (option, filter) => {
      const filterHandler = this.props.filterOptions || this.filterOptions;
      return filterHandler(option, filter);
    };

    return (
      <div
        className={classnames(this.props.className, getLabelStyle(this.props), 'up-select-wrapper')}
        {...getTestableComponentProps(this.props)}
      >
        {displayMode === 'tags' && (
          <>
            {FloatingLabel}
            {data.map((option, index) => {
              if (filterOption(option, null)) {
                const isSelected =
                  this.props.value != null &&
                  (this.props.multiple
                    ? this.props.value.some(v => option[this.keyId] == v[this.keyId])
                    : option[this.keyId] == this.props.value[this.keyId]);

                let nextValue: any = option;
                if (this.props.multiple) {
                  if (isSelected) {
                    nextValue = this.props.value
                      ? this.props.value.filter(v => option[this.keyId] !== v[this.keyId])
                      : [];
                  } else {
                    nextValue = [...(this.props.value || []), option];
                  }
                } else {
                  if (isSelected) {
                    nextValue = null;
                  } else {
                    nextValue = option;
                  }
                }
                if (this.props.optionRenderer) {
                  const OptionRenderer = this.props.optionRenderer;
                  return <OptionRenderer key={index} {...option}></OptionRenderer>;
                } else {
                  if (option[this.keyId])
                    return (
                      <span
                        key={`option_${option[this.keyId]}`}
                        className={getInlineStyle(this.props.theme, isSelected)}
                        onClick={e => this.onChange(this.props.name, nextValue, null)}
                      >
                        {this.format(option, this.keyText)}
                      </span>
                    );
                  else
                    return (
                      <span
                        key={`option_${option['id']}`}
                        className={getInlineStyle(this.props.theme, isSelected)}
                        onClick={e => this.onChange(this.props.name, nextValue, null)}
                      >
                        {this.format(option, option['text'])}
                      </span>
                    );
                }
              }
            })}
          </>
        )}
        {displayMode === 'classic' && dataSource != null && allowCreate === true && (
          <>
            {FloatingLabel}
            <AsyncCreatableSelect {...(selectComponentProps as any)} />
          </>
        )}
        {displayMode === 'classic' && dataSource != null && allowCreate === false && (
          <>
            {FloatingLabel}
            <AsyncSelect {...(selectComponentProps as any)} />
          </>
        )}
        {displayMode === 'classic' && dataSource == null && allowCreate === true && (
          <>
            {FloatingLabel}
            <Creatable {...(selectComponentProps as any)} />
          </>
        )}
        {displayMode === 'classic' && dataSource == null && allowCreate === false && (
          <>
            {FloatingLabel}
            <SelectBase {...(selectComponentProps as any)} />
          </>
        )}
      </div>
    );
  }

  onChange = (name: string, value: OnChangeValue<object, boolean>, action: ActionMeta<object>) => {
    this.setValue(value);
    this.handleChangeEvent(eventFactory(name || this.props.name, value), value);
  };
}
