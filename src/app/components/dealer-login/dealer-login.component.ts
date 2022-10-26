import { Component, OnInit } from '@angular/core';

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
  }

  constructor() { }

  ngOnInit(): void {
  }

}
