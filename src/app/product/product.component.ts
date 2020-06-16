import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AppService } from '../app.service';

import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  
  @ViewChild('f',  { static: false }) signupForm: NgForm;
    
  openCeateCus = false;
  CreateCusId = false ;

  ProductVM;

  createProduct :{
    ProductId : 0,
    Name : '',
    Price : 0
  }
  editProduct :{
    ProductId : 0,
    Name : '',
    Price : 0
  }
  ProductSet: { ProductId:number, Name : string, Price : number }[]=[];
  constructor(private AppService : AppService) { }

  productGet: any [];
  
  ngOnInit() {
    this.productGet = this.AppService.products;

    this.AppService.getProduct().subscribe(data =>{
      console.log(data);
    });
  }
  onClick(){
    this.ProductVM = 0;
    this.openCeateCus = false ;
    this.CreateCusId = true ;
  }

}
