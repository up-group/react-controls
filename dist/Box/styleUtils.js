"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const styled_components_1 = require("styled-components");
const maps_1 = require("./maps");
const maps_2 = require("./maps");
const rootRem = 16;
const remFromPX = (px) => (px / rootRem);
function calculateFlexWrap(wrap, reverse) {
    if (wrap && reverse) {
        return 'wrap-reverse';
    }
    else if (wrap && !reverse) {
        return 'wrap';
    }
    else {
        return 'nowrap';
    }
}
exports.calculateFlexWrap = calculateFlexWrap;
function sizeToString(size, smallSize = false) {
    let returnVal;
    if (typeof size === 'string') {
        returnVal = `${remFromPX(maps_2.SIZE_MAP[size])}rem`;
    }
    else if (typeof size === 'object') {
        const horizontal = size.horizontal || 'none';
        const vertical = size.vertical || 'none';
        returnVal = `${remFromPX(maps_2.SIZE_MAP[vertical])}rem ${remFromPX(maps_2.SIZE_MAP[horizontal])}rem`;
    }
    else {
        returnVal = `0rem`;
    }
    return returnVal;
}
exports.sizeToString = sizeToString;
function stringBoxStyle(size) {
    if (size === 'full') {
        return {
            width: '100vw',
            height: '100vh',
        };
    }
    else {
        return {
            width: size ? `${remFromPX(maps_2.BOX_SIZE_MAP[size])}rem` : '',
            height: size ? `${remFromPX(maps_2.BOX_SIZE_MAP[size])}rem` : '',
        };
    }
}
function objectBoxStyle(size) {
    let width = 'auto';
    let height = 'auto';
    if (size.vertical) {
        height = size.vertical === 'full'
            ? '100vh'
            : `${remFromPX(maps_2.BOX_SIZE_MAP[size.vertical])}rem`;
    }
    if (size.horizontal) {
        width = size.horizontal === 'full'
            ? '100vw'
            : `${remFromPX(maps_2.BOX_SIZE_MAP[size.horizontal])}rem`;
    }
    return {
        width,
        height,
    };
}
function boxSizeToStyle(size) {
    if (typeof size === 'string') {
        return stringBoxStyle(size);
    }
    else if (typeof size === 'object') {
        return objectBoxStyle(size);
    }
    else {
        return { width: 'auto', height: 'auto' };
    }
}
exports.boxSizeToStyle = boxSizeToStyle;
function calculateFullStyle(full, postFix) {
    if (typeof full === 'object') {
        if (postFix === 'vw') {
            return full.horizontal ? `100${postFix}` : 'auto';
        }
        else {
            return full.vertical ? `100${postFix}` : 'auto';
        }
    }
    else if (typeof full === 'boolean') {
        return full ? `100${postFix}` : 'auto';
    }
    return 'auto';
}
exports.calculateFullStyle = calculateFullStyle;
exports.breakPointCss = (breakPoint) => {
    const selector = breakPoint === 'desktop' ? 'min-width' : 'max-width';
    return styled_components_1.css `
    @media screen and (${selector}: ${maps_1.BREAKPOINTS.phone}) {
      padding: ${({ pad }) => sizeToString(pad)};
    }
  `;
};
exports.breakPoints = (size) => {
    if (size.desktop || size.mobile || size.tablet) {
        const css = Object.keys(size).map((key) => exports.breakPointCss(key)).join('; \n');
        return css;
    }
    return '';
};
//# sourceMappingURL=styleUtils.js.map