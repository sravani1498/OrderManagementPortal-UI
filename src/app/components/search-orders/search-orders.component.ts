import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { NotificationsService } from 'angular2-notifications';
import { OrdersaveService } from 'src/app/services/ordersave.service';

@Component({
  selector: 'app-search-orders',
  templateUrl: './search-orders.component.html',
  styleUrls: ['./search-orders.component.css']
})
export class SearchOrdersComponent implements OnInit {

  customerId :string = "";
  orderId: string = "";

  constructor(private service : OrdersaveService, 
    private router: Router,     
    private notification : NotificationsService) { }

  fetchOrder() {
    const observable = this.service.fetchOrders(this.customerId, this.orderId, false);
    observable.subscribe(
        (response: any) => {
        let navigationExtras: NavigationExtras = {
          state: {
            ordersList: response
          }
        };
        this.router.navigate(['orderList'], navigationExtras);
      } ,(error) => {
        this.notification.error(error);
      }
    )
  }

  ngOnInit(): void {
  }

}
