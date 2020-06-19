import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { CustomerComponent } from './customer/customer.component';
import { ProductComponent } from './product/product.component';
import { CustomerEditComponent } from './customer/customer-edit/customer-edit.component';
import { ProductEditComponent } from './product/product-edit/product-edit.component';
import { TestModalComponent } from './test-modal/test-modal.component';
import { CustomerGridComponent } from './customer-grid/customer-grid.component';

const appRoutes: Routes = [
    { path: '', redirectTo: 'customer-grid', pathMatch: 'full' },
    { path: 'customer', component: CustomerComponent },
    { path: 'customer-edit', component: CustomerEditComponent },
    { path: 'product', component: ProductComponent },
    { path: 'product-edit', component: ProductEditComponent },
    { path : 'test-modal' , component: TestModalComponent },

    { path : 'customer-grid' , component: CustomerGridComponent }
];
@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}