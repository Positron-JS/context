export declare class Positron {

    static instance: Positron;

    deviceToken: string;
    appUrl: string;
    shareRequested: string;
}

/** Don't forget to call dispose */
export declare class ProgressPanel {
    static create(name: string): ProgressPanel;

    progress: number;

    dispose(): void;
}

export interface INeuroSpeechPositron {

    NeuroSpeech: {
        Positron: {
            Positron: typeof Positron;

            Controls: {
                ProgressPanel: typeof ProgressPanel;
            }
        },
        
    }

}