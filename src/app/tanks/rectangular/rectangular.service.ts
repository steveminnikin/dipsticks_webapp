import {Injectable} from 'angular2/core';
import {Rectangular} from './rectangular';
import {Increment} from '../tank';

@Injectable()
export class RectangularService {
    
    
        calcFullVolume(rect: Rectangular){
            return rect.length * rect.width * rect.height * 0.000001;
        }
    
         calcIncrements(rect: Rectangular): Increment[] {
         let partialDepth: number;
         const area: number = rect.width * rect.length * 0.0001
         if (rect.calibrationChart){
         return [
             {volume: 103, height: 10},
             {volume: 202, height: 20},
             {volume: 323, height: 30},
             ]
             
         } else {
             for (let partialVolume = rect.increment; rect.fullVolume; partialVolume+=rect.increment){                          
                 partialDepth = partialVolume * 0.01 / area;
                 console.log(partialVolume + ': ' + partialDepth);
             }
         return [
             {volume: 100, height: 10.3},
             {volume: 200, height: 22.2},
             {volume: 300, height: 31.3},
             ]
             
         }
          
     }

}



