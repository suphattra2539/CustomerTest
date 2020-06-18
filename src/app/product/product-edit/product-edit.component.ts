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
  producrId: any;

  product: Product;

  constructor(private appService: AppService,
    private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    let queryParam = this.activeRoute.snapshot.queryParams;
    this.isAddMode = queryParam == null || queryParam.id == 0;
    this.producrId = +queryParam.id;

    this.appService.getProduct(this.producrId).subscribe((data: any) => {
      this.product = data;
      console.log("product : " +JSON.stringify(this.product));
    });
  }
  onEditProduct() {
    this.appService.updateProduct(this.product.productID, this.product.name, this.product.price);
  }
  onClickSubmit() {
    this.appService.addProduct(this.product.name, this.product.price);
  }

}
