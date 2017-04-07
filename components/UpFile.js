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
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var UpFile = (function (_super) {
    __extends(UpFile, _super);
    function UpFile(p, c) {
        var _this = _super.call(this, p, c) || this;
        _this.onchange = function (event) {
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
        return React.createElement("input", { style: this.props.hasError === true ? { borderColor: "red" } : null, type: "file", className: "form-control", accept: this.props.fileExtension, onChange: this.onchange });
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