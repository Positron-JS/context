import PositronInBrowser from "../PositronInBrowser";

PositronInBrowser.run(function (a) {
    const Positron = this.clr.assembly("NeuroSpeech.Positron")
        .NeuroSpeech.Positron.Positron;

    const essentials = this.clr.assembly("Microsoft.Maui.Essentials");
    const MediaPicker = essentials.Microsoft.Maui.Media.MediaPicker;

    return Positron.instance.deviceToken;
})