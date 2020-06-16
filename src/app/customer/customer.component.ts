import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AppService } from '../app.service';

import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
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
  constructor(private appService : AppService) { }
   customers: any [];

  customerVM:any;

  ngOnInit(){
    this.customers = this.appService.customers;
  }
  onClick(){
    this.appService.getCustomerEdit(null);
    this.openCeateCus = true ;
    this.CreateCusId = false ;
    //his.customerEditComponent.ngOnInit2(0);
  }

  

}
