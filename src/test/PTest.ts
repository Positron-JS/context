import PositronInBrowser from "../PositronInBrowser";

PositronInBrowser.run(function (a) {
    const Positron = this.clr.assembly("NeuroSpeech.Positron")
        .NeuroSpeech.Positron.Positron;
    return Positron.instance.deviceToken;
})