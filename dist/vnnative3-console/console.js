"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var VnNative3ConsoleCore = /** @class */ (function () {
    function VnNative3ConsoleCore() {
    }
    VnNative3ConsoleCore.prototype.info = function (message) {
        return console.info("%c ".concat(message, " "), 'background: green; color: #bada55');
    };
    VnNative3ConsoleCore.prototype.log = function (message) {
        return console.log("%c ".concat(message, " "), 'background: #222; color: #bada55');
    };
    VnNative3ConsoleCore.prototype.debug = function (message) {
        return console.debug("%c ".concat(message, " "), 'background: yellow; color: #bada55');
    };
    VnNative3ConsoleCore.prototype.error = function (message) {
        return console.error("%c ".concat(message, " "), 'background: red; color: #bada55');
    };
    return VnNative3ConsoleCore;
}());
exports.default = VnNative3ConsoleCore;
