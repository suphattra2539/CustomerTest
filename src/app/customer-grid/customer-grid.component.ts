import { Component, OnInit, TemplateRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppService } from '../app.service';

import { DxDataGridModule } from 'devextreme-angular';
import { Customer } from '../models/customer';
import { MatDialog } from '@angular/material/dialog';
import { BsModalService } from 'ngx-bootstrap/modal';
@Component({
  selector: 'app-customer-grid',
  templateUrl: './customer-grid.component.html',
  styleUrls: ['./customer-grid.component.css']
})
export class CustomerGridComponent implements OnInit {
  [x: string]: any;
  customers: Customer;
  product: any[];


  dataSource: any;
  dataSourceEdit : any;
  collapsed = false;
  cusEditHttp: any;
  constructor(private http: HttpClient,
    private appService: AppService,

    public matDialog: MatDialog,
    private modalService: BsModalService) {

    this.dataSource = this.appService.rowData;
  }

  ngOnInit(): void {
    this.appService.getAllCustomer().subscribe((data: any) => {
      this.customers = data;
    })

  }


  contentReady = (e) => {
    if (!this.collapsed) {
      this.collapsed = true;
      e.component.expandRow(["EnviroCare"]);
    }
  };
  customizeTooltip = (pointsInfo) => {
    return { text: parseInt(pointsInfo.originalValue) + "%" };
  }


  onClick(template2: TemplateRef<any>, make: any) {
    console.log(make.data);
    
    this.openModal2(template2, {...make.data});
  }
  openModal2(template2: TemplateRef<any>, make: any) {
      // for(let i = 0 ; i < this.dataSource.length; i++){
      //   if(make.make == this.dataSource[i].make){
      //     let dataPass = this.dataSource[i];
      //     this.dataSourceEdit = {...dataPass};
      //   }
      // }
      this.dataSourceEdit = make;
      this.modalRef = this.modalService.show(template2);
  }

  actionFunction2() {
    this.appService.updateMake(this.dataSourceEdit.make, this.dataSourceEdit.model, this.dataSourceEdit.price);
    
  }

  ////////////////////////////

  onClick2(template: TemplateRef<any>, cusyomerId: any) {
    console.log(cusyomerId.data);
    this.openModal(template, cusyomerId.data);
  }


  openModal(template: TemplateRef<any>, customerId: any) {
    this.appService.getCustomer(customerId.id).subscribe((data: any) => {
      this.cusEditHttp = data;
      console.log(data);

      this.modalRef = this.modalService.show(template);
    });


  }

  actionFunction() {
    this.appService.updateCustomer(this.cusEditHttp.id, this.cusEditHttp.name, this.cusEditHttp.age).subscribe(data => {

      let data2: any = this.customers;
      for (let i = 0; i < data2.length; i++) {
        if (this.cusEditHttp.id == this.customers[i].id) {
          this.customers[i].name = this.cusEditHttp.name;
          this.customers[i].age = this.cusEditHttp.age;
        }
      }

      alert('ได้ทำการอัพเดทข้อมูลเรียบร้อยแล้ว');
      this.cusEditHttp = new Customer();
      //window.location.reload(); // refresh
      // this.appService.getAllCustomer().subscribe((data: any)=> {
      //   this.customers = data;
      // })
    }, error => {
      alert('ไม่สามารถอัพเดทข้อมูลได้ กรุณาตรวจสอบข้อมูลอีกครั้ง');
    })
    //this.dialogRef.close();
  }
}