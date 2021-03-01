export interface StyledComponentProps {
  innerRef?: (comp: any) => void;
}

export interface TestableComponentProps {
    dataTestId? : string;
}

export function getTestableComponentProps( props : TestableComponentProps ): { "data-testid"? : string} {
    var testableComponentProps = {} ;
    if(props.dataTestId) {
        testableComponentProps["data-testid"] = props.dataTestId ;
    }
    return testableComponentProps ;
}

export function FilterProps<T>(refObject:any, propsObject:any) : T {
    let persistableO1 = {} as T;
    Object.keys(propsObject).forEach(key => {
        if (Object.keys(refObject).indexOf(key) >= 0) {
            persistableO1[key] = refObject[key];
        }
    });
    return persistableO1 ;
} ; 

export interface IDictionary<_KeyType, _ValueType> {
    get(key: _KeyType) : _ValueType;
    set(key: _KeyType, value: _ValueType): void;
    unset(key: _KeyType): void;
    containsKey(key: _KeyType): boolean;
    keys(): _KeyType[];
    values(): _ValueType[];
}

export class Dictionary<_KeyType, _ValueType> implements IDictionary<_KeyType, _ValueType> {

    _keys: _KeyType[] = new Array<_KeyType>();
    _values: _ValueType[] = new Array<_ValueType>() ;
    _dictionary : any = {} ;
    constructor(init?: { key: _KeyType; value: _ValueType; }[]) {
        for (var x = 0; x < init.length; x++) {
            this._dictionary[init[x].key.toString()] = init[x].value;
            this._keys.push(init[x].key);
            this._values.push(init[x].value);
        }
    }

    set(key: _KeyType, value: _ValueType) {
        this._dictionary[key.toString()] = value;
        this._keys.push(key);
        this._values.push(value);
    }

    unset(key: _KeyType) {
        var index = this._keys.indexOf(key, 0);
        this._keys.splice(index, 1);
        this._values.splice(index, 1);

        delete this._dictionary[key.toString()];
    }

    keys(): _KeyType[] {
        return this._keys;
    }

    values(): any[] {
        return this._values;
    }

    containsKey(key: _KeyType) {
        if (typeof this._dictionary[key.toString()] === "undefined") {
            return false;
        }
        return true;
    }

    toLookup(): IDictionary<_KeyType, _ValueType> {
        return this;
    }

     get(key: _KeyType) : _ValueType {
        var _value : _ValueType  = null ;
        if(this.containsKey(key)) {
            _value = this._dictionary[key.toString()] ;
        }

        return _value ;
     }
}