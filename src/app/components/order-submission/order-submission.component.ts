import { Component, OnInit } from '@angular/core';
import { OrdersaveService } from 'src/app/services/ordersave.service';
import { Observable, ReplaySubject, Subscription } from 'rxjs';  
import { NavigationExtras, Router } from '@angular/router';
import { NotificationsService } from 'angular2-notifications';

@Component({
  selector: 'app-order-submission',
  templateUrl: './order-submission.component.html',
  styleUrls: ['./order-submission.component.css']
})
export class OrderSubmissionComponent implements OnInit {
  fileContent : string | undefined;

  onFileSelected(event : any) {
    this.convertFile(event.target.files[0]).subscribe((base64: string | undefined) => {
      this.fileContent = base64;
      this.uploadFile();
    });
  }

  uploadFile() {
    const observable = this.orderService.uploadFile(this.fileContent) ;
      observable.subscribe(
        (response : any) => {
          let navigationExtras: NavigationExtras = {
            state: {
              ordersList: response
            }
          };
          this.router.navigate(['orderDashboard'], navigationExtras);
          this.notification.success("File upload Success");
        },(error) => {
          this.notification.error(error);
        }
      )
    
  }

  convertFile(file : File) : Observable<string> {
    const result = new ReplaySubject<string>(1);
    const reader = new FileReader();
    reader.readAsBinaryString(file);
    reader.onload = (event:any) => result.next(btoa(event.target.result.toString()));
    return result;
  }

  constructor(private  orderService: OrdersaveService,
    private router: Router, private notification : NotificationsService
    ) { }

  
  ngOnInit(): void {
  }

}
