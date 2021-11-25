import VnNative3RouterInterFace from "./interface";
export default class VnNative3RouterStruct implements VnNative3RouterInterFace {
    config: any;
    set(data: Array<any>): void;
    init(): Promise<void>;
}
