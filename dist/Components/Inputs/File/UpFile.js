"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
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
var React = require("react");
var styles_1 = require("./styles");
var UpFile = (function (_super) {
    __extends(UpFile, _super);
    function UpFile(p, c) {
        var _this = _super.call(this, p, c) || this;
        _this.onChange = function (event) {
            if (!FileReader) {
                return null;
            }
            if (event.target.files.length == 0) {
                _this.props.onChange([]);
                return;
            }
            var size = event.target.files[0].size;
            if (size > _this.maxSizeb) {
                _this.props.onError("Plus de " + _this.maxSizeMb + "M");
                return;
            }
            var reader = new FileReader();
            reader.onloadend = function () {
                var array = new Uint8Array(reader.result);
                var a = [];
                for (var i = 0; i < array.length; i++) {
                    a.push(array[i]);
                }
                _this.props.onChange(a);
            };
            reader.readAsArrayBuffer(event.target.files[0]);
        };
        return _this;
    }
    UpFile.prototype.render = function () {
        if (!FileReader) {
            return React.createElement("span", null, "Non support du navigateur");
        }
        var _a = this.props, onChange = _a.onChange, onError = _a.onError, rest = __rest(_a, ["onChange", "onError"]);
        return React.createElement(styles_1.default, __assign({}, rest, { onChange: this.onChange }));
    };
    Object.defineProperty(UpFile.prototype, "maxSizeb", {
        get: function () {
            return 1048576 * this.maxSizeMb;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UpFile.prototype, "maxSizeMb", {
        get: function () {
            return this.props.maxSize || 5;
        },
        enumerable: true,
        configurable: true
    });
    return UpFile;
}(React.Component));
exports.default = UpFile;
//# sourceMappingURL=UpFile.js.map