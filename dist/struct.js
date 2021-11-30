"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var console_1 = require("vnnative3-console/console");
var HTML404_1 = require("vnnative3-webview/HTML404");
var VnNative3RouterStruct = /** @class */ (function () {
    function VnNative3RouterStruct() {
    }
    VnNative3RouterStruct.prototype.set = function (data) {
        try {
            this.config = data;
        }
        catch (e) {
            return (new console_1.default).error(e.toString());
        }
    };
    VnNative3RouterStruct.prototype.init = function () {
        return __awaiter(this, void 0, void 0, function () {
            var root, i, scriptPage;
            return __generator(this, function (_a) {
                root = document.getElementById("root");
                try {
                    for (i = 0; i < this.config.length; i++) {
                        if (window.location.pathname === this.config[i].url) {
                            scriptPage = document.createElement("script");
                            scriptPage.setAttribute('src', "/assets/".concat(this.config[i].name));
                            document.body.appendChild(scriptPage);
                            (new console_1.default).log('Welcome to Vn Native 3 Frame Work');
                            (new console_1.default).log("Starting  ".concat(scriptPage));
                            return [2 /*return*/];
                        }
                        if ((i + 1) === this.config.length) {
                            (new console_1.default).log('Welcome to Vn Native 3 Frame Work');
                            root.innerHTML = (new HTML404_1.default).render();
                            return [2 /*return*/];
                        }
                    }
                }
                catch (e) {
                    return [2 /*return*/, (new console_1.default).error(e.toString())];
                }
                return [2 /*return*/];
            });
        });
    };
    VnNative3RouterStruct.prototype.renderCurrentPage = function (name, page) {
        return __awaiter(this, void 0, void 0, function () {
            var root, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        root = document.getElementById("root");
                        return [4 /*yield*/, page.beforeRender()];
                    case 1:
                        _b.sent();
                        _a = root;
                        return [4 /*yield*/, page.render()];
                    case 2:
                        _a.innerHTML = _b.sent();
                        return [4 /*yield*/, page.afterRender()];
                    case 3:
                        _b.sent();
                        window[name] = page;
                        return [2 /*return*/];
                }
            });
        });
    };
    return VnNative3RouterStruct;
}());
exports.default = VnNative3RouterStruct;
