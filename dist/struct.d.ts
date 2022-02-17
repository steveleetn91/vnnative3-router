import VnNative3RouterInterFace from "./interface";
export default class VnNative3RouterStruct implements VnNative3RouterInterFace {
    config: Array<{
        url: string;
        name: string;
    }> | undefined;
    set(data: Array<{
        url: string;
        name: string;
    }>): void;
    init(): Promise<void>;
    renderCurrentPage(name: any, page: any): Promise<void>;
}
