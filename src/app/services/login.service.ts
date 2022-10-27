import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  BASE_URL = "https://rkn9ct1lfa.execute-api.us-east-1.amazonaws.com/dev"


  login(user : {username : string , password: string}){
    return this.http.post(this.BASE_URL+'/dealer', user).pipe(catchError(this.errorHandler));;
  }
  errorHandler(error: HttpErrorResponse) {
    return throwError(error.error.message || 'server Error');
  }

  constructor(private http : HttpClient) { }
}
