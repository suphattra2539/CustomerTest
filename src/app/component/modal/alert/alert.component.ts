import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Product } from 'src/app/models/product';
import { AppService } from 'src/app/app.service';
import { NgModule } from '@angular/core';
@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {

  

    user = {
      name : 'Suphattra',
      pass :'Sriphodok'
    };
    product : Product;

  constructor(public dialogRef: MatDialogRef<AlertComponent>,
              private appService : AppService) {}

  ngOnInit() {
   this.product  = this.appService.products1;
    
  }
  actionFunction() {
    //alert('I am a work in progress');
    this.closeModal();
    
  }

  closeModal() {
    this.dialogRef.close();
  }
  deleteProduct(){
    
  }

}
