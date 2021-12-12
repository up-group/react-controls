import { style } from "typestyle";
import moment from "moment";


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

    var sizeParsed: number = parseFloat(regex[1]);
    var unite: string = regex[2];

    if (isNullOrUndef(sizeParsed)) {
        return 0;
    }
    if (stringIsNullOrEmpty(unite)) {
        return sizeParsed;
    }

    switch (unite) {
        // static units
        // 1in = 96px = 2.54cm = 72pt = 6pc
        case "px":
            return sizeParsed;
        case "in":
            return sizeParsed * 96;
        case "cm":
            return sizeParsed * 96 / 2.54;
        case "mm":
            return sizeParsed * 96 / 0.254;
        case "pt":
            return sizeParsed * 96 / 72;
        case "pc":
            return sizeParsed * 96 / 6;

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

    return sizeParsed;
}

export function isNullOrUndef(objet: any): boolean {
    return objet == null || objet == undefined;
}

export function stringIsNullOrEmpty(chaine: string): boolean {
    return isNullOrUndef(chaine) || chaine.trim().length === 0;
}

export function numberIsNullOrUndef(number: number): boolean {
    return isNullOrUndef(number) || isNaN(number);
}

export function arrayIsNullOrEmpty(array: any[]): boolean {
    return isNullOrUndef(array) || array.length == 0;
}

export function arrayIsIdentical(array1: any[], array2: any[]): boolean {
    if (array1 === array2) {
        return true;
    }
    if (array1.length !== array2.length) {
        return false;
    }
    for (var cpt: number = 0; cpt < array1.length; cpt++) {
        if (array1[cpt] !== array2[cpt]) {
            if (array1[cpt] instanceof Array && array2[cpt] instanceof Array) {
                if (!arrayIsIdentical(array1[cpt], array2[cpt])) {
                    return false;
                }
            } else if (typeof array1[cpt] === "object" && typeof array2[cpt] === "object") {
                if (!objectIsIdentical(array1[cpt], array2[cpt])) {
                    return false;
                }
            } else {
                return false;
            }
        }
    }
    return true;
}
export function objectIsIdentical(obj1: any, obj2: any): boolean {
    if (obj1 === obj2) {
        return true;
    }
    for (var prop in obj1) {
        if (!obj2.hasOwnProperty(prop) || typeof obj1[prop] !== typeof obj2[prop]) {
            return false;
        }
    }
    for (var prop in obj2) {
        if (!obj1.hasOwnProperty(prop)) {
            return false;
        }
        if (obj1[prop] !== obj2[prop]) {
            if (obj1[prop] instanceof Array && obj2[prop] instanceof Array) {
                if (!arrayIsIdentical(obj1[prop], obj2[prop])) {
                    return false;
                }
            } else if (typeof obj1[prop] === "object" /*&& typeof obj2[prop] === "object"*/) {
                if (!objectIsIdentical(obj1[prop], obj2[prop])) {
                    return false;
                }
            } else {
                return false;
            }
        }
    }
    return true;
}

export function objectContains(objet: any, search: string): boolean {
    if (isNullOrUndef(objet) || stringIsNullOrEmpty(search)) {
        return false;
    }
    if (typeof objet === "object") {
        for (var item in objet) {
            if (objectContains(objet[item], search)) {
                return true;
            }
        }
    } else if (objet.toString().indexOf(search) >= 0) {
        return true;
    }
    return false;
}

export function addZeroBeforeNumber(nombre: number, tailleMin: number): string {
    var result = nombre.toString();
    while (result.length < tailleMin) {
        result = "0" + result;
    }
    return result;
}

export function formatDate(date: Date): string {
    moment.locale("fr");
    return isNullOrUndef(date) ? null : moment(date).format('DD/MM/YYYY');
}

export function isBissextile(annee: number): boolean {
    if (annee % 400 === 0) {
        return true;
    }
    if (annee % 100 === 0) {
        return false;
    }
    if (annee % 4 === 0) {
        return true;
    }
    return false;
}

