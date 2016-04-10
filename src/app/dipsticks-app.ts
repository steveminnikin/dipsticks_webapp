import {Component, OnInit} from 'angular2/core';
import {UserService, myUser} from './user/user.service';
import {ROUTER_DIRECTIVES, ROUTER_PROVIDERS, RouteConfig} from 'angular2/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {RectangularInputComponent} from './tanks/rectangular/rectangular-input.component';


@Component({
  selector: 'dipsticks-app',
  providers: [
   UserService,
   ROUTER_PROVIDERS
   ],
  templateUrl: 'app/dipsticks-app.html',
  directives: [ROUTER_DIRECTIVES],
  pipes: []
})

@RouteConfig([
  {path: '/', name: 'Index', component: DashboardComponent, useAsDefault: true},
  {path: '/rectangular', name: 'Rectangular', component: RectangularInputComponent}
])

export class DipsticksApp {
    user: myUser;
    
    constructor(userService: UserService){
        this.user = userService.getCurrentuser();
    }
    
 
    
  
  

}
