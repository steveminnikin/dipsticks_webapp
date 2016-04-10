import {Component, OnInit} from 'angular2/core';
import {Tank, Units} from '../tank';
import {Rectangular} from './rectangular';
import {RectangularService} from './rectangular.service';

@Component({
    selector: 'rectangular-input',
    templateUrl: '/app/tanks/rectangular/rectangular-input.component.html',
    providers: [RectangularService]
})

export class RectangularInputComponent implements OnInit  {
    rect: Rectangular;

   constructor(private _rectangularService: RectangularService){
            
       
   }

    ngOnInit() { 
        this.rect = new Rectangular(null,null,null,false,null);
        this.rect.increments =  [];
    }
    
    calculate(rect: Rectangular){
        
        this.rect.fullVolume = this._rectangularService.calcFullVolume(rect);
        this.rect.increments = this._rectangularService.calcIncrements(rect);
        
        console.log(this.rect.fullVolume);
        //console.log(this.rect.increments);
        
        
    }
}