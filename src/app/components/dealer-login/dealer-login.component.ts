import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NotificationsService } from 'angular2-notifications';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-dealer-login',
  templateUrl: './dealer-login.component.html',
  styleUrls: ['./dealer-login.component.css']
})
export class DealerLoginComponent implements OnInit {
  user = {
    username:"",
    password:""
  }

  login(){
    const observable = this.loginService.login(this.user);
    observable.subscribe(
      (response : any) => {
        sessionStorage.setItem("user", JSON.stringify(response));
        this.router.navigate(['orderDashboard']);
        this.notification.success("Login Success");
      },(error) => {
        this.notification.error(error);
      }
    )
  }
  constructor(private loginService : LoginService,
    private router: Router, private notification : NotificationsService
    ) { }

  ngOnInit(): void {
  }

}
