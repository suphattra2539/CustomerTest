
import { Injectable, Inject } from '@angular/core';
import { of } from 'rxjs';
import { Customer } from './models/customer';
import { Product } from './models/product';
import { HttpClient } from '@angular/common/http';
import { CookieXSRFStrategy } from '@angular/http';



@Injectable({
    providedIn: 'root'
})
export class AppService {
    private baseUrl : string;
    private baseApi : string;


    constructor(private http: HttpClient,
       // @Inject('BASE_URL') baseUrl : string,
       @Inject('BASE_API') baseApi : string//
        ) 
    { 
       // this.baseUrl =  `${baseUrl}api/Account `;

       // console.log("baseUrl   +" + this.baseUrl );
        console.log("baseApi   : " + baseApi );
        this.baseApi = baseApi ;
    }

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

    rowData = [
        { make: '1Toyota', model: 'Celica', price: 35000 },
        { make: '2Ford', model: 'Mondeo', price: 32000 },
        { make: '3Porsche', model: 'Boxter', price: 72000 },
        { make: '4Porsche2', model: 'Boxter', price: 75000 },
        { make: '5Toyota', model: 'Celica', price: 35000 },
        { make: '6Ford', model: 'Mondeo', price: 32000 },
        { make: '7Porsche', model: 'Boxter', price: 72000 },
        { make: '8Porsche2', model: 'Boxter', price: 75000 },
        { make: '9Toyota', model: 'Celica', price: 35000 },
        { make: '10Ford', model: 'Mondeo', price: 32000 },
        { make: '11Porsche', model: 'Boxter', price: 72000 },
        { make: '12Porsche2', model: 'Boxter', price: 75000 },
        { make: '13Toyota', model: 'Celica', price: 35000 },
        { make: '14Ford', model: 'Mondeo', price: 32000 },
        { make: '15Porsche', model: 'Boxter', price: 72000 },
        { make: '16Porsche2', model: 'Boxter', price: 75000 },
        { make: '17Toyota', model: 'Celica', price: 35000 },
        { make: '18Ford', model: 'Mondeo', price: 32000 },
        { make: '19Porsche', model: 'Boxter', price: 72000 },
        { make: '20Porsche2', model: 'Boxter', price: 75000 },
        { make: '21Toyota', model: 'Celica', price: 35000 },
        { make: '22Ford', model: 'Mondeo', price: 32000 },
        { make: '23Porsche', model: 'Boxter', price: 72000 },
        { make: '24Porsche2', model: 'Boxter', price: 75000 },
        { make: '25Toyota', model: 'Celica', price: 35000 },
        { make: '26Ford', model: 'Mondeo', price: 32000 },
        { make: '27Porsche', model: 'Boxter', price: 72000 },
        { make: '28Porsche2', model: 'Boxter', price: 75000 },
        { make: '29Toyota', model: 'Celica', price: 35000 },
        { make: '30Ford', model: 'Mondeo', price: 32000 },
        { make: '31Porsche', model: 'Boxter', price: 72000 },
        { make: '32Porsche2', model: 'Boxter', price: 75000 }
      ];
    cusEditHttp : Customer;
    addCustomer(Name: string, Age: number) {
        return this.http.post(this.baseApi+'Customers', { Name: Name, Age: Age });
    }

    updateCustomer(id: number, name: string, age: number) {
        return this.http.post(this.baseApi+'Customers/' + id, { name: name, age: age });
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
        return this.http.post(this.baseApi+'Products/' + iD_Product, { name_P: name_P, price_p: price_P });
    }
    getCustomer(customerId: any) {
        return this.http.get(this.baseApi+'Customers/' + customerId);

    }
    getAllCustomer(){
        return this.http.get(this.baseApi+'Customers');
    }
    getCustomer2(customerId: any) {
        this.http.get(this.baseApi+'Customers/' + customerId).subscribe((data : any)=>{
            this.cusEditHttp  = data;
        });
        
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
        return this.http.delete(this.baseApi+'Customers/' + id);


    }
    getProduct(productId: any) {
        console.log("service  : " + productId);
        return this.http.get(this.baseApi+'Products/' + productId);

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

    updateMake(make : string , model : string , price : number){
        let data : any
         for(let i = 0 ; i < this.rowData.length ; i++){
            if(this.rowData[i].make == make){
                this.rowData[i].model = model;
                this.rowData[i].price = price;
               // return this.rowData;
            }
        } 
       
       
    }
}