import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { product } from '../Models/Product';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  myPurchases: product[] = [];
  name: string;
  constructor(private http: HttpClient) {
    this.name = "";
  }
  // get all data from json file
  getProducts(): Observable<product[]> {
    return this.http.get<product[]>('../assets/data.json');
  }
  // add product to cart
  addProduct(product: product) {
    // if myPurchases is empty
    if (this.myPurchases.length == 0) {
      this.myPurchases.push(product);
      console.log(this.myPurchases);
      alert("product Added!");
      return;
    } else {
      let flag = 0;
      this.myPurchases.forEach((element, index) => {
        if (element.id == product.id) {
          flag = 1;
          this.myPurchases[index].count = product.count;
          alert("Product updated!");
          console.log(this.myPurchases);
          return;
        }
      });
      if (!flag) {
        this.myPurchases.push(product);
        console.log(this.myPurchases);
        alert("product Added!");
      }
    }
  }
  // get specific product by id
  getProduct(id: number): Observable<any> {
    return this.http.get<product[]>('/assets/data.json').pipe(map(res => {
      return res.find((item: any) => item.id == id)
    }))
  }
  // get all Purchases
  getMyPurchases(): product[] {
    console.log(this.myPurchases);
    return this.myPurchases;
  }
  //  clear all item form cart
  clearCart() {
    this.myPurchases = [];
  }
  // remove specific product by id
  removeProduct(id: number) {
    this.myPurchases = this.myPurchases.filter(item => item.id != id);
    alert("The product removed")
    console.log(this.myPurchases);
  }
  // calculate total Price
  calculatePrice() {
    let total: number = 0.0;
    this.myPurchases.forEach(element => {
      total += element.count * element.price;
    });
    return parseFloat(total.toFixed(2));
  }
  // set user name
  setUser(name: any) {
    this.name = name;
    console.log(this.name);
  }
  // get user name
  getUser() {
    return this.name;
  }



}
