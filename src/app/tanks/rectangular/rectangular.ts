import {Tank, Increment} from '../tank';

export class Rectangular extends Tank implements iRectangular {
    length: number;
    width: number;
    height: number;
    increments: Increment[];

    constructor(length: number, width: number, height: number, calibrationChart: boolean = false, increment: number, tilt: number = 0, dipPoint: number = 0) {
        super(calibrationChart, increment, dipPoint, tilt);
        this.length = length;
        this.width = width;
        this.height = height;
    }

}


export interface iRectangular {
    length: number;
    width: number;
    height: number;

}