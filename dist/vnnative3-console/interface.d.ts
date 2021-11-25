export default interface VnNative3ConsoleInterFace {
    info(message: string, key: any): void;
    log(message: string, key: any): void;
    debug(message: string, key: any): void;
    error(message: string, key: any): void;
}
