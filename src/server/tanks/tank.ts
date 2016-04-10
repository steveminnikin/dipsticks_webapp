export abstract class Tank {
    fullVolume: number;
    swc: number;
    
    getSWC(fullVolume: number){
        this.swc = Math.round(fullVolume *0.97);
    }
    
}