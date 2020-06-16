import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  constructor(private appService : AppService) { }
   customers: any [];
  ngOnInit(){
    this.customers = this.appService.customers;
  }
  onDeleteCustomer(customer : any){
    let customerDelete = {...customer};
    this.appService.getDeleteCustomer(customerDelete.customerId);
  }
}
