import { Component, Input, OnInit } from '@angular/core';
import { OrdersaveService } from 'src/app/services/ordersave.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {
  @Input()
  ordersList : Array <any> = [];
  constructor() { 
    if(history.state.ordersList.length > 0 ){
      this.ordersList = history.state.ordersList;
    }
  }

  edit(order :any){

  }
  ngOnInit(): void {
  }

}
