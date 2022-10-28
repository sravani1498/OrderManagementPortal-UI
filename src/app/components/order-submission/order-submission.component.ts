import { Component, OnInit } from '@angular/core';
import { OrdersaveService } from 'src/app/services/ordersave.service';
import { Observable, ReplaySubject, Subscription } from 'rxjs';  

@Component({
  selector: 'app-order-submission',
  templateUrl: './order-submission.component.html',
  styleUrls: ['./order-submission.component.css']
})
export class OrderSubmissionComponent implements OnInit {
  base64Output : string | undefined;

  onFileSelected(event : any) {
    this.convertFile(event.target.files[0]).subscribe((base64: string | undefined) => {
      this.base64Output = base64;
      console.log(base64);
    });
  }

  convertFile(file : File) : Observable<string> {
    const result = new ReplaySubject<string>(1);
    const reader = new FileReader();
    reader.readAsBinaryString(file);
    reader.onload = (event:any) => result.next(btoa(event.target.result.toString()));
    return result;
  }
  
  ngOnInit(): void {
  }

}
