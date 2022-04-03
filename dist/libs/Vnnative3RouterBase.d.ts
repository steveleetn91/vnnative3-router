import Vnnative3RouterBaseInterface from "./Vnnative3RouterBase.interface";
export default class Vnnative3RouterBase implements Vnnative3RouterBaseInterface {
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
