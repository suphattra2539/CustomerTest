import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule} from '@angular/http';
import { HttpClientModule  } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CustomerComponent } from './customer/customer.component';
import { ProductComponent } from './product/product.component';
import { AppService } from './app.service';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, NgForm } from '@angular/forms';
import { CustomerEditComponent } from './customer/customer-edit/customer-edit.component';
import { ProductEditComponent } from './product/product-edit/product-edit.component';
import { from } from 'rxjs';
import { TestModalComponent } from './test-modal/test-modal.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatDialogModule } from '@angular/material/dialog';
// RECOMMENDED
import { PopoverModule } from 'ngx-bootstrap/popover';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AlertComponent } from './component/modal/alert/alert.component';
import { CustomerEditPopupComponent } from './customer/customer-edit-popup/customer-edit-popup.component';
@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    ProductComponent,
    CustomerEditComponent,
    ProductEditComponent,
    TestModalComponent,
    AlertComponent,
    CustomerEditPopupComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule ,
    PopoverModule.forRoot(),
    ModalModule.forRoot(),
    MatDialogModule//
    ,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
