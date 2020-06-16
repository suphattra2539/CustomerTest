import { Component, OnInit, ViewChild } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  @ViewChild('f', { static: false }) signupForm: NgForm;
  public isAddMode: boolean = false;
  producrId : any ;
  
  productEdit : Product;
  getProductCheckId;

  constructor(private appService: AppService,
              private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    this.getProductCheckId = this.appService.products;
    let queryParam = this.activeRoute.snapshot.queryParams;
    this.isAddMode = queryParam == null || queryParam.id == 0;
    this.producrId = +queryParam.id;

    let result = this.appService.getProductEdit(this.producrId);
    if(result != null){
      this.producrId = result;
      this.productEdit = {...result};
      console.log(this.productEdit);
    }else{
      this.producrId = new Product();
    }
  }
  onEditProduct() {
    this.appService.updateProduct(this.productEdit.ProductId ,this.productEdit.Name , this.productEdit.Price);
  }
  onClickSubmit(form : NgForm) {
    this.appService.addProduct(this.signupForm.value.userData.Name , this.signupForm.value.userData.Price);
    this.signupForm.reset();
  }

}
