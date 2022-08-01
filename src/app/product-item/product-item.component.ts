import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { product } from '../Models/Product';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  // Receive data from products
  @Input() product: product
  @Output() sendItem: EventEmitter<product> = new EventEmitter();
  constructor(private productsService: ProductsService) {
    this.product = {
      id: 1,
      name: '',
      price: 0.0,
      url: '',
      description: "",
      count: 1
    }
  }

  ngOnInit(): void {
  }
  // navigate productInfo and send  product id

  // add prouct to cart
  addToCart(product: product): void {
    this.productsService.addProduct(product);
  }

}
