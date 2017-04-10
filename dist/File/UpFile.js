"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const styles_1 = require("./styles");
class UpFile extends React.Component {
    constructor(p, c) {
        super(p, c);
        this.onChange = (event) => {
            if (!FileReader) {
                return null;
            }
            if (event.target.files.length == 0) {
                this.props.onChange([]);
                return;
            }
            var size = event.target.files[0].size;
            if (size > this.maxSizeb) {
                this.props.onError("Plus de " + this.maxSizeMb + "M");
                return;
            }
            var reader = new FileReader();
            reader.onloadend = () => {
                var array = new Uint8Array(reader.result);
                var a = [];
                for (var i = 0; i < array.length; i++) {
                    a.push(array[i]);
                }
                this.props.onChange(a);
            };
            reader.readAsArrayBuffer(event.target.files[0]);
        };
    }
    render() {
        if (!FileReader) {
            return React.createElement("span", null, "Non support du navigateur");
        }
        const _a = this.props, { onChange, onError } = _a, rest = __rest(_a, ["onChange", "onError"]);
        return React.createElement(styles_1.default, Object.assign({}, rest, { onChange: this.onChange }));
    }
    get maxSizeb() {
        return 1048576 * this.maxSizeMb;
    }
    get maxSizeMb() {
        return this.props.maxSize || 5;
    }
}
exports.default = UpFile;
//# sourceMappingURL=UpFile.js.map