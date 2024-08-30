import { INeuroSpeechPositron } from "./clr/NeuroSpeech.Positron";
import { IMicrosoft_Maui_Essentials } from "./clr/Microsoft.Maui.Essentials";

export interface ICLR {

    assembly<TA>(name: string): TA;

    assembly(name: "NeuroSpeech.Positron"): INeuroSpeechPositron;
    assembly(name: "Microsoft.Maui.Essentials"): IMicrosoft_Maui_Essentials;
}
