"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const console_1 = require("vnnative3-console/dist/console");
var ee = require('event-emitter');
class VnNative3RouterStruct {
    constructor() {
        this.notFound = "";
    }
    set(data, notFound = "NotFoundPage") {
        try {
            this.config = data;
            this.notFound = notFound;
        }
        catch (e) {
            return (new console_1.default).error(e.toString());
        }
    }
    async init() {
        try {
            let platform;
            platform = window;
            let os;
            os = platform.device && platform.device.platform ? platform.device.platform : "browser";
            const startLoad = () => {
                let root;
                root = document.getElementById("root");
                const urlParams = new URLSearchParams(window.location.search);
                let vn3page = urlParams.get('vn3page') ? urlParams.get('vn3page') : "/";
                const assets = os === "iOS" ? "" : "/assets";
                this.config = this.config ? this.config : [];
                let isDevelopment = false;
                if (platform.location.href.includes("http://") == true) {
                    isDevelopment = true;
                }
                for (let i = 0; i < this.config.length; i++) {
                    if (vn3page && vn3page === this.config[i].url && os === "Android" && isDevelopment === false) {
                        let stylePage = document.createElement("link");
                        stylePage.setAttribute('rel', 'stylesheet');
                        stylePage.setAttribute('href', `/assets/${this.config[i].name}/${this.config[i].name}.bundle.css`);
                        document.head.appendChild(stylePage);
                        let scriptPage = document.createElement("script");
                        scriptPage.setAttribute('src', `/assets/${this.config[i].name}/${this.config[i].name}.bundle.js`);
                        document.body.appendChild(scriptPage);
                        (new console_1.default).log('Welcome to Vn Native 3 Frame Work');
                        (new console_1.default).log(`Starting  ${this.config[i].name}`);
                        break;
                    }
                    else if (vn3page && vn3page === this.config[i].url && os === "iOS" && isDevelopment === false) {
                        let stylePage = document.createElement("link");
                        stylePage.setAttribute('rel', 'stylesheet');
                        stylePage.setAttribute('href', `${this.config[i].name}.bundle.css`);
                        document.head.appendChild(stylePage);
                        let scriptPage = document.createElement("script");
                        scriptPage.setAttribute('src', `${this.config[i].name}.bundle.js`);
                        document.body.appendChild(scriptPage);
                        (new console_1.default).log('Welcome to Vn Native 3 Frame Work');
                        (new console_1.default).log(`Starting  ${this.config[i].name}`);
                        break;
                    }
                    else if (window.location.pathname === this.config[i].url && os === "Mac OS X") {
                        let stylePage = document.createElement("link");
                        stylePage.setAttribute('rel', 'stylesheet');
                        stylePage.setAttribute('href', `${assets}/${this.config[i].name}/${this.config[i].name}.bundle.css`);
                        document.head.appendChild(stylePage);
                        let scriptPage = document.createElement("script");
                        scriptPage.setAttribute('src', `${assets}/${this.config[i].name}/${this.config[i].name}.bundle.js`);
                        document.body.appendChild(scriptPage);
                        (new console_1.default).log('Welcome to Vn Native 3 Frame Work');
                        (new console_1.default).log(`Starting  ${this.config[i].name}`);
                        break;
                    }
                    else if (window.location.pathname === this.config[i].url && os === "WinCE") {
                        let stylePage = document.createElement("link");
                        stylePage.setAttribute('rel', 'stylesheet');
                        stylePage.setAttribute('href', `${assets}/${this.config[i].name}/${this.config[i].name}.bundle.css`);
                        document.head.appendChild(stylePage);
                        let scriptPage = document.createElement("script");
                        scriptPage.setAttribute('src', `${assets}/${this.config[i].name}/${this.config[i].name}.bundle.js`);
                        document.body.appendChild(scriptPage);
                        (new console_1.default).log('Welcome to Vn Native 3 Frame Work');
                        (new console_1.default).log(`Starting  ${this.config[i].name}`);
                        break;
                    }
                    else if (window.location.pathname === this.config[i].url && os === "browser") {
                        let stylePage = document.createElement("link");
                        stylePage.setAttribute('rel', 'stylesheet');
                        stylePage.setAttribute('href', `${assets}/${this.config[i].name}/${this.config[i].name}.bundle.css`);
                        document.head.appendChild(stylePage);
                        let scriptPage = document.createElement("script");
                        scriptPage.setAttribute('src', `${assets}/${this.config[i].name}/${this.config[i].name}.bundle.js`);
                        document.body.appendChild(scriptPage);
                        (new console_1.default).log('Welcome to Vn Native 3 Frame Work');
                        (new console_1.default).log(`Starting  ${this.config[i].name}`);
                        break;
                    }
                    else if (window.location.pathname === this.config[i].url && isDevelopment === true) {
                        let stylePage = document.createElement("link");
                        stylePage.setAttribute('rel', 'stylesheet');
                        stylePage.setAttribute('href', `${assets}/${this.config[i].name}/${this.config[i].name}.bundle.css`);
                        document.head.appendChild(stylePage);
                        let scriptPage = document.createElement("script");
                        scriptPage.setAttribute('src', `${assets}/${this.config[i].name}/${this.config[i].name}.bundle.js`);
                        document.body.appendChild(scriptPage);
                        (new console_1.default).log('Welcome to Vn Native 3 Frame Work');
                        (new console_1.default).log(`Starting  ${this.config[i].name}`);
                        break;
                    }
                    if ((i + 1) === this.config.length) {
                        let stylePage = document.createElement("link");
                        stylePage.setAttribute('rel', 'stylesheet');
                        stylePage.setAttribute('href', `${assets}/${this.notFound}/${this.notFound}.bundle.css`);
                        document.head.appendChild(stylePage);
                        let scriptPage = document.createElement("script");
                        scriptPage.setAttribute('src', `${assets}/${this.notFound}/${this.notFound}.bundle.js`);
                        document.body.appendChild(scriptPage);
                        (new console_1.default).log('Welcome to Vn Native 3 Frame Work');
                        (new console_1.default).log(`Starting  ${this.notFound}`);
                        return;
                    }
                }
            };
            document.addEventListener("deviceready", () => {
                startLoad();
            }, false);
            let startHref = window.location.href;
            setInterval(() => {
                let checkHref = window.location.href;
                if (startHref === checkHref) {
                    return false;
                }
                else {
                    startHref = checkHref;
                    startLoad();
                }
            }, 5000);
        }
        catch (e) {
            return (new console_1.default).error(e.toString());
        }
    }
    async renderCurrentPage(name, page) {
        let root;
        root = document.getElementById("root");
        await page.beforeRender();
        if (root) {
            root.innerHTML = await page.render();
        }
        await page.afterRender();
        window[name] = page;
    }
}
exports.default = VnNative3RouterStruct;
//# sourceMappingURL=struct.js.map