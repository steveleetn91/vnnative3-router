import VnNative3Console from "vnnative3-console/console";
import HTML404 from "vnnative3-webview/HTML404";
import VnNative3RouterInterFace from "./interface";
export default class VnNative3RouterStruct implements VnNative3RouterInterFace{
    config: Array<any>
    set(data : Array<any>) {
        try {
            this.config = data;
        }catch(e) {
            return (new VnNative3Console).error(e.toString(),'');
        }
    }
    init(){
        try {
            for(let i=0;i<this.config.length;i++){
                if(window.location.pathname === this.config[i].url) {
                    window[this.config[i].name] = (new this.config[i].page);
                    document.getElementById("root").innerHTML = (new this.config[i].page).render();
                    (new VnNative3Console).log('Vn Native 3 Frame Work','Welcome');
                    return;
                } 
                if((i + 1) === this.config.length) {
                    (new VnNative3Console).log('Vn Native 3 Frame Work','Welcome');
                    document.getElementById("root").innerHTML = (new HTML404).render();
                    return;
                }
            }
        }catch(e) {
            return (new VnNative3Console).error(e.toString(),'');
        }
    }
}