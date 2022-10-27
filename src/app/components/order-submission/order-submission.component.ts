import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-submission',
  templateUrl: './order-submission.component.html',
  styleUrls: ['./order-submission.component.css']
})
export class OrderSubmissionComponent implements OnInit {
  loading: boolean = false; // Flag variable
  file: File | undefined ;
  constructor() { }
  onUpload(){
    this.loading = !this.loading;
    console.log(this.file);
  }

  // On file Select
  onChange(event: any) {
    this.file = event.target.files[0];
}


  ngOnInit(): void {
  }

}
