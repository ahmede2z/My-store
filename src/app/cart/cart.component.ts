import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { product } from '../Models/Product';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  total: number;
  myPurchases: product[] = [];
  submitForm = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.minLength(3)]),
    address: new FormControl('', [Validators.required, Validators.minLength(6)]),
    credit: new FormControl('', [Validators.required, Validators.minLength(16), Validators.maxLength(16), Validators.pattern("^[0-9]*$")])
  })
 

  constructor(private productsService: ProductsService, private router: Router) {
    this.total = 0.0;

  }

  ngOnInit(): void {
    // get all Purchases
    this.myPurchases = this.productsService.getMyPurchases();
    // calculate totla Price
    this.total = this.productsService.calculatePrice();
  }
  // remove specific product by id
  removeProduct(product: product) {
    this.productsService.removeProduct(product.id);
    // get all Purchases
    this.myPurchases = this.productsService.getMyPurchases();
    // calculate totla Price
    this.total = this.productsService.calculatePrice();
  }
  // change Count of an item
  changeCount() {
    // get all Purchases
    this.myPurchases = this.productsService.getMyPurchases();
    // calculate totla Price
    this.total = this.productsService.calculatePrice();
  }
  // clear all item from cart
  clearAll() {
    this.productsService.clearCart();
    // get all Purchases
    this.myPurchases = this.productsService.getMyPurchases();
    // calculate totla Price
    this.total = this.productsService.calculatePrice();
  }
  // submit data
  onSubmit(): void {
    if (this.submitForm.valid) {
      this.productsService.setUser(this.submitForm.value.username);
      this.router.navigate(["/success"]);
    }
  }

}
