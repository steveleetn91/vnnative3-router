import VnNative3Console from "vnnative3-console/console";
import VnNative3HTML404 from "vnnative3-webview/HTML404";
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
        let root: any;
        root = document.getElementById("root");
        try {
            for (let i = 0; i < this.config.length; i++) {
                if (window.location.pathname === this.config[i].url) {
                    let scriptPage = document.createElement("script");
                    scriptPage.setAttribute('src',`/assets/${this.config[i].name}`);
                    document.body.appendChild(scriptPage);
                    (new VnNative3Console).log('Welcome to Vn Native 3 Frame Work');
                    (new VnNative3Console).log(`Starting  ${scriptPage}`);
                    return;
                }
                if ((i + 1) === this.config.length) {
                    (new VnNative3Console).log('Welcome to Vn Native 3 Frame Work');
                    root.innerHTML = (new VnNative3HTML404).render();
                    return;
                }
            }
        } catch (e: any) {
            return (new VnNative3Console).error(e.toString());
        }
    }
    async renderCurrentPage(name: any, page: any) {
        let root: any;
        root = document.getElementById("root");
        await page.beforeRender();
        root.innerHTML = await page.render();
        await page.afterRender();
        window[name] = page;
    }
}