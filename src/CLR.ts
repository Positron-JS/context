import { INeuroSpeechPositron } from "./clr/NeuroSpeech.Positron";

export interface ICLR {

    assembly<TA>(name: string): TA;

    assembly(name: "NeuroSpeech.Positron"): INeuroSpeechPositron;
    assembly(name: "Microsoft.Maui.Essentials"): import("./clr/Microsoft.Maui.Essentials").default;
}
