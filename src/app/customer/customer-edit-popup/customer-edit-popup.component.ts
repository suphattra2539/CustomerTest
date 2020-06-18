import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { AppService } from 'src/app/app.service';
import { Customer } from 'src/app/models/customer';

@Component({
  selector: 'app-customer-edit-popup',
  templateUrl: './customer-edit-popup.component.html',
  styleUrls: ['./customer-edit-popup.component.css']
})
export class CustomerEditPopupComponent implements OnInit {

  cusEditHttp: Customer;
  constructor(public dialogRef: MatDialogRef<CustomerEditPopupComponent>,
    private appService: AppService) {

    this.cusEditHttp = this.appService.cusEditHttp;
    alert(JSON.stringify(this.cusEditHttp));
  }

  ngOnInit(): void {

  }
  getCustomrt(data :any) {
      alert;(data);
  }
  actionFunction() {
    alert('Ok');
    this.dialogRef.close();
  }
  closeModal() {
    this.dialogRef.close();
  }

}
