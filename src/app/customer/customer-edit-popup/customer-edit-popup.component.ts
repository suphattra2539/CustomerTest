import { Component, OnInit, Input } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { AppService } from 'src/app/app.service';
import { Customer } from 'src/app/models/customer';

@Component({
  selector: 'app-customer-edit-popup',
  templateUrl: './customer-edit-popup.component.html',
  styleUrls: ['./customer-edit-popup.component.css']
})
export class CustomerEditPopupComponent implements OnInit {
  @Input() public user;

  cusEditHttp: Customer;
  constructor(public dialogRef: MatDialogRef<CustomerEditPopupComponent>,
              private appService: AppService) {}

  ngOnInit(){

  }
  getCustomrt(data :any) {
    let data2 = data;
    this.appService.getCustomer(data2).subscribe((data : any)=>{
      this.cusEditHttp = data;
    })
  }
  actionFunction() {
    this.appService.updateCustomer(this.cusEditHttp.id, this.cusEditHttp.name,this.cusEditHttp.age).subscribe(data =>{
      alert('ได้ทำการอัพเดทข้อมูลเรียบร้อยแล้ว');
      this.cusEditHttp = new Customer();
     // window.location.reload(); // refresh
    },error =>{
      alert('ไม่สามารถอัพเดทข้อมูลได้ กรุณาตรวจสอบข้อมูลอีกครั้ง');
    })
    this.dialogRef.close();
  }
  closeModal() {
    this.dialogRef.close();
  }

}
