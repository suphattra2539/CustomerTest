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
    this.getCustomerCheckMax = this.appService.customers;
    let queryParam = this.activeRoute.snapshot.queryParams;
    this.isAddMode = queryParam == null || queryParam.id == 0;
    this.customerId = +queryParam.id;

    let result = this.appService.getCustomerEdit(this.customerId);
    if (result != null) {
      this.customer = result;
      this.customerEdit = { ...result };
    } else {
      this.customer = new Customer();
    }
  }

  onEditCustomet() {
    this.appService.updateCustomer(this.customerEdit.customerId, this.customerEdit.Name, this.customerEdit.Age);
  }

  onClickSubmit() {
    
    this.appService.addCustomer(this.customer.Name, this.customer.Age);
    this.customer =new Customer;
  }
}

