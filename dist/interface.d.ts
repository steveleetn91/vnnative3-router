export default interface VnNative3RouterInterFaceConfig {
    config: Array<{
        url: string;
        name: string;
    }> | undefined;
    notFound: string;
    set(data: Array<{
        url: string;
        name: string;
    }>, notFoundName: string): any;
    init(): any;
    renderCurrentPage(name: any, page: any): void;
}
