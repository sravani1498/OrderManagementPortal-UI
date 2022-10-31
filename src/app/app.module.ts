import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DealerLoginComponent } from './components/dealer-login/dealer-login.component';
import { OrderSubmissionComponent } from './components/order-submission/order-submission.component';
import { OrderEditComponent } from './components/order-edit/order-edit.component';
import { OrderListComponent } from './components/order-list/order-list.component';
import { Route, RouterModule } from '@angular/router';
import { OrderDashboardComponent } from './components/order-dashboard/order-dashboard.component';
import { SearchOrdersComponent } from './components/search-orders/search-orders.component';

const routes: Route[] = [
  {
    path: 'login', component: DealerLoginComponent,
  },
  {
    path: '', component: DealerLoginComponent,
  },
  {
    path: 'orderUpload', component: OrderSubmissionComponent
  },
  {
    path: 'orderList', component: OrderListComponent
  },
  {
    path: 'orderDashboard', component: OrderDashboardComponent
  }, 
  {
    path: 'fetchOrder', component: SearchOrdersComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    DealerLoginComponent,
    OrderSubmissionComponent,
    OrderEditComponent,
    OrderListComponent,
    OrderDashboardComponent,
    SearchOrdersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule, 
    HttpClientModule,
    RouterModule.forRoot(routes),
    SimpleNotificationsModule.forRoot({ timeOut: 3500})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
