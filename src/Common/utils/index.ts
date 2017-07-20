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

export function isString(object:any) {
    return typeof object === 'string' ||  object instanceof String ;
}