import { Children, ReactNode, ComponentType } from 'react'

import remStringFromPx from './remStringFromPx';

export default remStringFromPx;

export function GenerateId()
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
    return value === undefined || value === null || value === "" || value === GUID_EMPTY;
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