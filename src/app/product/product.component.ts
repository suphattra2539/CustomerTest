import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AppService } from '../app.service';

import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers: [AppService]
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
    this.productGet = this.AppService.productService;

    this.AppService.getProduct().subscribe(data =>{
      console.log(data);
    });
  }
  onClick(){
    this.ProductVM = 0;
    this.openCeateCus = false ;
    this.CreateCusId = true ;
    
  }

  onEdit(productId : any){
    //
    this.CreateCusId = false ;
    console.log(productId);
    this.ProductVM = {...productId};
     console.log(this.ProductVM);

  

     this.openCeateCus = true ;
   

    

  }

  onEditProduct(){
   
        let Proid  = this.ProductVM.ProductId;
        let Name  : string = this.ProductVM.Name;
        let Price : number= this.ProductVM.Price;
         alert("Edit Ok");

      this.AppService.updateProduct(Proid ,Name , Price);
      this.ProductVM.ProductId = 0;
      this.ProductVM.Name ='';
      this.ProductVM.Price = 0;
      this.CreateCusId = false;
  }

  onClickSubmit(form : NgForm){
    console.log(this.signupForm);
  
    this.AppService.addProduct( this.signupForm.value.userData.ProductId,this.signupForm.value.userData.Name , this.signupForm.value.userData.Price);
    this.signupForm.reset();
  }


}
