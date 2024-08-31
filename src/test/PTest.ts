import PositronInBrowser from "../PositronInBrowser";

PositronInBrowser.run(function () {
    const Positron = this.clr.assembly("NeuroSpeech.Positron")
        .NeuroSpeech.Positron.Positron;

    const essentials = this.clr.assembly("Microsoft.Maui.Essentials");
    const { MediaPicker } = essentials.Microsoft.Maui.Media;

    const graphics = this.clr.assembly("Microsoft.Maui.Graphics");

    const { Colors } = graphics.Microsoft.Maui.Graphics;

    Colors.orange

    return Positron.instance.deviceToken;
})