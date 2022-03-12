import VnNative3RouterInterFace from "./interface";
export default class VnNative3RouterStruct implements VnNative3RouterInterFace {
    config: Array<{
        url: string;
        name: string;
    }> | undefined;
    notFound: string;
    set(data: Array<{
        url: string;
        name: string;
    }>, notFound?: string): void;
    init(): Promise<void>;
    supportMoveScreen(): void;
    renderCurrentPage(name: any, page: any): Promise<void>;
}
