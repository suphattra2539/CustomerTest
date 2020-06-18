import { Component, OnInit, TemplateRef } from '@angular/core';

import { PopoverModule } from 'ngx-bootstrap/popover';
import { ModalModule, BsModalRef } from 'ngx-bootstrap/modal';
import { AppService } from '../app.service';
@Component({
  selector: 'app-test-modal',
  templateUrl: './test-modal.component.html',
  styleUrls: ['./test-modal.component.css'],
  
})
export class TestModalComponent implements OnInit {
//  poppverButton= [
//   'top',
//   'right',
//   'auto',
//   'left',
//   'bottom'
//  ];
  poppverButtonSet:string ;

//  dataSet={
//     title : 'ส่วนหัว' ,
//     name : 'ข้อมูลแสดงผล'
//  };

//  html: string = `<span class="btn btn-danger">  การสร้างพื้นที่ภายใน   !!!</span>`;
//  html2: string = `<a href="https://getbootstrap.com/docs/4.0/components/buttons/" class="btn btn-danger">  ไปหน้าเว็บ`;
 
  
  constructor(private appService : AppService,
              ) {}

  ngOnInit() {
   this.poppverButtonSet = 'bottom';
  }
  openInfoModal(){
    
  }
  openModal(){

  }
  // modalRef: any;
  // modalService;
  // openModal(template: TemplateRef<any>) {
  //   this.modalRef = this.modalTest.show(template);
  // }
  // bsModalRef: BsModalRef;
  // openModalWithComponent(){
  //   const initialState = {
  //     list: [
  //       'Open a modal with component',
  //       'Pass your data',
  //       'Do something else',
  //       '...'
  //     ],
  //     title: 'Modal with component'
  //   };
  //  this.bsModalRef = this.modalTest.show(ModalContentComponent, {initialState});
   // this.bsModalRef.content.closeBtnName = 'Close';

  // }
  open(){
   // const modalRef = this.modalService.open(NgbdModalContent);
   // modalRef.componentInstance.name = 'World';
  }
}
