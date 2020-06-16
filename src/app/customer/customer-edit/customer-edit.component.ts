import { Component, OnInit, ViewChild } from '@angular/core';

import { NgForm } from '@angular/forms';
import { AppService } from 'src/app/app.service';
import { ActivatedRoute } from '@angular/router';
import { Customer } from 'src/app/models/customer';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {
  @ViewChild('f', { static: false }) signupForm: NgForm;
  public isAddMode: boolean = false;
  public customerId: any;

  customer: Customer;
  customerCreate: Customer;
  customerEdit: Customer;
  constructor(private appService: AppService,
    private activeRoute: ActivatedRoute) {
  }
  getCustomerCheckMax;
  ngOnInit() {
    this.getCustomerCheckMax = this.appService.customers;

    let queryParam = this.activeRoute.snapshot.queryParams;
    // console.log(queryParam);
    // this.activeRoute.params.subscribe(data =>{
    //   console.log(data);
    // })
    this.isAddMode = queryParam == null || queryParam.id == 0;
    this.customerId = +queryParam.id;

    let result = this.appService.getCustomerEdit(this.customerId);
    if (result != null) {
      this.customer = result;
      this.customerEdit = { ...result };
      console.log(this.customerEdit);
    } else {
      this.customer = new Customer();
    }
  }

  onEditCustomet() {
    this.appService.updateCustomer(this.customerEdit.customerId, this.customerEdit.Name, this.customerEdit.Age);
  }

  onClickSubmit(form: NgForm) {
    this.appService.addCustomer(this.signupForm.value.userData.Name, this.signupForm.value.userData.Age);
    this.signupForm.reset();
  }
}

