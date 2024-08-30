import { IPositronContext } from "./IPositronContext";

declare let positron;

export default class PositronInBrowser {

    static async run<T>(fx: (this: IPositronContext, ... a) => T, ... p: any[]): Promise<T> {

        return positron.run(fx, ... p);

    }

}