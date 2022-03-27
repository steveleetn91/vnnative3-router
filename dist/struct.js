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
var index_1 = require("vnnative3-location/dist/index");
var VnNative3RouterStruct = /** @class */ (function () {
    function VnNative3RouterStruct() {
        this.notFound = "";
    }
    VnNative3RouterStruct.prototype.set = function (data, notFound) {
        if (notFound === void 0) { notFound = "NotFoundPage"; }
        try {
            this.config = data;
            this.notFound = notFound;
        }
        catch (e) {
            return (new console_1.default).error(e.toString());
        }
    };
    VnNative3RouterStruct.prototype.init = function () {
        return __awaiter(this, void 0, void 0, function () {
            var startLoad_1;
            var _this = this;
            return __generator(this, function (_a) {
                try {
                    startLoad_1 = function () {
                        var platform;
                        platform = window;
                        var os;
                        os = platform.device && platform.device.platform ? platform.device.platform : "browser";
                        if (platform.vnnativeos) {
                            if (platform.vnnativeos.getOsName()) {
                                os = platform.vnnativeos.getOsName();
                            }
                        }
                        var root;
                        root = document.getElementById("root");
                        var urlParams = new URLSearchParams(window.location.search);
                        var vn3page = urlParams.get('vn3page') ? urlParams.get('vn3page') : "/";
                        var assets = os === "iOS" || os === "software" ? "assets" : "/assets";
                        _this.config = _this.config ? _this.config : [];
                        var isDevelopment = false;
                        if (platform.location.href.includes("http://") == true) {
                            isDevelopment = true;
                        }
                        var stylePageHerf = "";
                        var scriptPageSrc = "";
                        for (var i = 0; i < _this.config.length; i++) {
                            if (vn3page && vn3page === _this.config[i].url && os === "Android") {
                                stylePageHerf = "".concat(assets, "/").concat(_this.config[i].name, "/").concat(_this.config[i].name, ".bundle.css");
                                scriptPageSrc = "".concat(assets, "/").concat(_this.config[i].name, "/").concat(_this.config[i].name, ".bundle.js");
                                break;
                            }
                            else if (vn3page && vn3page === _this.config[i].url && os === "iOS") {
                                stylePageHerf = "".concat(assets, "/").concat(_this.config[i].name, "/").concat(_this.config[i].name, ".bundle.css");
                                scriptPageSrc = "".concat(assets, "/").concat(_this.config[i].name, "/").concat(_this.config[i].name, ".bundle.js");
                                break;
                            }
                            else if (window.location.pathname === _this.config[i].url && os === "browser") {
                                stylePageHerf = "".concat(assets, "/").concat(_this.config[i].name, "/").concat(_this.config[i].name, ".bundle.css");
                                scriptPageSrc = "".concat(assets, "/").concat(_this.config[i].name, "/").concat(_this.config[i].name, ".bundle.js");
                            }
                            else if (vn3page && vn3page === _this.config[i].url && os === "software") {
                                stylePageHerf = "".concat(assets, "/").concat(_this.config[i].name, "/").concat(_this.config[i].name, ".bundle.css");
                                scriptPageSrc = "".concat(assets, "/").concat(_this.config[i].name, "/").concat(_this.config[i].name, ".bundle.js");
                            }
                            var stylePage = document.createElement("link");
                            stylePage.setAttribute('rel', 'stylesheet');
                            stylePage.setAttribute('href', stylePageHerf);
                            document.head.appendChild(stylePage);
                            var scriptPage = document.createElement("script");
                            scriptPage.setAttribute('src', scriptPageSrc);
                            document.body.appendChild(scriptPage);
                            (new console_1.default).log('Welcome to Vn Native 3 Frame Work');
                            (new console_1.default).log("Starting Android : ".concat(_this.config[i].name));
                            if ((i + 1) === _this.config.length) {
                                var stylePage_1 = document.createElement("link");
                                stylePage_1.setAttribute('rel', 'stylesheet');
                                stylePage_1.setAttribute('href', "".concat(assets, "/").concat(_this.notFound, "/").concat(_this.notFound, ".bundle.css"));
                                document.head.appendChild(stylePage_1);
                                var scriptPage_1 = document.createElement("script");
                                scriptPage_1.setAttribute('src', "".concat(assets, "/").concat(_this.notFound, "/").concat(_this.notFound, ".bundle.js"));
                                document.body.appendChild(scriptPage_1);
                                (new console_1.default).log('Welcome to Vn Native 3 Frame Work');
                                (new console_1.default).log("Starting  ".concat(_this.notFound));
                                return;
                            }
                        }
                    };
                    document.addEventListener("deviceready", function () {
                        startLoad_1();
                        var startHref = window.location.href;
                        setInterval(function () {
                            var checkHref = window.location.href;
                            if (startHref === checkHref) {
                                return false;
                            }
                            else {
                                startHref = checkHref;
                                startLoad_1();
                            }
                        }, 1500);
                    }, false);
                }
                catch (e) {
                    return [2 /*return*/, (new console_1.default).error(e.toString())];
                }
                return [2 /*return*/];
            });
        });
    };
    VnNative3RouterStruct.prototype.supportMoveScreen = function () {
        var links = document.querySelectorAll("#root a");
        links.forEach(function (link) {
            link.addEventListener("click", function (ev) {
                var routerLink = link.getAttribute("link");
                var go = routerLink != null ? routerLink : "";
                if (go !== "") {
                    (new index_1.default).redirect.go(go, []);
                }
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
                        this.supportMoveScreen();
                        return [2 /*return*/];
                }
            });
        });
    };
    return VnNative3RouterStruct;
}());
exports.default = VnNative3RouterStruct;
