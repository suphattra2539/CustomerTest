import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  productGet: any ;
  constructor(private AppService : AppService,
              private http : HttpClient) { }

  ngOnInit() {
    this.http.get('http://localhost:44343/api/Products').subscribe(data =>{
      this.productGet =  data;
      console.log(this.productGet);
    });

   
  }

}
