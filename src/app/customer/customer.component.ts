import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AppService } from '../app.service';

import { NgForm } from '@angular/forms';
import { CustomerEditComponent } from './customer-edit/customer-edit.component';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css'],
  providers: [AppService,CustomerEditComponent]
})
export class CustomerComponent implements OnInit {
  @ViewChild('f',  { static: false }) signupForm: NgForm;
  @ViewChild('ff',  { static: false }) signupForm2: NgForm;
    
  openCeateCus = false;
  CreateCusId = false ;
  editCustomer = {
    CustomerId :0,
    Name : '' ,
    Age: 0 
  };
  createCustomer = {
    CustomerId :0,
    Name : '' ,
    Age: 0 
  };


  customerSet: {CustomerId:number, Name : string, Age : number}[]=[];
  constructor(private appService : AppService,private customerEditComponent : CustomerEditComponent) { }
   customer: any [];

  customerVM:any;

  ngOnInit(){
    this.customer = this.appService.customers;
  }
  onClick(){
    this.appService.getCustomerEdit(null);
    this.openCeateCus = true ;
    this.CreateCusId = false ;
  }

  onEdit(customerId : any){

    this.openCeateCus = false ;
    this.CreateCusId = true ;
  
    this.customerVM = {...customerId};
    let customerID = this.customerVM.CustomerId; 
    console.log(this.customerVM);
    this.appService.getCustomerEdit(customerId);
    this.customerEditComponent.ngOnInit1(this.customerVM);
  
    
    let  T_CusId = this.customerVM.CustomerId;
    let T_Name = this.customerVM.Name;
    let T_Age = this.customerVM.Age;
    
    this.editCustomer.CustomerId = T_CusId;
    this.editCustomer.Name = T_Name;
    this.editCustomer.Age = T_Age;
    
  }
  onEditCustomet()
  {
      //updateCustomer
      //let d = JSON.stringify(this.customer);
      //console.log(d);
      let Cusid  = this.editCustomer.CustomerId;
      let Name  : string = this.editCustomer.Name;
      let Age : number= this.editCustomer.Age;
      alert("Edit Ok");

     this.appService.updateCustomer(Cusid ,Name , Age);
     this.editCustomer.CustomerId = 0;
     this.editCustomer.Name ='';
     this.editCustomer.Age = 0;
     this.CreateCusId = false;
  }

  onClickSubmit(form : NgForm){
    console.log(this.signupForm);
  
     this.createCustomer.CustomerId =  this.signupForm.value.userData.CustomerId;
     this.createCustomer.Name =  this.signupForm.value.userData.Name;
     this.createCustomer.Age =  this.signupForm.value.userData.Age;

     console.log(this.createCustomer.CustomerId);
     
     this.appService.addCustomer( this.signupForm.value.userData.CustomerId,this.signupForm.value.userData.Name , this.signupForm.value.userData.Age);
     this.signupForm.reset();
  }
  onEdit2(){

  }

}
