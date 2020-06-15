import { Component, OnInit, ViewChild } from '@angular/core';

import { NgForm } from '@angular/forms';
import { AppService } from 'src/app/app.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css'],
  providers: [AppService]
})
export class CustomerEditComponent implements OnInit {

  @ViewChild('f', { static: false }) signupForm: NgForm;
  editCustomer = {
    CustomerId: 0,
    Name: '',
    Age: 0
  };

  customerSet: { CustomerId: number, Name: string, Age: number }[] = [];

  public isAddMode : boolean = false;
  public customerId : number;

  constructor(private appService: AppService, 
    private activeRoute: ActivatedRoute) {
    // this.activeRoute.params.subscribe((data)=>{
    //   console.log(data);
    // })

    this.activeRoute.queryParams.subscribe((data) => {
      this.isAddMode = data == null || data.id == 0; 
      this.customerId = +data.id;
    });

  }

  ngOnInit() {
    this.appService.getCustomerEdit(this.customerId).subscribe((data) =>{
      console.log(data);
    });
    // this.editCustomer.CustomerId = this.customerGet.CustomerId;
    // this.editCustomer.Name = this.customerGet.Name;
    // this.editCustomer.Age = this.customerGet.Age;
  }

  onEditCustomet() {
    //updateCustomer
    //let d = JSON.stringify(this.customer);
    //console.log(d);
    let Cusid = this.editCustomer.CustomerId;
    let Name: string = this.editCustomer.Name;
    let Age: number = this.editCustomer.Age;
    alert("Edit Ok");

    this.appService.updateCustomer(Cusid, Name, Age);
    this.editCustomer.CustomerId = 0;
    this.editCustomer.Name = '';
    this.editCustomer.Age = 0;
    // this.CreateCusId = false;
  }
  
  onClickSubmit(form: NgForm) {

  }

}