export function jourDuMois(mois: number, annee: number, moisBase0: boolean = false): number {
    var fevrier: number = isBissextile(annee) ? 29 : 28;
    switch(mois) {
        case 0: return moisBase0 ? 31 : -1;
        case 1: return moisBase0 ? fevrier : 31;
        case 2: return moisBase0 ? 31 : fevrier;
        case 3: return moisBase0 ? 30 : 31;
        case 4: return moisBase0 ? 31 : 30;
        case 5: return moisBase0 ? 30 : 31;
        case 6: return moisBase0 ? 31 : 30;
        case 7: return 31;
        case 8: return moisBase0 ? 30 : 31;
        case 9: return moisBase0 ? 31 : 30;
        case 10: return moisBase0 ? 30 : 31;
        case 11: return moisBase0 ? 31 : 30;
        case 12: return moisBase0 ? -1 : 31;
    }
}

export function incrementJour(date: Date, increment: number): Date {
    var annee: number = date.getFullYear();
    var mois: number = date.getMonth();
    var jour: number = date.getDate() + increment;
    var jdm: number = jourDuMois(mois, annee, true);

    while (jour < 1) {
        if (mois < 1) {
            mois = 11;
            annee--;
        } else {
            mois--;
        }
        jdm = jourDuMois(mois, annee, true);
        jour += jdm;
    }

    while (jour > jdm) {
        if (mois > 10) {
            mois = 0;
            annee++;
        } else {
            mois++;
        }
        jour -= jdm;
        jdm = jourDuMois(mois, annee, true);
    }

    return new Date(annee, mois, jour);
}

export function ConvertToDate(date: string): Date {
    if (stringIsNullOrEmpty(date)) {
        return null;
    }

    date = date.trim();
    var jourMoisAnnee: number[] = [];
    var nbPas: number = 0;

    for (var idx: number = 0; idx < date.length; idx++) {
        var car: string = date[idx];

        if (["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"].indexOf(car) >= 0) {
            var nb: number = Number(car);
            if (nbPas === 0) {
                jourMoisAnnee.push(nb);
            } else {
                jourMoisAnnee[jourMoisAnnee.length - 1] = jourMoisAnnee[jourMoisAnnee.length - 1] * 10 + nb;
            }

            if (jourMoisAnnee.length < 3 && nbPas === 1) {
                nbPas = 0;
            } else {
                nbPas++;
            }
        } else {
            if (["/", "-", ".", " "].indexOf(car) >= 0) {
                nbPas = 0;
            } else {
                return null;
            }
        }
    }

    if (jourMoisAnnee.length !== 3
            // || jourMoisAnnee[2] < 1000
            || (jourMoisAnnee[2] > 99 && jourMoisAnnee[2] < 1850)
            || jourMoisAnnee[1] < 1 || jourMoisAnnee[1] > 12
            || jourMoisAnnee[0] < 1 || jourMoisAnnee[0] > jourDuMois(jourMoisAnnee[1], jourMoisAnnee[2])) {
        return null;
    }

    if (jourMoisAnnee[2] <= 99) {
        var anneeEnCours: number = new Date().getFullYear();
        var anneeLimite: number = anneeEnCours % 100;
        jourMoisAnnee[2] = anneeEnCours - anneeLimite + jourMoisAnnee[2] - (jourMoisAnnee[2] > anneeLimite ? 100 : 0);
    }

    return new Date(jourMoisAnnee[2], jourMoisAnnee[1] - 1, jourMoisAnnee[0]);
}

export const  setTimeOutWithPause = function(callback, delay) {
    let timerId, start, remaining = delay;

    this.pause = function() {
        window.clearTimeout(timerId); // stop the setTimout and waitb for the resume to create a new one
        remaining -= Date.now() - start; // update the remaing time depending on the starting time of the firt timer
    };

    this.resume = function() {
        start = Date.now();
        window.clearTimeout(timerId); // stop the previous setTimeOutId
        timerId = window.setTimeout(callback, remaining); // create a new one with the remaining time
    };

    this.clearTimeout = function() {
        window.clearTimeout(timerId)
    }

    // start the timer for the first time
    this.resume();
  };

// Check if a String is Numeric
export const isNumeric = (data : string) : Boolean => /^\d+$/.test(data);

export const isMobileDevice = (): Boolean => {
    if (navigator.userAgent.match(/Android/i) ||
      navigator.userAgent.match(/webOS/i) ||
      navigator.userAgent.match(/iPhone/i) ||
      navigator.userAgent.match(/iPod/i)) {
        return true;
    }

    return  false;
};
