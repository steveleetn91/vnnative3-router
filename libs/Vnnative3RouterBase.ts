import VnNative3Console from "vnnative3-console/dist/console";
import Vnnative3Location from 'vnnative3-location/dist/index';
import VnnativeOsIndex from "vnnative-3-os/dist/index"
import Vnnative3RouterBaseInterface from "./Vnnative3RouterBase.interface";
export default class Vnnative3RouterBase implements Vnnative3RouterBaseInterface {
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

        try {

            const startLoad = () => {
                let platform: any;
                platform = window;
                let os: string = (new VnnativeOsIndex).isOs();

                let root: HTMLElement | null;
                root = document.getElementById("root");
                const urlParams = new URLSearchParams(window.location.search);
                let vn3page: string | null = urlParams.get('vn3page') ? urlParams.get('vn3page') : "/";

                const assets: string = os === "iOS" || os === "software" ? "assets" : "/assets";
                this.config = this.config ? this.config : [];

                let stylePageHerf: string = "";
                let scriptPageSrc: string = "";

                for (let i = 0; i < this.config.length; i++) {
                    if (vn3page && vn3page === this.config[i].url && os === "Android") {
                        stylePageHerf = `${assets}/${this.config[i].name}/${this.config[i].name}.bundle.css`;
                        scriptPageSrc = `${assets}/${this.config[i].name}/${this.config[i].name}.bundle.js`;
                    } else if (vn3page && vn3page === this.config[i].url && os === "iOS") {
                        stylePageHerf = `${assets}/${this.config[i].name}/${this.config[i].name}.bundle.css`;
                        scriptPageSrc = `${assets}/${this.config[i].name}/${this.config[i].name}.bundle.js`;

                    } else if (window.location.pathname === this.config[i].url && os === "browser") {
                        stylePageHerf = `${assets}/${this.config[i].name}/${this.config[i].name}.bundle.css`;
                        scriptPageSrc = `${assets}/${this.config[i].name}/${this.config[i].name}.bundle.js`;
                    } else if (vn3page && vn3page === this.config[i].url && os === "software") {
                        stylePageHerf = `${assets}/${this.config[i].name}/${this.config[i].name}.bundle.css`;
                        scriptPageSrc = `${assets}/${this.config[i].name}/${this.config[i].name}.bundle.js`;
                    }
                    if (document.getElementById("pagestyle")) {
                        let root: HTMLElement | null = document.getElementById("root");
                        if (root) {
                            root.innerHTML = "";
                        }
                        document.getElementById("pagestyle")?.remove();
                    }
                    if (document.getElementById("pagescript")) {
                        document.getElementById("pagescript")?.remove();
                    }

                    let stylePage: HTMLElement = document.createElement("link");
                    stylePage.setAttribute('rel', 'stylesheet');
                    stylePage.setAttribute("id", "pagestyle");

                    let scriptPage: HTMLElement = document.createElement("script");
                    scriptPage.setAttribute("id", "pagescript");

                    if (stylePageHerf !== "" && scriptPageSrc !== "") {
                        stylePage.setAttribute('href', stylePageHerf);
                        document.head.appendChild(stylePage);
                        scriptPage.setAttribute('src', scriptPageSrc);
                        document.body.appendChild(scriptPage);
                        (new VnNative3Console).log('Welcome to Vn Native 3 Frame Work');
                        (new VnNative3Console).log(`Starting ${os} : ${this.config[i].name}`);
                        break;
                    }
                    if ((i + 1) === this.config.length) {
                        stylePage.setAttribute('href', `${assets}/${this.notFound}/${this.notFound}.bundle.css`);
                        document.head.appendChild(stylePage);
                        scriptPage.setAttribute('src', `${assets}/${this.notFound}/${this.notFound}.bundle.js`);
                        document.body.appendChild(scriptPage);
                        (new VnNative3Console).log('Welcome to Vn Native 3 Frame Work');
                        (new VnNative3Console).log(`Starting  ${this.notFound}`);
                        break;
                    }
                }
            }

            document.addEventListener("deviceready", () => {
                startLoad();
                let startHref: string = window.location.href;
                setInterval(() => {
                    let checkHref: string = window.location.href;
                    if (startHref === checkHref) {
                        return false;
                    } else {
                        startHref = checkHref;
                        startLoad();
                    }
                }, 1000);
            }, false);

        } catch (e: any) {
            return (new VnNative3Console).error(e.toString());
        }
    }
    supportMoveScreen(): void {

        try {
            let links: NodeListOf<Element> = document.querySelectorAll("#root a");
            links.forEach((link: Element) => {
                link.addEventListener("click", (ev: Event) => {
                    let routerLink: string | null = link.getAttribute("link");
                    let go: string = routerLink != null ? routerLink : "";
                    if (go !== "") {
                        (new Vnnative3Location).redirect.go(go, []);
                    }
                })
            })
        } catch (e: any) {
            return (new VnNative3Console).error(e.toString());
        }
    }
    async renderCurrentPage(name: any, page: any) {

        try {
            let root: HTMLElement | null;
            root = document.getElementById("root");
            await page.beforeRender();
            if (root) {
                root.innerHTML = await page.render();
            }
            await page.afterRender();
            this.supportMoveScreen();
        } catch (e: any) {
            return (new VnNative3Console).error(e.toString());
        }
    }
}