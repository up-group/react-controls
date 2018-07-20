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
export function getFontSizeNumber(size: number | string): number {
    if (typeof(size) === "number") {
        return size;
    }
    var regex = /([0-9]*\.?[0-9]*)(.*)/i.exec(size);

    if (isNullOrUndef(regex) || isNullOrUndef(regex[1])) {
        return 0;
    }

    var taille: number = parseFloat(regex[1]);
    var unite: string = regex[2];

    if (isNullOrUndef(taille)) {
        return 0;
    }
    if (stringIsNullOrEmpty(unite)) {
        return taille;
    }

    switch (unite) {
        // static units
        // 1in = 96px = 2.54cm = 72pt = 6pc
        case "px":
            return taille;
        case "in": 
            return taille * 96;
        case "cm": 
            return taille * 96 / 2.54;
        case "mm":
            return taille * 96 / 0.254;
        case "pt":
            return taille * 96 / 72;
        case "pc": 
            return taille * 96 / 6;

        // relative units
        case "em":
        case "ex":
        case "ch":
        case "rem":
        case "vw":
        case "vh":
        case "vmin":
        case "vmax":
        case "%":
            // pas encore géré
            this._relativeIconSize = true;
            break;
    }

    return taille;
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

export function addZeroBeforeNumber(nombre: number, tailleMin: number): string {
    var result = nombre.toString();
    while (result.length < tailleMin) {
        result = "0" + result;
    }
    return result;
}