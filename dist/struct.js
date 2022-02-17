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
var console_1 = require("vnnative3-console/dist/console");
var HTML404_1 = require("vnnative3-webview/dist/HTML404");
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
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var root, urlParams, vn3page, platform, os, assets, packageName, baseUrl, i, scriptPage, stylePage, scriptPage, stylePage, scriptPage, stylePage, scriptPage, stylePage, scriptPage, stylePage;
            return __generator(this, function (_b) {
                root = document.getElementById("root");
                urlParams = new URLSearchParams(window.location.search);
                vn3page = urlParams.get('vn3page') ? urlParams.get('vn3page') : "/";
                try {
                    platform = void 0;
                    platform = window;
                    os = void 0;
                    os = platform.vnnativeos && platform.vnnativeos.getOsName() ? platform.vnnativeos.getOsName() : "web";
                    assets = os === "iOS" ? "" : "/assets";
                    this.config = this.config ? this.config : [];
                    packageName = "";
                    baseUrl = "";
                    baseUrl = document.getElementById("base") ? (_a = document.getElementById("base")) === null || _a === void 0 ? void 0 : _a.getAttribute("href") : "";
                    if (typeof baseUrl == "string") {
                        assets = baseUrl + assets;
                        packageName = baseUrl;
                    }
                    for (i = 0; i < this.config.length; i++) {
                        if (typeof vn3page == null) {
                            this.config[i].url = packageName + this.config[i].url;
                        }
                        if (vn3page && vn3page === this.config[i].url && os === "android") {
                            scriptPage = document.createElement("script");
                            scriptPage.setAttribute('src', "/android_asset".concat(packageName, "/assets/").concat(this.config[i].name, "/").concat(this.config[i].name, ".bundle.js"));
                            document.body.appendChild(scriptPage);
                            stylePage = document.createElement("link");
                            stylePage.setAttribute('rel', 'stylesheet');
                            stylePage.setAttribute('href', "/android_asset".concat(packageName, "/assets/").concat(this.config[i].name, "/").concat(this.config[i].name, ".bundle.css"));
                            document.head.appendChild(stylePage);
                            (new console_1.default).log('Welcome to Vn Native 3 Frame Work');
                            (new console_1.default).log("Starting  ".concat(this.config[i].name));
                            return [2 /*return*/];
                        }
                        else if (window.location.pathname === this.config[i].url && os === "android") {
                            scriptPage = document.createElement("script");
                            scriptPage.setAttribute('src', "/android_asset".concat(packageName, "/assets/").concat(this.config[i].name, "/").concat(this.config[i].name, ".bundle.js"));
                            document.body.appendChild(scriptPage);
                            stylePage = document.createElement("link");
                            stylePage.setAttribute('rel', 'stylesheet');
                            stylePage.setAttribute('href', "/android_asset".concat(packageName, "/assets/").concat(this.config[i].name, "/").concat(this.config[i].name, ".bundle.css"));
                            document.head.appendChild(stylePage);
                            (new console_1.default).log('Welcome to Vn Native 3 Frame Work');
                            (new console_1.default).log("Starting  ".concat(this.config[i].name));
                            return [2 /*return*/];
                        }
                        else if (vn3page && vn3page === this.config[i].url && os === "iOS") {
                            scriptPage = document.createElement("script");
                            scriptPage.setAttribute('src', "".concat(this.config[i].name, ".bundle.js"));
                            document.body.appendChild(scriptPage);
                            stylePage = document.createElement("link");
                            stylePage.setAttribute('rel', 'stylesheet');
                            stylePage.setAttribute('href', "".concat(this.config[i].name, ".bundle.css"));
                            document.head.appendChild(stylePage);
                            (new console_1.default).log('Welcome to Vn Native 3 Frame Work');
                            (new console_1.default).log("Starting  ".concat(this.config[i].name));
                            return [2 /*return*/];
                        }
                        else if (window.location.pathname === this.config[i].url && os === "software") {
                            scriptPage = document.createElement("script");
                            scriptPage.setAttribute('src', "".concat(assets, "/").concat(this.config[i].name, "/").concat(this.config[i].name, ".bundle.js"));
                            document.body.appendChild(scriptPage);
                            stylePage = document.createElement("link");
                            stylePage.setAttribute('rel', 'stylesheet');
                            stylePage.setAttribute('href', "".concat(assets, "/").concat(this.config[i].name, "/").concat(this.config[i].name, ".bundle.css"));
                            document.head.appendChild(stylePage);
                            (new console_1.default).log('Welcome to Vn Native 3 Frame Work');
                            (new console_1.default).log("Starting  ".concat(this.config[i].name));
                            return [2 /*return*/];
                        }
                        else if (window.location.pathname === this.config[i].url && os === "web") {
                            scriptPage = document.createElement("script");
                            scriptPage.setAttribute('src', "".concat(assets, "/").concat(this.config[i].name, "/").concat(this.config[i].name, ".bundle.js"));
                            document.body.appendChild(scriptPage);
                            stylePage = document.createElement("link");
                            stylePage.setAttribute('rel', 'stylesheet');
                            stylePage.setAttribute('href', "".concat(assets, "/").concat(this.config[i].name, "/").concat(this.config[i].name, ".bundle.css"));
                            document.head.appendChild(stylePage);
                            (new console_1.default).log('Welcome to Vn Native 3 Frame Work');
                            (new console_1.default).log("Starting  ".concat(this.config[i].name, " - ").concat(packageName));
                            return [2 /*return*/];
                        }
                        if ((i + 1) === this.config.length) {
                            (new console_1.default).log('Welcome to Vn Native 3 Frame Work');
                            if (root) {
                                root.innerHTML = (new HTML404_1.default).render();
                            }
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
                        if (!root) return [3 /*break*/, 3];
                        _a = root;
                        return [4 /*yield*/, page.render()];
                    case 2:
                        _a.innerHTML = _b.sent();
                        _b.label = 3;
                    case 3: return [4 /*yield*/, page.afterRender()];
                    case 4:
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
