import { IPositronContext } from "./IPositronContext";

declare let positron;

export default class PositronInBrowser {

    static isAvailable = typeof positron !== "undefined";

    static async run<P, T>(a: P, fx: (this: IPositronContext, p: P) => T): Promise<T> {

        return positron.run(fx, a);

    }

}