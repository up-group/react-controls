
function is(x, y) {
    if (x === y) {
        // Steps 1-5, 7-10
        // Steps 6.b-6.e: +0 != -0
        // Added the nonzero y check to make Flow happy, but it is redundant
        return x !== 0 || y !== 0 || 1 / x === 1 / y;
    } else {
        // Step 6.a: NaN == NaN
        return x !== x && y !== y;
    }
}

export default function shallowEqual(objA, objB) {
    if (is(objA, objB)) {
        return true;
    }

    if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) {
        return false;
    }

    var keysA = Object.keys(objA);
    var keysB = Object.keys(objB);

    if (keysA.length !== keysB.length) {
        return false;
    }

    for (var i = 0; i < keysA.length; i++) {
        if (objA[keysA[i]] && objA[keysA[i]].constructor === Array) {
            for (var j = 0; j < objA[keysA[i]].lenght; j++) {
                if (shallowEqual(objA[keysA[i]][j], objA[keysB[i]][j]) === false) {
                    return false;
                }
            }
        } else if (!objB.hasOwnProperty(keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) {
            return false;
        }
    }

    return true;
};
