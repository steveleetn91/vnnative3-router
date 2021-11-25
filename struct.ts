import VnNative3Console from "../vnnative3-console/console";
import VnNative3HTML404 from "../vnnative3-webview/HTML404";
import VnNative3RouterInterFace from "./interface";
export default class VnNative3RouterStruct implements VnNative3RouterInterFace{
    config: Array<any>
    set(data : Array<any>) {
        try {
            this.config = data;
        }catch(e) {
            return (new VnNative3Console).error(e.toString());
        }
    }
    async init(){
        try {
            for(let i=0;i<this.config.length;i++){
                if(window.location.pathname === this.config[i].url) {
                    window[this.config[i].name] = (new this.config[i].page);
                    let page = (new this.config[i].page);
                    await page.beforeRender();
                    document.getElementById("root").innerHTML = page.render();
                    await page.afterRender();
                    (new VnNative3Console).log('Welcome to Vn Native 3 Frame Work');
                    return;
                } 
                if((i + 1) === this.config.length) {
                    (new VnNative3Console).log('Welcome to Vn Native 3 Frame Work');
                    document.getElementById("root").innerHTML = (new VnNative3HTML404).render();
                    return;
                }
            }
        }catch(e) {
            return (new VnNative3Console).error(e.toString());
        }
    }
}