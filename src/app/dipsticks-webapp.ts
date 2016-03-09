import {Component} from 'angular2/core';


@Component({
  selector: 'dipsticks-webapp-app',
  providers: [],
  templateUrl: 'app/dipsticks-webapp.html',
  directives: [],
  pipes: []
})
export class DipsticksWebappApp {
  defaultMeaning: number = 42;
  
  meaningOfLife(meaning) {
    return `The meaning of life is ${meaning || this.defaultMeaning}`;
  }
}
