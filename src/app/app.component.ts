import { Component, ViewChild, TemplateRef, OnInit } from '@angular/core';
import { AppService } from './app.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AlertComponent } from './component/modal/alert/alert.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  constructor(private appService : AppService,
              public matDialog: MatDialog){
  }
  dataUpdate = {
    data : '',
    charEdit: '',
    charReplace : '',
  };
  product;
    
  mdbModal1 = 'mdbModal';
  onClickUpdate(){
    this.appService.updateData(this.dataUpdate);
    this.appService.replaceAll(this.dataUpdate.data,this.dataUpdate.charEdit,this.dataUpdate.charReplace);

  }

  ngOnInit(){
    this.product  = this.appService.products1;
   
  }
  open(){

  }

  openModal() {
    const dialogConfig = new MatDialogConfig();
    // The user can't close the dialog by clicking outside its body
    dialogConfig.disableClose = true;
   // dialogConfig.id = "modal-component";
    //dialogConfig.height = "350px";
   // dialogConfig.width = "600px";
    // https://material.angular.io/components/dialog/overview
    const modalDialog = this.matDialog.open(AlertComponent, dialogConfig);
  }

}
