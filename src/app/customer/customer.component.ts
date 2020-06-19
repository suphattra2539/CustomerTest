import { Component, OnInit, TemplateRef } from '@angular/core';
import { AppService } from '../app.service';
import { HttpClient } from '@angular/common/http';
import { Customer } from '../models/customer';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CustomerEditPopupComponent } from './customer-edit-popup/customer-edit-popup.component';
import { Button } from 'protractor';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  customers: any[];

  modalRef: BsModalRef;
  cusEditHttp: Customer;
  constructor(private appService: AppService,
    private http: HttpClient,
    public matDialog: MatDialog,
    private modalService: BsModalService
  ) { }

  customerServiceHttp: Customer;
  ngOnInit() {
    this.appService.getAllCustomer().subscribe((data :any) =>{
      this.customerServiceHttp = data ;
    })
  }
  createCustomer(){
    //this.openModal();
  }
  
  openModal(template: TemplateRef<any>, cusyomerId: any) {
    this.appService.getCustomer(cusyomerId).subscribe((data: any) => {
      this.cusEditHttp = data;
      this.modalRef = this.modalService.show(template);
    })
  }
 
  actionFunction() {
    this.appService.updateCustomer(this.cusEditHttp.id, this.cusEditHttp.name, this.cusEditHttp.age).subscribe(data => {
      alert('ได้ทำการอัพเดทข้อมูลเรียบร้อยแล้ว');
      this.cusEditHttp = new Customer();
      window.location.reload(); // refresh
    }, error => {
      alert('ไม่สามารถอัพเดทข้อมูลได้ กรุณาตรวจสอบข้อมูลอีกครั้ง');
    })
    //this.dialogRef.close();
  }
  closeModal() {
    //this.dialogRef.close();
  }

 
  onDeleteCustomer(deleteCustomer : TemplateRef<any> ,customerId: any) {
    this.appService.getDeleteCustomer(customerId).subscribe(data => {
      alert('ลบข้อมูลสำเร็จแล้ว');
    },error=>{
      alert('ลบข้อมูลไม่สำเร็จ');
    });
    this.modalRef = this.modalService.show(deleteCustomer);
  }
  actionFunctionDelete() {
    this.appService.updateCustomer(this.cusEditHttp.id, this.cusEditHttp.name,this.cusEditHttp.age).subscribe(data =>{
      alert('ได้ทำการอัพเดทข้อมูลเรียบร้อยแล้ว');
      this.cusEditHttp = new Customer();
      window.location.reload(); // refresh
    },error =>{
      alert('ไม่สามารถอัพเดทข้อมูลได้ กรุณาตรวจสอบข้อมูลอีกครั้ง');
    })
    //this.dialogRef.close();
  }
  closeModalDelete() {
    //this.dialogRef.close();
  }

  
}
