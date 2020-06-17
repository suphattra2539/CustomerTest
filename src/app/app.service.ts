
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Customer } from './models/customer';
import { Product } from './models/product';
@Injectable({
    providedIn: 'root'
})
export class AppService {

    constructor() { }

    customers: Customer[] = [
        { customerId: 1, Name: 'Soo', Age: 23 },
        { customerId: 2, Name: 'Ton', Age: 30 },
        { customerId: 3, Name: 'Fai', Age: 27 },
        { customerId: 4, Name: 'Ban', Age: 27 }
    ];

    products: Product[] = [
        { ProductId: 1, Name: 'cccc', Price: 23 },
        { ProductId: 2, Name: 'xxxx', Price: 30 },
        { ProductId: 3, Name: 'ffff', Price: 27 },
        { ProductId: 4, Name: 'ssss', Price: 27 }
    ];

    addCustomer(Name: string, Age: number) {
        let max = 0;
        for (let i = 0; i < this.customers.length; i++) {
            if (max < this.customers[i].customerId) {
                max = this.customers[i].customerId;
            }
        }
        max++;
        this.customers.push({ customerId: max, Name: Name, Age: Age });
    }

    updateCustomer(CustomerId: number, Name: string, Age: number) {
        for (let i = 0; i < this.customers.length; i++) {
            if (this.customers[i].customerId == CustomerId) {
                this.customers[i].Name = Name;
                this.customers[i].Age = Age;
            }
        }
    }
    addProduct(Name: string, Price: number) {
        let max = 0;
        for (let i = 0; i < this.products.length; i++) {
            if (max < this.products[i].ProductId) {
                max = this.products[i].ProductId;
            }
        }
        max++;
        this.products.push({ ProductId: max, Name: Name, Price: Price });
    }
    updateProduct(ProductId: number, Name: string, Price: number) {
        for (let i = 0; i < this.products.length; i++) {
            if (this.products[i].ProductId == ProductId) {
                this.products[i].Name = Name;
                this.products[i].Price = Price;
            }
        }
    }
    getCustomerEdit(customerId: any) {
        let customer = this.customers.filter(custObj => custObj.customerId === customerId);
        console.log('service' + customer);
        return customer[0];
    }
    getProductEdit(productId: any) {
        let product = this.products.filter(custObj => custObj.ProductId === productId);
        console.log('service' + product);
        return product[0];
    }
    getDeleteCustomer(custometDelete:number){
        for (let i = 0; i < this.customers.length; i++) {
            if (this.customers[i].customerId == custometDelete) {
                  this.customers.splice(i,1);
            }
        }
    }
    getProduct() {
        return of([{ ProductId: 1, Name: 'cccc', Price: 23 },
        { ProductId: 2, Name: 'xxxx', Price: 30 },
        { ProductId: 3, Name: 'ffff', Price: 27 },
        { ProductId: 4, Name: 'ssss', Price: 27 }
        ])
    }
}