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
