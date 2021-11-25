import VnNative3ConsoleInterFace from "./interface";
export default class VnNative3ConsoleCore implements VnNative3ConsoleInterFace {
    info(message: string): void;
    log(message: string): void;
    debug(message: string): void;
    error(message: string): void;
}
