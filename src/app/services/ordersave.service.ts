import { HttpErrorResponse, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, Subject, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrdersaveService {
  BASE_URL = "https://ww9hj1fkpb.execute-api.us-east-1.amazonaws.com/dev"
  user = JSON.parse(sessionStorage.getItem("user") || '{}')


  uploadFile(fileContent : string | undefined ){
    const fileInput = {
      fileContent: fileContent,
      dealerId : this.user.dealerId
    }
    return this.http.post(this.BASE_URL+'/ordersave', fileInput).pipe(catchError(this.errorHandler));
  }

  editOrder(order: any) {
    return this.http.put(this.BASE_URL + '/orderUpdate', order).pipe(catchError(this.errorHandler));
  }

  fetchOrders(customerId : string , orderId : string, showAll : Boolean) {
    const orderInput = {
      "customerId":customerId,
      "orderId":orderId,
      "dealerId":this.user.dealerId,
      "showAll": showAll
    }
    return this.http.post(this.BASE_URL+'/orderlist', orderInput).pipe(catchError(this.errorHandler));
  }
  errorHandler(error: HttpErrorResponse) {
    return throwError(error.error.message || 'server Error');
  }

  constructor(private http : HttpClient) { }
  

}
