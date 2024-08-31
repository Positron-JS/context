import { IPositronContext } from "./IPositronContext";

declare let positron;

export default class PositronInBrowser {

    static isAvailable = typeof positron !== "undefined";

    /**
     * This method does not accept any parameters.
     * @param fx Function to be executed in Positron App
     */
    static run<T>(fx: (this: IPositronContext) => T): Promise<T>;

    /**
     * This method accepts parameters as an object with fields
     * that does not contain any cyclic references. As this will
     * be sent to Positron App as JSON.
     * @param a Arguments object without any cyclic references.
     * @param fx Function to be executed in Positron App.
     */
    static run<P, T>(a: P, fx: (this: IPositronContext, p: P) => T): Promise<T>
    static async run(p, fx?): Promise<any> {
        if (typeof p === "function") {
            return positron.run(p);
        }
        return positron.run(fx, p);

    }

}