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
  public producrId: any;

  products:Product;

  constructor(private appService: AppService,
              private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    let queryParam = this.activeRoute.snapshot.queryParams;
    this.isAddMode = queryParam == null || queryParam.id == 0;
    this.producrId = +queryParam.id;

    this.appService.getProduct(this.producrId).subscribe((data: any) => {
      this.products = data;
      console.log("get id  : " , this.products);
    });
  }
  onEditProduct() {
    this.appService.updateProduct(this.products.productID, this.products.name, this.products.price);
  }
  onClickSubmit() {
    this.appService.addProduct(this.products.name, this.products.price);
  }

}
