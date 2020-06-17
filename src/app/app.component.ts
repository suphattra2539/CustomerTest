import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private appService : AppService){

  }
  dataUpdate = {
    data : '',
    charEdit: '',
    charReplace : '',
  };
    

  onClickUpdate(){
    this.appService.updateData(this.dataUpdate);
    this.appService.replaceAll(this.dataUpdate.data,this.dataUpdate.charEdit,this.dataUpdate.charReplace);

  }
}
