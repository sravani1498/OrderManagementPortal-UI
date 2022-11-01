import { Component, Input, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { OrdersaveService } from 'src/app/services/ordersave.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {
  @Input()
  ordersList : Array <any> = [];
  constructor(private router : Router) { 
    if(history.state.ordersList.length > 0 ){
      this.ordersList = history.state.ordersList;
    }
  }

  edit(order :any){
    let navigationExtras: NavigationExtras = {
      state: {
        order: order
      }
    };
    this.router.navigate(['editOrder'], navigationExtras);
  }
  ngOnInit(): void {
  }

}
