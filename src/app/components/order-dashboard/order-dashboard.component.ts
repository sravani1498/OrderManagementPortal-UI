import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { NotificationsService } from 'angular2-notifications';
import { OrdersaveService } from 'src/app/services/ordersave.service';

@Component({
  selector: 'app-order-dashboard',
  templateUrl: './order-dashboard.component.html',
  styleUrls: ['./order-dashboard.component.css']
})
export class OrderDashboardComponent implements OnInit {
  ordersList : Array <any> = [];

  constructor(private router : Router, private service :OrdersaveService, private notification : NotificationsService) {
    if(history.state.ordersList){
      this.ordersList = history.state.ordersList;
    }
   }


  uploadFile() {
    this.router.navigate(['orderUpload']);
  }

  fetchOrder() {
    this.router.navigate(['fetchOrder']);
  }

  showAll() {
    const observable = this.service.fetchOrders("", "", true);
    observable.subscribe(
        (response: any) => {
        let navigationExtras: NavigationExtras = {
          state: {
            ordersList: response.responseBody
          }
        };
        this.router.navigate(['orderList'], navigationExtras);
      } ,(error) => {
        this.notification.error(error);
      }
    )
  }
  edit(order: any){

  }

  ngOnInit(): void {
  }

}
