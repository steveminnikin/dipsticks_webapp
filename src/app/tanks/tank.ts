export abstract class Tank {
    tilt: number;
    dipPoint: number;
    fullVolume: number;
    increment: number;
    calibrationChart: boolean;
    incrementList: Increment[];
    outputUnits: Units;

    constructor(calibrationChart: boolean, increment: number, units: Units, dipPoint: number = undefined, tilt: number = undefined) {
        this.calibrationChart = calibrationChart;
        this.increment = increment;
        this.outputUnits = units;
    };

    static volumeConversionFactor(units: Units) {
        return 0.0001;

    }


}

export interface Increment {
    volume: number;
    height: number;
}

export enum Units{
    LitresMMs,
    GallonsInches
    
}
