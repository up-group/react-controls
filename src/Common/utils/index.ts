import { Children, ReactNode, ComponentType } from 'react'

import remStringFromPx from './remStringFromPx';
import shallowEqual from './shallowEqual';

export default remStringFromPx;

export function generateId()
{
    var id = "";
    var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for( var i=0; i < 10; i++ )
        id += characters.charAt(Math.floor(Math.random() * characters.length));
    return id;
}
const GUID_EMPTY =  "00000000-0000-0000-0000-000000000000" ;

export function isString(object:any) {
    return typeof object === 'string' ||  object instanceof String ;
}

export function isEmpty(value: any) : boolean {
    return value === undefined || value === null || value === "" || value === GUID_EMPTY || (Array.isArray(value) && value.length === 0) ;
}

export function isEmptyId(id)  : boolean {
    return id === undefined || id === null || id === "" || id === GUID_EMPTY;
}

export const isEmptyChildren = (children: ReactNode) => Children.count(children) === 0;

export const isFunction = <T extends Function>(value: any): value is T =>
  typeof value === 'function';

export const getComponentName = (component: ComponentType<any>) =>
  component.displayName || (component as any).name;

export const getHocComponentName = (hocName: string, component: ComponentType<any>) =>
  `${hocName}(${getComponentName(component)})`;

export const withDefaultProps = <P extends object, DP extends Partial<P> = Partial<P>>(
  defaultProps: DP,
  Cmp: ComponentType<P>
) => {
  // we are extracting props that need to be required
  type RequiredProps = Omit<P, keyof DP>
  // we are re-creating our props definition by creating and intersection type
  // between all original props mapped to be optional and required to be required
  type Props = Partial<DP> & Required<RequiredProps>

  // here we set our defaultProps
  Cmp.defaultProps = defaultProps

  // we override return type definition by turning type checker off
  // for original props  and setting the correct return type
  return (Cmp as ComponentType<any>) as ComponentType<Props>
};

type Arg = object ;
type Args = Arg[] ;

type CallFunction = (args : Args) => void ;

export const callAll = <T extends CallFunction | undefined, A extends Args>(...fns: T[]) => (...args: A) => fns.forEach(fn => fn && fn(args))

const open = (url : string, title : string, onClose : () => void, name? : string)  => {
    const a = document.createElement('a');
    a.setAttribute('href', url);
    a.setAttribute('target', '_blank');
    if (name) {
      a.setAttribute('download', name);
    }
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };
  
  const getFileNameOrDefault = (name:string, mimeType:string) => {
    if (!isEmpty(name)) {
      return name ;
    }
  
    return `download.${mimeType.split('/').pop()}`
  };
  
  export const isBase64 = (fileAsBase64: string) => {
    if (isEmpty(fileAsBase64)) {
      return false;
    }
    return fileAsBase64.split(';')[0] == 'base64' ; //
  };
  
  export const getMimeTypeFromBase64 = (fileAsBase64: string) => {
    if (isEmpty(fileAsBase64)) {
      return null;
    }
    return fileAsBase64.split(';')[0].split(':')[1]; // Mimetype
  };
  
  export const openFileAsBase64 = (fileAsBase64: string, name?: string) => {
    const parts = fileAsBase64.split(';');
    const mimeType = parts[0].split(':')[1]; // Mimetype
    const file =  parts[1].slice(7);
    openFileAsBlob(base64toBlob(file), mimeType, getFileNameOrDefault(name, mimeType));
  };
  
  export const openFileAsBlob = (file, mimeType: string, name?: string) => {
    // It is necessary to create a new blob object with mime-type explicitly set
    // otherwise only Chrome works like it should
    const newBlob = new Blob([file], { type: mimeType });
  
    // IE doesn't allow using a blob object directly as link href
    // instead it is necessary to use msSaveOrOpenBlob
    if (window.navigator && window.navigator.msSaveOrOpenBlob) {
      window.navigator.msSaveOrOpenBlob(newBlob);
      return;
    }
  
    // For other browsers:
    // Create a link pointing to the ObjectURL containing the blob.
    const data = window.URL.createObjectURL(newBlob);
    open(data, name || 'download.png', null, name || 'download.png');
    setTimeout(() => {
      // For Firefox it is necessary to delay revoking the ObjectURL
      window.URL.revokeObjectURL(data);
    }, 100);
  };
  
  export const base64toBlob = (base64Data:string, contentType?:string) => {
    const sliceSize = 1024;
    const byteCharacters = atob(base64Data);
    const bytesLength = byteCharacters.length;
    const slicesCount = Math.ceil(bytesLength / sliceSize);
    const byteArrays = new Array(slicesCount);
  
    for (let sliceIndex = 0; sliceIndex < slicesCount; ++sliceIndex) {
      const begin = sliceIndex * sliceSize;
      const end = Math.min(begin + sliceSize, bytesLength);
  
      const bytes = new Array(end - begin);
      for (let offset = begin, i = 0 ; offset < end; ++i, ++offset) {
        bytes[i] = byteCharacters[offset].charCodeAt(0);
      }
      byteArrays[sliceIndex] = new Uint8Array(bytes);
    }
    let blob:Blob;
    try {
      blob = new Blob(byteArrays, {type : contentType || '' });
    } catch (e) {
      // TypeError old chrome and FF
      window['BlobBuilder'] = window['BlobBuilder'] ||
                        window['WebKitBlobBuilder'] ||
                        window['MozBlobBuilder'] ||
                        window['MSBlobBuilder'];
      if (e.name === 'TypeError' && window['BlobBuilder']) {
        const bb = window['BlobBuilder']();
        bb.append(byteArrays);
        blob = bb.getBlob(contentType);
      } else if (e.name === 'InvalidStateError') {
        // InvalidStateError (tested on FF13 WinXP)
        blob = new Blob(byteArrays, {type : contentType});
      }  else {
        // We're screwed, blob constructor unsupported entirely
      }
    }
    return blob;
  };
  export const on = (el, evt, fn, bubble) => {
    if ('addEventListener' in el) {
        // BBOS6 doesn't support handleEvent, catch and polyfill
      try {
        el.addEventListener(evt, fn, bubble);
      } catch (e) {
        if (typeof fn === 'object' && fn.handleEvent) {
          el.addEventListener(evt, (e) => {
            // Bind fn as this and set first arg as event object
            fn.handleEvent.call(fn, e);
          }, bubble);
        } else {
          throw e;
        }
      }
    } else if ('attachEvent' in el) {
        // check if the callback is an object and contains handleEvent
      if (typeof fn === 'object' && fn.handleEvent) {
        el.attachEvent('on' + evt, () => {
                // Bind fn as this
          fn.handleEvent.call(fn);
        });
      } else {
        el.attachEvent('on' + evt, fn);
      }
    }
  };
  
  export const off = (el, evt, fn) => {
    if ('removeEventListener' in el) {
      el.removeEventListener(evt, fn);
    } else if ('attachEvent' in el) {
      el.detachEvent(evt, fn);
    }
  };

  export const ruleIsValid = (value: string ,givenRegex: RegExp) => {
    const regex = new RegExp(givenRegex);
    return regex.test(value)
  }
  interface items {
    text: string,
    regex: RegExp
  }
  export const rulesMatch = (value: string,rules: Array<items>) =>
     isEmpty(rules) ? false : rules.every(({regex})=> ruleIsValid(value,regex))


  
  export {shallowEqual} ;