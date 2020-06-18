import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { HttpClient  } from '@angular/common/http';
import { Customer } from '../models/customer';
import { MatDialog , MatDialogConfig} from '@angular/material/dialog';
import { CustomerEditPopupComponent } from './customer-edit-popup/customer-edit-popup.component';
@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  customers: any [];
  constructor(private appService : AppService,
              private http : HttpClient,
              public matDialog: MatDialog) { }
              
  customerServiceHttp : Customer;
  ngOnInit(){
    this.customers = this.appService.customers;

    this.http.get<any>('http://localhost:44343/api/Customers')
      .subscribe((data: any) => 
      {
        this.customerServiceHttp = data;
          console.log(this.customerServiceHttp);
         
      });
    this.appService.customerHttp = this.customerServiceHttp
  }

  onDeleteCustomer(customerId : any){
    this.appService.getDeleteCustomer(customerId).subscribe(data => {
      alert('ลบข้อมูลสำเร็จแล้ว');
    },error=>{
      alert('ลบข้อมูลไม่สำเร็จ');
    });
  }

  openModal(customerId : any) {
    this.appService.getCustomer2(customerId);
    if(this.appService.cusEditHttp.id != 0){
      const dialogConfig = new MatDialogConfig();
      dialogConfig.disableClose = true;
      const modalDialog2 = this.matDialog.open(CustomerEditPopupComponent, dialogConfig);
    }
   
  }
}
