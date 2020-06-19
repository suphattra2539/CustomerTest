import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppService } from '../app.service';


// import { NgModule, Pipe, PipeTransform, enableProdMode } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
// import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
// import { DxDataGridModule, DxBulletModule, DxTemplateModule } from 'devextreme-angular';
//import { DxDataGridModule } from 'devextreme-angular';
//import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { DxDataGridModule } from 'devextreme-angular';
@Component({
  selector: 'app-customer-grid',
  templateUrl: './customer-grid.component.html',
  styleUrls: ['./customer-grid.component.css']
})
export class CustomerGridComponent implements OnInit {
  customers: any[];
  product: any[];

  rowData = [
    { make: 'Toyota', model: 'Celica', price: 35000 },
    { make: 'Ford', model: 'Mondeo', price: 32000 },
    { make: 'Porsche', model: 'Boxter', price: 72000 }
  ];
  constructor(private http: HttpClient,
    private appService: AppService) {
    this.product = appService.products1;

    this.dataSource = this.rowData;
  }

  ngOnInit(): void {

  }
  helloWorld() {
    alert('Hello world!');
  }

  dataSource: any;
  collapsed = false;
  contentReady = (e) => {
      if(!this.collapsed) {
          this.collapsed = true;
          e.component.expandRow(["EnviroCare"]);
      }
  };
  customizeTooltip = (pointsInfo) => {
      return { text: parseInt(pointsInfo.originalValue) + "%" };
  }

}