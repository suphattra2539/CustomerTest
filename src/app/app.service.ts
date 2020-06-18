
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Customer } from './models/customer';
import { Product } from './models/product';
import { HttpClient } from '@angular/common/http';
import { CookieXSRFStrategy } from '@angular/http';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
@Injectable({
    providedIn: 'root'
})
export class AppService {

    constructor(private http: HttpClient,
        public matDialog: MatDialog) { }

    customers: Customer[] = [
        // { customerId: 1, Name: 'Soo', Age: 23 },
        // { customerId: 2, Name: 'Ton', Age: 30 },
        // { customerId: 3, Name: 'Fai', Age: 27 },
        // { customerId: 4, Name: 'Ban', Age: 27 }
    ];

    products: Product[] = [
        // { ProductId: 1, Name: 'cccc', Price: 23 },
        // { ProductId: 2, Name: 'xxxx', Price: 30 },
        // { ProductId: 3, Name: 'ffff', Price: 27 },
        // { ProductId: 4, Name: 'ssss', Price: 27 }
    ];
    customerHttp: Customer;
    products1: any = [
        { productID: 1, name: 'cccc', price: 23 },
        { productID: 2, name: 'xxxx', price: 30 },
        { productID: 3, name: 'ffff', price: 27 },
        { productID: 4, name: 'ssss', price: 27 }
    ];
    cusEditHttp : Customer;
    addCustomer(Name: string, Age: number) {
        return this.http.post('http://localhost:44343/api/Customers', { Name: Name, Age: Age });
    }

    updateCustomer(id: number, name: string, age: number) {

        return this.http.post('http://localhost:44343/api/Customers/' + id, { name: name, age: age });
    }
    addProduct(Name: string, Price: number) {
        // let max = 0;
        // for (let i = 0; i < this.products.length; i++) {
        //     if (max < this.products[i].ProductId) {
        //         max = this.products[i].ProductId;
        //     }
        // }
        // max++;
        // this.products.push({ ProductId: max, Name: Name, Price: Price });
    }
    updateProduct(iD_Product: number, name_P: string, price_P: number) {
        return this.http.post('http://localhost:44343/api/Products/' + iD_Product, { name_P: name_P, price_p: price_P });
    }
    getCustomer(customerId: any) {
        return this.http.get('http://localhost:44343/api/Customers/' + customerId);

    }
    getCustomer2(customerId: any) {
        this.http.get('http://localhost:44343/api/Customers/' + customerId).subscribe((data : any)=>{
            this.cusEditHttp  = data;
            this.getCustomer3();
        })
    }
    getCustomer3(){
        //this.cEditHttpP.getCustomrt( this.cusEditHttp);
    }

    getCustomerEdit(customerId: any) {
        let customer = this.customers.filter(custObj => custObj.customerId === customerId);
        console.log('service' + customer);
        return customer[0];
    }
    getProductEdit(productId: any) {
        let product = this.products.filter(prodObj => prodObj.productID === productId);
        console.log('service' + product);
        return product[0];
    }
    getDeleteCustomer(custometDelete: any) {
        let id = JSON.stringify(custometDelete);
        return this.http.delete('http://localhost:44343/api/Customers/' + id);


    }
    getProduct(productId: any) {
        console.log("service  : " + productId);
        return this.http.get('http://localhost:44343/api/Products/' + productId);

        // return of([{ ProductId: 1, Name: 'cccc', Price: 23 },
        // { ProductId: 2, Name: 'xxxx', Price: 30 },
        // { ProductId: 3, Name: 'ffff', Price: 27 },
        // { ProductId: 4, Name: 'ssss', Price: 27 }
        // ])
    }

    updateData(dataUpdate: any) {
        let ffff = dataUpdate.data.replace(dataUpdate.charEdit, dataUpdate.charReplace);
    }

    replaceAll(str: string, find: string, replace: string) {
        let data = str.replace(new RegExp(find, 'g'), replace);
        console.log("data :" + data);

        let total = '';
        for (let i = 0; i < str.length; i++) {
            console.log([i] + "/" + str[i].replace(new RegExp(find, 'g'), replace));
            total = total + str[i].replace(new RegExp(find, 'g'), replace);
        }
        console.log(total);
    }

    callCUstomerHttp(getCustomers: any) {
        console.log("vvvv" + JSON.stringify(getCustomers));
    }

    showData(template: any) {
        console.log(template);
        return template;
    }
}