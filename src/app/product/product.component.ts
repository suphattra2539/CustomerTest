import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  productGet: any [];
  constructor(private AppService : AppService) { }

  ngOnInit() {
    this.productGet = this.AppService.products;
  }

}
