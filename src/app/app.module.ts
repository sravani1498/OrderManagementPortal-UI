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

@NgModule({
  declarations: [
    AppComponent,
    DealerLoginComponent,
    OrderSubmissionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule, 
    HttpClientModule,
    SimpleNotificationsModule.forRoot({ timeOut: 3500})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
