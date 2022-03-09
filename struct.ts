import VnNative3Console from "vnnative3-console/dist/console";
import VnNative3HTML404 from "vnnative3-webview/dist/HTML404";
import VnNative3RouterInterFace from "./interface";
export default class VnNative3RouterStruct implements VnNative3RouterInterFace {
    config: Array<{
        url: string;
        name: string;
    }> | undefined;
    notFound: string = "";
    set(data: Array<{
        url: string,
        name: string
    }>, notFound: string = "NotFoundPage") {
        try {
            this.config = data;
            this.notFound = notFound;
        } catch (e: any) {
            return (new VnNative3Console).error(e.toString());
        }
    }
    async init() {
        let root: HTMLElement | null;
        root = document.getElementById("root");
        const urlParams = new URLSearchParams(window.location.search);
        let vn3page = urlParams.get('vn3page') ? urlParams.get('vn3page') : "/";
        try {
            const startLoad = () => {
                let platform: any;
                platform = window;
                let os: string;
                os = platform.device && platform.device.platform ? platform.device.platform : "browser";
                const assets = os === "iOS" ? "" : "/assets";
                this.config = this.config ? this.config : [];
                let isDevelopment = false;
                if (platform.location.href.includes("http://") == true) {
                    isDevelopment = true;
                }

                for (let i = 0; i < this.config.length; i++) {
                    if (vn3page && vn3page === this.config[i].url && os === "Android" && isDevelopment === false) {
                        let stylePage: HTMLElement = document.createElement("link");
                        stylePage.setAttribute('rel', 'stylesheet');
                        stylePage.setAttribute('href', `/assets/${this.config[i].name}/${this.config[i].name}.bundle.css`);
                        document.head.appendChild(stylePage);
                        let scriptPage: HTMLElement = document.createElement("script");
                        scriptPage.setAttribute('src', `/assets/${this.config[i].name}/${this.config[i].name}.bundle.js`);
                        document.body.appendChild(scriptPage);
                        (new VnNative3Console).log('Welcome to Vn Native 3 Frame Work');
                        (new VnNative3Console).log(`Starting  ${this.config[i].name}`);
                        break;
                    } else if (vn3page && vn3page === this.config[i].url && os === "iOS" && isDevelopment === false) {
                        let stylePage: HTMLElement = document.createElement("link");
                        stylePage.setAttribute('rel', 'stylesheet');
                        stylePage.setAttribute('href', `${this.config[i].name}.bundle.css`);
                        document.head.appendChild(stylePage);
                        let scriptPage: HTMLElement = document.createElement("script");
                        scriptPage.setAttribute('src', `${this.config[i].name}.bundle.js`);
                        document.body.appendChild(scriptPage);
                        (new VnNative3Console).log('Welcome to Vn Native 3 Frame Work');
                        (new VnNative3Console).log(`Starting  ${this.config[i].name}`);
                        break;
                    } else if (window.location.pathname === this.config[i].url && os === "Mac OS X") {
                        let stylePage: HTMLElement = document.createElement("link");
                        stylePage.setAttribute('rel', 'stylesheet');
                        stylePage.setAttribute('href', `${assets}/${this.config[i].name}/${this.config[i].name}.bundle.css`);
                        document.head.appendChild(stylePage);
                        let scriptPage: HTMLElement = document.createElement("script");
                        scriptPage.setAttribute('src', `${assets}/${this.config[i].name}/${this.config[i].name}.bundle.js`);
                        document.body.appendChild(scriptPage);
                        (new VnNative3Console).log('Welcome to Vn Native 3 Frame Work');
                        (new VnNative3Console).log(`Starting  ${this.config[i].name}`);
                        break;
                    } else if (window.location.pathname === this.config[i].url && os === "WinCE") {
                        let stylePage: HTMLElement = document.createElement("link");
                        stylePage.setAttribute('rel', 'stylesheet');
                        stylePage.setAttribute('href', `${assets}/${this.config[i].name}/${this.config[i].name}.bundle.css`);
                        document.head.appendChild(stylePage);
                        let scriptPage: HTMLElement = document.createElement("script");
                        scriptPage.setAttribute('src', `${assets}/${this.config[i].name}/${this.config[i].name}.bundle.js`);
                        document.body.appendChild(scriptPage);
                        (new VnNative3Console).log('Welcome to Vn Native 3 Frame Work');
                        (new VnNative3Console).log(`Starting  ${this.config[i].name}`);
                        break;
                    } else if (window.location.pathname === this.config[i].url && os === "browser") {
                        let stylePage: HTMLElement = document.createElement("link");
                        stylePage.setAttribute('rel', 'stylesheet');
                        stylePage.setAttribute('href', `${assets}/${this.config[i].name}/${this.config[i].name}.bundle.css`);
                        document.head.appendChild(stylePage);
                        let scriptPage: HTMLElement = document.createElement("script");
                        scriptPage.setAttribute('src', `${assets}/${this.config[i].name}/${this.config[i].name}.bundle.js`);
                        document.body.appendChild(scriptPage);
                        (new VnNative3Console).log('Welcome to Vn Native 3 Frame Work');
                        (new VnNative3Console).log(`Starting  ${this.config[i].name}`);
                        break;

                    } else if (window.location.pathname === this.config[i].url && isDevelopment === true) {
                        let stylePage: HTMLElement = document.createElement("link");
                        stylePage.setAttribute('rel', 'stylesheet');
                        stylePage.setAttribute('href', `${assets}/${this.config[i].name}/${this.config[i].name}.bundle.css`);
                        document.head.appendChild(stylePage);
                        let scriptPage: HTMLElement = document.createElement("script");
                        scriptPage.setAttribute('src', `${assets}/${this.config[i].name}/${this.config[i].name}.bundle.js`);
                        document.body.appendChild(scriptPage);
                        (new VnNative3Console).log('Welcome to Vn Native 3 Frame Work');
                        (new VnNative3Console).log(`Starting  ${this.config[i].name}`);
                        break;

                    }
                    if ((i + 1) === this.config.length) {
                        let stylePage: HTMLElement = document.createElement("link");
                        stylePage.setAttribute('rel', 'stylesheet');
                        stylePage.setAttribute('href', `${assets}/${this.notFound}/${this.notFound}.bundle.css`);
                        document.head.appendChild(stylePage);
                        let scriptPage: HTMLElement = document.createElement("script");
                        scriptPage.setAttribute('src', `${assets}/${this.notFound}/${this.notFound}.bundle.js`);
                        document.body.appendChild(scriptPage);
                        (new VnNative3Console).log('Welcome to Vn Native 3 Frame Work');
                        (new VnNative3Console).log(`Starting  ${this.notFound}`);
                        return;
                    }
                }
            }
            document.addEventListener("deviceready", startLoad, false);
        } catch (e: any) {
            return (new VnNative3Console).error(e.toString());
        }
    }
    async renderCurrentPage(name: any, page: any) {
        let root: HTMLElement | null;
        root = document.getElementById("root");
        await page.beforeRender();
        if (root) {
            root.innerHTML = await page.render();
        }
        await page.afterRender();
        window[name] = page;
    }
}