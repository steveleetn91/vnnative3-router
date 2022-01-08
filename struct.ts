import VnNative3Console from "vnnative3-console/dist/console";
import VnNative3HTML404 from "vnnative3-webview/dist/HTML404";
import VnNative3RouterInterFace from "./interface";
export default class VnNative3RouterStruct implements VnNative3RouterInterFace {
    config: any;
    set(data: Array<any>) {
        try {
            this.config = data;
        } catch (e: any) {
            return (new VnNative3Console).error(e.toString());
        }
    }
    async init() {
        let root: HTMLElement | null;
        root = document.getElementById("root");
        const urlParams = new URLSearchParams(window.location.search);
        const vn3page = urlParams.get('vn3page');
        try {
            for (let i = 0; i < this.config.length; i++) {
                if (vn3page && vn3page === this.config[i].url && window.location.pathname.includes("/android_asset")) {
                    let scriptPage = document.createElement("script");
                    scriptPage.setAttribute('src',`/android_asset/assets/${this.config[i].name}/${this.config[i].name}.bundle.js`);
                    document.body.appendChild(scriptPage);
                    let stylePage = document.createElement("link");
                    stylePage.setAttribute('rel','stylesheet');
                    stylePage.setAttribute('href',`/android_asset/assets/${this.config[i].name}/${this.config[i].name}.bundle.css`);
                    document.head.appendChild(stylePage);
                    (new VnNative3Console).log('Welcome to Vn Native 3 Frame Work');
                    (new VnNative3Console).log(`Starting  ${this.config[i].name}`);
                    return;
                } else if (window.location.pathname === this.config[i].url) {
                    let scriptPage = document.createElement("script");
                    scriptPage.setAttribute('src',`/assets/${this.config[i].name}/${this.config[i].name}.bundle.js`);
                    document.body.appendChild(scriptPage);
                    let stylePage = document.createElement("link");
                    stylePage.setAttribute('rel','stylesheet');
                    stylePage.setAttribute('href',`/assets/${this.config[i].name}/${this.config[i].name}.bundle.css`);
                    document.head.appendChild(stylePage);
                    (new VnNative3Console).log('Welcome to Vn Native 3 Frame Work');
                    (new VnNative3Console).log(`Starting  ${this.config[i].name}`);
                    return;
                } else if (window.location.pathname === ('/android_asset' + this.config[i].url) ) {
                    let scriptPage = document.createElement("script");
                    scriptPage.setAttribute('src',`/android_asset/assets/${this.config[i].name}/${this.config[i].name}.bundle.js`);
                    document.body.appendChild(scriptPage);
                    let stylePage = document.createElement("link");
                    stylePage.setAttribute('rel','stylesheet');
                    stylePage.setAttribute('href',`/android_asset/assets/${this.config[i].name}/${this.config[i].name}.bundle.css`);
                    document.head.appendChild(stylePage);
                    (new VnNative3Console).log('Welcome to Vn Native 3 Frame Work');
                    (new VnNative3Console).log(`Starting  ${this.config[i].name}`);
                    return;
                }
                if ((i + 1) === this.config.length) {
                    (new VnNative3Console).log('Welcome to Vn Native 3 Frame Work');
                    if(root) {
                        root.innerHTML = (new VnNative3HTML404).render();
                    }
                    return;
                }
            }
        } catch (e: any) {
            return (new VnNative3Console).error(e.toString());
        }
    }
    async renderCurrentPage(name: any, page: any) {
        let root: HTMLElement | null;
        root = document.getElementById("root");
        await page.beforeRender();
        if(root){
            root.innerHTML = await page.render();
        }
        await page.afterRender();
        window[name] = page;
    }
}