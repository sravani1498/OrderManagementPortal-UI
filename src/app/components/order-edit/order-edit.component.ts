import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NotificationsService } from 'angular2-notifications';
import { OrdersaveService } from 'src/app/services/ordersave.service';

@Component({
  selector: 'app-order-edit',
  templateUrl: './order-edit.component.html',
  styleUrls: ['./order-edit.component.css']
})
export class OrderEditComponent implements OnInit {
  order = {
    make : "",
    model : "",
    year : "",
    fuelType: "",
    customerId: "",
    customerName: "",
    city: "",
    orderId: "",
    orderStatus: ""
  }
  constructor(private service : OrdersaveService, private notification : NotificationsService, private router : Router) { 
    this.order = history.state.order;
  }

  edit() {
    console.log(this.order);
    const observable = this.service.editOrder(this.order);
    observable.subscribe(
      (response : any) => {
        this.notification.success("Book updated successfully");
        this.router.navigate(['orderDashboard']);
      },(error) => {
        this.notification.error(error);
      })
  }

  ngOnInit(): void {
  }

}
