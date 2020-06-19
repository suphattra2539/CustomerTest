import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { ActivatedRoute } from '@angular/router';
import { Customer } from 'src/app/models/customer';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {
  public isAddMode: boolean = false;
  public customerId: any;

  customer: Customer;
  customerEdit: Customer;
  constructor(private appService: AppService,
              private activeRoute: ActivatedRoute) {
  }
  getCustomerCheckMax;
  ngOnInit() {
    this.getCustomerCheckMax = this.appService.customerHttp;

    let queryParam = this.activeRoute.snapshot.queryParams;

    this.isAddMode = queryParam == null || queryParam.id == 0;
    this.customerId = +queryParam.id;
    console.log( this.customerId);//id

    this.appService.getCustomer(this.customerId).subscribe((data : any)=> {
      this.customer  = data;
    })

    // let result = this.appService.getCustomerEdit(this.customerId);
    // if (result != null) {
    //   this.customer = { ...result };
    //   console.log(this.customer);
    // } else {
    //   this.customer = new Customer();
    // }
  }

  onEditCustomet() {//edit
    this.appService.updateCustomer(this.customer.id, this.customer.name, this.customer.age).subscribe(data =>{
      alert('ได้ทำการอัพเดทข้อมูลเรียบร้อยแล้ว');
      this.customer = new Customer();
    },error =>{
      alert('ไม่สามารถอัพเดทข้อมูลได้ กรุณาตรวจสอบข้อมูลอีกครั้ง');
    })
  }

  onClickSubmit() {
    this.appService.addCustomer(this.customer.name , this.customer.age).subscribe(data =>{
        console.log(data);
        this.customer = new Customer();
    });
  }
}

