import { Component, OnInit, ViewChild, Injectable } from '@angular/core';

import { NgForm } from '@angular/forms';
import { AppService } from 'src/app/app.service';
import { ActivatedRoute } from '@angular/router';

@Injectable()
@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css'],
  providers: [AppService]
})
export class CustomerEditComponent implements OnInit {

  @ViewChild('f', { static: false }) signupForm: NgForm;
  editCustomer2 = {
    CustomerId: 0,
    Name: '',
    Age: 0
  };
  createCustomer = {
    CustomerId :0,
    Name : '' ,
    Age: 0 
  };

  customerSet: { CustomerId: number, Name: string, Age: number }[] = [];

  public isAddMode : boolean = false;
  public customerId : any;

  constructor(private appService: AppService, 
    private activeRoute: ActivatedRoute) {
    // this.activeRoute.params.subscribe((data)=>{
    //   console.log(data);
    // })

    //this.activeRoute.queryParams.subscribe((data) => {
      //this.isAddMode = data == null || data.id == 0; 
     // this.customerId = +data.id;
    //});

  }

  ngOnInit() {
    //this.customerId = this.appService.customerIdEdit;
    //console.log("data : "+this.appService.customerIdEdit);
    //subscribe((data) =>{
    //    console.log("data : "+data);
    //  });
    // this.editCustomer.CustomerId = this.customerGet.CustomerId;
    // this.editCustomer.Name = this.customerGet.Name;
    // this.editCustomer.Age = this.customerGet.Age;
    alert('1');
   
  }
  ngOnInit1(customerID : any){
    alert('2');
    this.customerId = {...customerID};
    this.editCustomer2.CustomerId = this.customerId.CustomerId;
    this.editCustomer2.Name = this.customerId.Name;
    this.editCustomer2.Age = this.customerId.Age;
    console.log(this.editCustomer2.CustomerId + "/" + this.editCustomer2.Name + "/"+ this.editCustomer2.Age);
  }

  onEditCustomet() {
    //updateCustomer
    //let d = JSON.stringify(this.customer);
    //console.log(d);

    // let Cusid = this.editCustomer.CustomerId;
    // let Name: string = this.editCustomer.Name;
    // let Age: number = this.editCustomer.Age;
    // alert("Edit Ok");

    // this.appService.updateCustomer(Cusid, Name, Age);
    // this.editCustomer.CustomerId = 0;
    // this.editCustomer.Name = '';
    // this.editCustomer.Age = 0;

    // this.CreateCusId = false;
  }
  
  onClickSubmit(form : NgForm){
    // console.log(this.signupForm);
    // this.createCustomer.CustomerId =  this.signupForm.value.userData.CustomerId;
    // this.createCustomer.Name =  this.signupForm.value.userData.Name;
    // this.createCustomer.Age =  this.signupForm.value.userData.Age;
    //this.customerConponent.onCearte2(this.createCustomer);
  }

}
