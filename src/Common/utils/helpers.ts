import { style } from "typestyle"


export function callIfExists(func, ...args) {
    return (typeof func === 'function') && func(...args);
}

export function hasOwnProp(obj, prop) {
    return Object.prototype.hasOwnProperty.call(obj, prop);
}

export function generateUniqueId() {
    return Math.random().toString(36).substring(7);
}

export interface AttributPolice {
    fontSize: string;
    color?: string;
    fontWeight?: any;
    fontStyle?: any;
    fontStrech?: any;
    lineHeight?: any;
    letterSpacing?: any;
}
export function getFontClassName(fontAttribut: AttributPolice): string {
    return style({
        fontSize: fontAttribut.fontSize,
        color: fontAttribut.color ? fontAttribut.color : "#3f3b37",
        fontWeight: fontAttribut.fontWeight ? fontAttribut.fontWeight : "normal",
        fontStyle: fontAttribut.fontStyle ? fontAttribut.fontStyle : "normal",
        fontStretch: fontAttribut.fontStrech ? fontAttribut.fontStrech : "normal",
        lineHeight: fontAttribut.lineHeight ? fontAttribut.lineHeight : "normal",
        letterSpacing: fontAttribut.letterSpacing ? fontAttribut.letterSpacing : "normal",
    });
}

export function isNullOrUndef(objet: any): boolean {
    return objet == null || objet == undefined;
}

export function stringIsNullOrEmpty(chaine: string): boolean {
    return isNullOrUndef(chaine) || chaine.trim().length === 0;
}

export function arrayIsNullOrEmpty(array: any[]): boolean {
    return isNullOrUndef(array) || array.length == 0;
}