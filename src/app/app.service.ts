import { CustomerComponent } from './customer/customer.component';
import { ProductComponent } from './product/product.component';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable()
export class AppService {

    customers = [{ CustomerId: 1, Name: 'Soo', Age: 23 },
    { CustomerId: 2, Name: 'Ton', Age: 30 },
    { CustomerId: 3, Name: 'Fai', Age: 27 },
    { CustomerId: 4, Name: 'Ban', Age: 27 }
    ];

    customerEditID: {
        CustomerId: 0,
        Name: '',
        Age: 0
    };


    productService = [{ ProductId: 1, Name: 'cccc', Price: 23 },
    { ProductId: 2, Name: 'xxxx', Price: 30 },
    { ProductId: 3, Name: 'ffff', Price: 27 },
    { ProductId: 4, Name: 'ssss', Price: 27 }
    ];

    addCustomer(CustomerId: number, Name: string, Age: number) {
        this.customers.push({ CustomerId: CustomerId, Name: Name, Age: Age });
    }
    updateCustomer(CustomerId: number, Name: string, Age: number) {
        let customerID = CustomerId - 1;
        this.customers[customerID].Name = Name;
        this.customers[customerID].Age = Age;
    }

    addProduct(ProductId: number, Name: string, Price: number) {
        this.productService.push({ ProductId: ProductId, Name: Name, Price: Price });
    }
    updateProduct(ProductId: number, Name: string, Price: number) {
        //  let productId = ProductId-1;
        this.productService[ProductId].Name = Name;
        this.productService[ProductId].Price = Price;
    }

    getProduct() {
        return of([{ ProductId: 1, Name: 'cccc', Price: 23 },
        { ProductId: 2, Name: 'xxxx', Price: 30 },
        { ProductId: 3, Name: 'ffff', Price: 27 },
        { ProductId: 4, Name: 'ssss', Price: 27 }
        ])
    }

    getCustomerEdit(customerId: number) {
        let customer = this.customers.filter(custObj => custObj.CustomerId === customerId);
        return of(customer[0]);
        // this.customerEditID.CustomerId = customerVM.CustomerId;
        // this.customerEditID.Name = customerVM.Name;
        // this.customerEditID.Age = customerVM.Age;

        // console.log(this.customerEditID.CustomerId );
        // console.log(this.customerEditID.Name);
        // console.log(this.customerEditID.Age );
    }
}