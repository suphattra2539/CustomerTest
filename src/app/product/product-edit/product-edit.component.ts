import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  public isAddMode: boolean = false;
  producrId : any ;
  
  productEdit : Product;
  product : Product;

  constructor(private appService: AppService,
              private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    let queryParam = this.activeRoute.snapshot.queryParams;
    this.isAddMode = queryParam == null || queryParam.id == 0;
    this.producrId = +queryParam.id;

    let result = this.appService.getProductEdit(this.producrId);
    if(result != null){
      this.product = result;
      this.productEdit = {...result};
    }else{
      this.product = new Product();
    }
  }
  onEditProduct() {
    this.appService.updateProduct(this.productEdit.ProductId ,this.productEdit.Name , this.productEdit.Price);
  }
  onClickSubmit() {
    this.appService.addProduct(this.product.Name , this.product.Price);
  }

}
