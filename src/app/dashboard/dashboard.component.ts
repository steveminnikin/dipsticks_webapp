import {Component, OnInit} from 'angular2/core';



@Component({
  selector: 'dashboard',
  templateUrl: 'app/dashboard/dashboard.component.html',
  providers: [],
  directives: [],
  pipes: []
})
export class DashboardComponent implements OnInit{
    public title: string = "This is the Dashboard page";
    //public orders: Order[];
    //public selectedOrder: Order;

  constructor() {}
  
  ngOnInit(){}

}
