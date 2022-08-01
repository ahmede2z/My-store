import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';
@Component({
  selector: 'app-purchase-success',
  templateUrl: './purchase-success.component.html',
  styleUrls: ['./purchase-success.component.css']
})
export class PurchaseSuccessComponent implements OnInit {
  name: string;
  total: number;

  constructor(private productsService: ProductsService) {
    this.name = "";
    this.total = 0.0;
  }

  ngOnInit(): void {
    // get user name from productsService
    this.name = this.productsService.getUser();
    // calculate totla Price
    this.total = this.productsService.calculatePrice();
    // clear all item from cart
    this.productsService.clearCart();
  }





}
