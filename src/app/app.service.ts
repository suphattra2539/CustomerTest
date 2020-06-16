import { CustomerComponent } from './customer/customer.component';
import { ProductComponent } from './product/product.component';

import { CustomerEditComponent } from './customer/customer-edit/customer-edit.component';
import { ProductEditComponent } from './product/product-edit/product-edit.component';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Customer } from './models/customer';

@Injectable({
    providedIn: 'root'
  })
export class AppService {

    constructor(){
        console.log('AppService create')
    }

    customers: Customer[] = [
        { customerId: 1, Name: 'Soo', Age: 23 },
        { customerId: 2, Name: 'Ton', Age: 30 },
        { customerId: 3, Name: 'Fai', Age: 27 },
        { customerId: 4, Name: 'Ban', Age: 27 }
    ];

    products = [{ ProductId: 1, Name: 'cccc', Price: 23 },
    { ProductId: 2, Name: 'xxxx', Price: 30 },
    { ProductId: 3, Name: 'ffff', Price: 27 },
    { ProductId: 4, Name: 'ssss', Price: 27 }
    ];

    customerIdEdit: number;

    addCustomer(CustomerId: number, Name: string, Age: number) {
        this.customers.push({ customerId: CustomerId, Name: Name, Age: Age });
    }
    updateCustomer(CustomerId: number, Name: string, Age: number) {
        let getCustomer = this.customers;
        let numEdit = 0;
        for(let i = 0 ; i < getCustomer.length ; i++){
            if(getCustomer[i].customerId == CustomerId ){
                numEdit = i;
            }
        }
        this.customers[numEdit].Name = Name;
        this.customers[numEdit].Age = Age;
    }

    addProduct(ProductId: number, Name: string, Price: number) {
        this.products.push({ ProductId: ProductId, Name: Name, Price: Price });
    }
    updateProduct(ProductId: number, Name: string, Price: number) {
        let getProduct = this.products;
        let numEdit = 0;
        for(let i = 0 ; i < getProduct.length ; i++){
            if(getProduct[i].ProductId == ProductId ){
                numEdit = i;
            }
        }
        this.products[numEdit].Name = Name;
        this.products[numEdit].Price = Price;
           
    }

    getProduct() {
        return of([{ ProductId: 1, Name: 'cccc', Price: 23 },
        { ProductId: 2, Name: 'xxxx', Price: 30 },
        { ProductId: 3, Name: 'ffff', Price: 27 },
        { ProductId: 4, Name: 'ssss', Price: 27 }
        ])
    }

    getCustomerEdit(customerId: any) {
        let customer = this.customers.filter(custObj => custObj.customerId === customerId);
        console.log('service'+ customer );
        return customer[0];
    }
    getProductEdit(productId: any) {
        let product = this.products.filter(custObj => custObj.ProductId === productId);
        console.log('service'+ product );
        return product[0];
    }
}